import { Loading } from '../../pages';
import { api } from '../../services/api'
import { useEffect, useState } from 'react'

export const Main = ({ patente })=>{

const [patentes, setPatentes] = useState([]);
const [removeLoading, setRemoveLoading] = useState(false);

const colors = [
    { border: "border-red-500" },
    { border: "border-green-500" },
];

useEffect(() => {
    api.get("patentes_concedidas")
      .then((resp) => {
        setPatentes(resp.data);
        setRemoveLoading(true);
      })
  }, []);

useEffect(() => {
    setPatentes(patente)
}, [patente]);
    
return(
    <>
        <div className="container mx-auto">
            <main className="items-center justify-between max-w-screen-xl mx-auto px-2 pt-7 pb-8" >
                <div>
                    <select className="w-50 h-12 bg-white-500 border border-gray-300 rounded-md shadow-sm px-10 py-2 text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 mx-2">
                        <option value="option1">Categorias</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                    <select className="w-50 h-12 bg-white-500 border border-gray-300 rounded-md shadow-sm px-10 py-2 text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 mx-2">
                        <option value="option1">Situação</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
                
                <div>
                    <h1 className=" px-2 pt-7 pb-8 text-xl mb-1 font-semibold">Pedidos</h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 sm:gap-3">
                    {patentes.length > 0 && 
                        patentes.map((patente, index) => {
                            const color = colors[index % colors.length];
                            const animation = index % 2 === 0 ? "fade-up-right" : "fade-up-left"

                            return (
                                <div
                                key={index}
                                className={`rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark pt-4 box border-t-4 ${color.border}`}
                                data-aos={animation}
                                >
                                <h1 className="text-base font-bold m-4">{patente.titulo}</h1>
                                <p className="font-semibold ml-4">Número do pedido</p>
                                <p className="font-normal ml-4 text-stone-500">{patente.numero_pedido}</p>
                                <p className="font-semibold ml-4 pb-4">{patente.depositantes}</p>
                            </div>
                        );
                    })}
                    {!removeLoading && <Loading />}
                </div>
            </main>
        </div>
    </>
);
}