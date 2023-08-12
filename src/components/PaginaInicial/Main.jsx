import { useEffect, useState } from 'react';
import { Loading } from '../../pages';
import { api } from '../../services/api';
import { QueryNotFound } from './QueryNotFound';
import Pagination from 'react-js-pagination';

export const Main = ({ ictSelected }) => {

    const [patentes, setPatentes] = useState([])
    const [activePage, setActivePage] = useState(1);
    const [totPatentes, setTotPatentes] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [removeLoading, setRemoveLoading] = useState(false);


    const colors = [
        { border: "border-red-500" },
        { border: "border-slate-500" },
    ];
    
    
    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    }
    
    useEffect(() => {
        setActivePage(1);
    }, [ictSelected]);

    const max_items = 6
    useEffect(() => {
        setRemoveLoading(false);
        setIsLoading(true);
        setPatentes([]);
        if(ictSelected !== "ICTs"){
            api.get(`patentes_concedidas/ict/${ictSelected}?page=${activePage}&limit=${max_items}`)
            .then((resp) => {
                setPatentes(resp.data.patentes)
                setTotPatentes(resp.data.number_patentes)
                setRemoveLoading(true);
                setIsLoading(false);
            })
        }else {
            api.get(`patentes_concedidas?page=${activePage}&limit=${max_items}`)
            .then((resp) => {
                setPatentes(resp.data.patentes);
                setTotPatentes(resp.data.number_patentes)
                setRemoveLoading(true);
                setIsLoading(false);
            })
        }
    }, [activePage, ictSelected, setRemoveLoading]);

    return(
        <>
            <div className="container mx-auto">
                <main className="items-center justify-between max-w-screen-xl mx-auto px-2 pt-7 pb-8" >
                    <div>
                        <select className="w-50 h-12 bg-white-500 border border-gray-300 rounded-md shadow-sm px-10 py-2 text-xs font-medium text-black focus:outline-none focus:ring-2  focus:ring-red-500 focus:border-red-500 mx-2 cursor-pointer">
                            <option value="option1">Categorias</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                        <select className="w-50 h-12 bg-white-500 border border-gray-300 rounded-md shadow-sm px-10 py-2 text-xs font-medium text-black focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 mx-2 cursor-pointer">
                            <option value="option1">Situação</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                    
                    <div>
                        <h1 className="px-2 pt-7 pb-8 text-xl mb-1 font-semibold">Pedidos</h1>
                    </div>
                    {(!removeLoading || isLoading) && <div className='flex justify-center items-center mb-16'><Loading /></div>}
                    {removeLoading && !isLoading && patentes.length === 0 && <div className="flex justify-center items-center mb-20"><QueryNotFound>CONSULTA NÃO ENCONTRADA</QueryNotFound>
                    </div>}
                    {removeLoading && <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 sm:gap-3">
                        {patentes.length > 0 && 
                            patentes.map((patente, index) => {
                                const color = colors[index % colors.length];
                                    
                                    return (
                                        <div
                                        key={index}
                                        className={`rounded-xl shadow-lg hover:shadow-xl mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark pt-4 box border-t-4 ${color.border}`}
                                        data-aos="fade-up-right"
                                        >
                                        <h1 className="text-base font-bold m-4">{patente.titulo}</h1>
                                        <p className="font-semibold ml-4">Número do pedido</p>
                                        <p className="font-normal ml-4 text-stone-500">{patente.numero_pedido}</p>
                                        <p className="font-semibold ml-4 pb-4">{patente.depositantes}</p>
                                        <p className="text-sm ml-4 mr-4 py-2 px-4 rounded-full border-0 
                                            font-semibold bg-teal-50 text-teal-500  
                                            mb-3 w-40">Patente Concedida</p>
                                        <div>

                                        <div>
                                            <div className="text-sm ml-4 mr-4 py-2 px-4 rounded-full border-0 
                                                font-semibold bg-violet-50 text-violet-500 hover:bg-violet-100  
                                                mb-3 w-40 flex items-center justify-center cursor-pointer">
                                                    <div className="mr-3">Mais Detalhes</div>
                                                    <div className="w-2 h-2 ml-2 border-t-2 border-r-2 transform rotate-45 border-violet-500"></div>
                                            </div>
                                            </div>
                                            
                                        </div>   
                                        <div> 
                                            <div className="text-sm ml-4 mr-4 py-2 px-4 rounded-full border-0 
                                                font-semibold bg-violet-50 text-violet-400 hover:bg-violet-100  
                                                mb-3 w-40 flex items-center justify-center cursor-pointer hover:cursor-not-allowed">
                                                    <div className="mr-3">Processando... </div>
                                                    <div className="w-6 h-6 rounded-full animate-spin
                                                                    border-4 border-solid border-violet-500 
                                                                    border-t-transparent "></div>
                                                </div>
                                        </div> 
                                    </div>
                                );
                            })}
                        </div>}
                            <Pagination
                                activePage={activePage}
                                itemsCountPerPage={max_items}
                                totalItemsCount={totPatentes}
                                pageRangeDisplayed={4}
                                onChange={handlePageChange}
                                innerClass='flex justify-center m-10'
                                itemClass='px-3 py-1 border border-gray-300 rounded-lg font-[Poppins] items-center border-1 border-red-500 hover:bg-red-500'
                                activeClass='bg-red-500 text-white'
                                // prevPageText={<svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>}
                                // nextPageText={<svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>}
                            />
                            
                </main>
            </div>
        </>
    );  
}
