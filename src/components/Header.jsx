import { api } from '../services/api'
import { useEffect, useRef, useState } from 'react'

const Header = ({updatePatente}) =>{

  const [icts, setIcts] = useState([])
  const [ictSelected, setIctSelected] = useState("")
  const isFirstRender = useRef(true);

  useEffect(() =>{
    api.get("icts")
    .then((resp) => setIcts(resp.data))
  }, [])

 console.log(icts);
  const valorIct = (e) => {
    setIctSelected(e.target.value)
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (ictSelected !== "ICTs") {
      api.get(`patentes_concedidas/ict/${ictSelected}`)
        .then((resp) => updatePatente(resp.data))
        .catch((error) => console.log(error)); 
    } else {
      api.get(`patentes_concedidas`)
      .then((resp) => updatePatente(resp.data))
    }
  }, [ictSelected, updatePatente]);


    return(
        <>
            <header>
                <div className="bg-gray-200">
                    <div className="container mx-auto">
                        <div className='container items-center justify-between max-w-screen-xl p-4 mx-auto px-4 pt-8 pb-8'>
                            <div className="mt-5 flex rounded-3xl bg-white py-2.5 pr-2.5 shadow-xl shadow-red-900/5 focus-within:ring-2 focus-within:ring-red-600">
                                <input type="text" placeholder="Digite o número do Pedido" className="-my-2.5 flex-auto bg-transparent pl-6 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none " />
                                <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow-xl">
                                  <div className="absolute inset-0 w-3 bg-red-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                  <span className="relative text-black group-hover:text-white">Pesquisar</span>
                                </button>
                            </div>
                        </div>
                        
                        <div className="items-center justify-between max-w-screen-xl px-4 py-4 pb-4 mx-auto">
                            <select className="w-50 h-12 bg-white-500 border border-gray-300 rounded-md shadow-sm px-10 py-2 text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500" onChange={valorIct}>
                                <option value="ICTs">Selecione as ICT's</option>
                                {icts.map((ict, index) =>{
                                    return <option key={index} value={ict.cnpj}>{ict.sigla}</option>
                                })}
                            </select>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;