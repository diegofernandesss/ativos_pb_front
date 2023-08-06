import { useEffect, useState } from 'react';
import { Loading } from '../../pages';
import { api } from '../../services/api';
import { QueryNotFound } from './QueryNotFound';

export const Main = ({ patente, removeLoading, setRemoveLoading }) => {

    const [patentes, setPatentes] = useState([])
    const [quantPg, setQuantPg] = useState(0);
    let [num, setNum] = useState(1)
    let [cur, setCur] = useState(1)



    const colors = [
        { border: "border-red-500" },
        { border: "border-slate-500" },
    ];

    let NextArrow = () =>{
        if (cur < quantPg){
            num < quantPg && setNum(++num); 
            cur < quantPg && setCur(cur+1)
            
            api.get(`patentes_concedidas?page=${cur+1}&limit=${max_items}`)
                .then((resp) => {
                setPatentes(resp.data);
                setRemoveLoading(false);
            })
        }
        
    }
    
    let BackArrow = () =>{
        if (cur > 1){
            num > 1 && setNum(--num);
            cur > 1 && setCur(cur-1)

            api.get(`patentes_concedidas?page=${cur-1}&limit=${max_items}`)
                .then((resp) => {
                setPatentes(resp.data);
                setRemoveLoading(false);
            })
        }
    }
    // useEffect para saber quantas patentes concedidas existem
    useEffect(() => {
        api.get(`patentes_concedidas`)
        .then((resp) => setQuantPg(Math.ceil(resp.data.length / max_items)))
    }, [])

    // useEffect de quando inicia aplicação
    useEffect(() => {
        api.get(`patentes_concedidas?page=1&limit=${max_items}`)
        .then((resp) => {
            setPatentes(resp.data);
            setRemoveLoading(false);
        })
    }, [setRemoveLoading]);
    
    // Paginação que vem quando seleciona uma ict do header.jsx
    useEffect(() => {
        setPatentes(patente)
        setQuantPg(Math.ceil(patente.length / max_items))
    }, [patente]);
    const max_items = 6
    
    // Paginação de quando clica em um numero
    useEffect(() => {
        setRemoveLoading(false);
        api.get(`patentes_concedidas?page=${cur}&limit=${max_items}`)
            .then((resp) => {
            setPatentes(resp.data);
            setRemoveLoading(true);

        })
    }, [cur, setRemoveLoading])


    const pages = Array.from({ length: quantPg}, (_, i) => ({page: i+1}))

    return(
    <>
        <div className="container mx-auto">
            <main className="items-center justify-between max-w-screen-xl mx-auto px-2 pt-7 pb-8" >
                <div>
                    <select className="w-50 h-12 bg-white-500 border border-gray-300 rounded-md shadow-sm px-10 py-2 text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 mx-2 cursor-pointer">
                        <option value="option1">Categorias</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                    <select className="w-50 h-12 bg-white-500 border border-gray-300 rounded-md shadow-sm px-10 py-2 text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 mx-2 cursor-pointer">
                        <option value="option1">Situação</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
                
                <div>
                    <h1 className="px-2 pt-7 pb-8 text-xl mb-1 font-semibold">Pedidos</h1>
                </div>
                {!removeLoading && <div className='flex justify-center items-center mb-16'><Loading /></div>}
                {removeLoading && patentes.length === 0 && <div className="flex justify-center items-center mb-20"><QueryNotFound />
                </div>}
                {removeLoading && <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 sm:gap-3">
                    {patentes.length > 0 && 
                        patentes.map((patente, index) => {
                            const color = colors[index % colors.length];

                                return (
                                    <div
                                    key={index}
                                    className={`rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark pt-4 box border-t-4 ${color.border}`}
                                    data-aos="fade-up-right"
                                    >
                                    <h1 className="text-base font-bold m-4">{patente.titulo}</h1>
                                    <p className="font-semibold ml-4">Número do pedido</p>
                                    <p className="font-normal ml-4 text-stone-500">{patente.numero_pedido}</p>
                                    <p className="font-semibold ml-4 pb-4">{patente.depositantes}</p>
                                    <p class="text-sm ml-4 mr-4 py-2 px-4 rounded-full border-0 
                                          font-semibold bg-teal-50 text-teal-500 hover:bg-teal-100  
                                          mb-3 w-40">Patente Concedida</p>
                                </div>
                            );
                        })}
                    </div>}
                    <div className='flex bg-white rounded-lg font-[Poppins] justify-center items-center m-8'>
                        <button onClick={BackArrow} className='h-12 border-2 border-r-0 border-red-500 px-4 rounded-l-lg hover:bg-red-500 hover:text-white'>
                            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                        </button>
                        {pages.map((pg, index) => (
                            <button key={index} onClick={()=> setCur(pg.page)} className={`h-12 border-2 border-r-0 border-red-500 w-12 ${cur === pg.page && 'bg-red-500 text-white'}`}>{pg.page}</button>
                        ))}
                        <button onClick={NextArrow}className='h-12 border-2 border-red-500 px-4 rounded-r-lg hover:bg-red-500 hover:text-white'>
                            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    {/* <Pagination /> */}
                </main>
            </div>
        </>
    );
}