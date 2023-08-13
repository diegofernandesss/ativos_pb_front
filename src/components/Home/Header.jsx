import { useEffect, useState } from 'react'
import { api } from '../../services/api'

export const Header = ({ setIctSelectedMain }) =>{
  const [icts, setIcts] = useState([])
  const [ictSelected, setIctSelected] = useState("ICTs")

  useEffect(() =>{
    api.get("icts")
    .then((resp) => setIcts(resp.data))
  }, [])

  const valorIct = (e) => {
    setIctSelected(e.target.value)
  }

  useEffect(() => {
    if (ictSelected !== "ICTs") {
      setIctSelectedMain(ictSelected)
    } else {
      setIctSelectedMain(ictSelected)
    }
  }, [setIctSelectedMain, ictSelected]);

return(
    <>
        <header>
            <div className="bg-gray-200">
                <div className="container mx-auto">
                    <div className='container items-center justify-between max-w-screen-xl p-4 mx-auto px-4 pt-8 pb-8'>
                        <div className="mt-5 flex rounded-3xl bg-white py-2.5 pr-2.5 shadow-xl shadow-red-900/5 focus-within:ring-2 focus-within:ring-red-600">
                            <input type="text" placeholder="Digite o número do Pedido" className="-my-2.5 flex-auto bg-transparent pl-6  text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none " />
                            <button className="group relative h-10 w-40 overflow-hidden rounded-lg bg-white text-lg shadow-xl">
                              <div className="absolute inset-0 w-3 bg-red-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                              <span className="relative text-black group-hover:text-white text-sm">Pesquisar</span>
                            </button>
                        </div>
                    </div>
                    
                    <div className="items-center justify-between max-w-screen-xl px-4 py-4 pb-4 mx-auto">
                        <select className="w-50 h-12 bg-white-500 border border-gray-300 rounded-md shadow-sm px-10 py-2 text-xs font-medium text-black focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 cursor-pointer" onChange={valorIct}>
                            <option value="ICTs">Selecione a ICT</option>
                            {icts.map((ict, index) =>{
                                return <option className='' key={index} value={ict.cnpj}>{ict.sigla}</option>
                            })}
                        </select>
                    </div>

                    
                </div>
            </div>
        </header>
    </>
    );
}