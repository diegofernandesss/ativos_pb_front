import { useLocation } from "react-router-dom";
import dayjs from "dayjs";

export const Main = () => {

    const location = useLocation();
    const { detailsData } = location.state;
    
    return (
        <>
            <section className="text-white py-20 px-6 md:px-12 lg:px-24 xl:px-32 container mx-auto" data-aos="fade-up-right">
                    <div className="md:flex md:justify-between md:items-center">
                        <div className="md:w-1/2 mb-6 md:mb-0 ">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-red-500">{detailsData.numero_pedido}</h1>

                                <h2 className="text-2xl md:text-2xl lg:text-2xl font-bold mb-4 text-slate-500">Título:</h2>
                                <p  className="text-lg md:text-xl font-bold text-gray-400 mb-6">{detailsData.titulo}</p>

                                <h2 className="text-2xl md:text-2xl lg:text-2xl font-bold mb-4 text-slate-500">Data de Depósito:</h2>
                                <p  className="text-lg md:text-xl font-bold text-gray-400 mb-6">{dayjs(detailsData.data_deposito).format("DD/MM/YYYY")}</p>

                                <h2 className="text-2xl md:text-2xl lg:text-2xl font-bold mb-4 text-slate-500">Data de Publicação:</h2>
                                <p  className="text-lg md:text-xl font-bold text-gray-400 mb-6">{dayjs(detailsData.data_publicacao).format("DD/MM/YYYY")}</p>

                                <h2 className="text-2xl md:text-2xl lg:text-2xl font-bold mb-4 text-slate-500">Classificação IPC:</h2>
                                <p  className="text-lg md:text-xl font-bold text-gray-400 mb-6">{detailsData.classificacoes_ipc}</p>

                                <h2 className="text-2xl md:text-2xl lg:text-2xl font-bold mb-4 text-slate-500">Resumo:</h2>
                                <p  className="text-lg md:text-xl text-gray-500 mb-6">{detailsData.resumo}</p>

                                <h2 className="text-2xl md:text-2xl lg:text-2xl font-bold mb-4 text-slate-500">Inventores:</h2>
                                <p  className="text-lg md:text-xl text-gray-500 mb-6">{detailsData.inventores}</p>

                            </div>
                        <div className="md:w-1/2 ">
                            <img src="" alt="" className="w-full rounded-lg "/>
                        </div>
                    </div> 
                </section>
        </>
    )
}