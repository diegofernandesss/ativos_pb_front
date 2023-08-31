import { useLocation } from "react-router-dom";
import dayjs from "dayjs";
import { SectionContainer,  FlexContainer, StyledImg, ComponentWithImage } from "./MainCss";
import { lampadaImg, notebookImg } from "../../assets";

export const Main = () => {

    const location = useLocation();
    const { detailsData, situacao } = location.state;

    const { image, alt } = lampadaImg;
    console.log(detailsData)

    
    return (
        <>
          <SectionContainer data-aos="fade-up-right">
            <FlexContainer>
                <div className="md:w-1/2 md:pr-10 ">
                    <div className="p-6 rounded-lg  shadow-2xl ">
                        <h1 className="text-3xl md:text-2xl lg:text-4xl font-bold mb-4 text-red-500">{detailsData.numero_pedido}</h1>

                                {situacao !== "pendente" ? 
                                    <h2 className="text-xl md:text-2xl lg:text-xl font-bold mb-2 text-slate-700">Título:</h2> : ""
                                }
                                
                                {situacao === "regiSoftware" ? 
                                    <p  className="text-lg md:text-xl font-semibold text-gray-500 mb-6">{detailsData.titulo_programa}</p> : 
                                    <p  className="text-lg md:text-xl font-semibold text-gray-500 mb-6">{detailsData.titulo}</p>}


                                <h2 className="text-xl md:text-2xl lg:text-xl font-bold mb-4 text-slate-700">Data de Depósito:</h2>
                                <p  className="text-lg md:text-xl font-semibold text-gray-500 mb-6">{dayjs(detailsData.data_deposito).format("DD/MM/YYYY")}</p>


                                {situacao === "regiSoftware" ? <h2 className="text-xl md:text-2xl lg:text-xl font-bold mb-4 text-slate-700">Linguagem De Desenvolvimento:</h2> : ""}
                                {detailsData.linguagem_desenvolvimento && detailsData.linguagem_desenvolvimento.map((ling, index) => (
                                    <p key={index} className="text-lg md:text-xl font-semibold text-gray-500 mb-2">{ling}</p>
                                ))}


                                {situacao === "concedida" ? <h2 className="text-xl md:text-2xl lg:text-xl font-bold mb-4 text-slate-700">Data de Publicação:</h2> : ""}
                                {situacao === "pendente" ?  <h2 className="text-xl md:text-2xl lg:text-xl font-bold mb-4 text-slate-700">Data de Protocolo:</h2> : ""}
                                {situacao === "concedida" ? <p  className="text-lg md:text-xl font-semibold text-gray-500 mb-4">{dayjs(detailsData.data_publicacao).format("DD/MM/YYYY")}</p> : ""}
                                {situacao === "pendente" ? <p  className="text-lg md:text-xl font-semibold text-gray-500 mb-4">{dayjs(detailsData.data_protocolo).format("DD/MM/YYYY")}</p> : ""}

                                {situacao === "concedida" ?  <h2 className="text-xl md:text-2xl lg:text-xl font-bold mb-4 text-slate-700">Classificação IPC:</h2> : ""}
                                    {detailsData.classificacoes_ipc && detailsData.classificacoes_ipc.map((ipc, index) => (
                                        <p key={index} className="text-lg md:text-xl font-semibold text-gray-500 mb-2">{ipc}</p>
                                    ))}

                                {situacao === "concedida" ?  <h2 className="text-xl md:text-2xl lg:text-xl font-bold mb-4 text-slate-700">Classificação CPC:</h2> : ""}
                                    {detailsData.classificacoes_cpc && detailsData.classificacoes_cpc.map((cpc, index) => (
                                        <p key={index} className="text-lg md:text-xl font-semibold text-gray-500 mb-2">{cpc}</p>
                                    ))}

                                {situacao === "concedida" ? <h2 className="text-2xl md:text-2xl lg:text-xl font-bold mb-4 text-slate-700">Resumo:</h2> : ""}
                                <p  className="text-lg md:text-xl text-gray-500 mb-6">{detailsData.resumo}</p>

                                {situacao === "concedida" ? <h2 className="text-2xl md:text-2xl lg:text-xl font-bold mb-4 text-slate-700">Inventores:</h2> : ""}
                                    {detailsData.inventores && detailsData.inventores.map((inventor, index) => (
                                        <p key={index} className="text-lg md:text-xl font-semibold text-gray-500 mb-1">{inventor}</p>
                                    ))}

                                {situacao !== "regiSoftware" ? 
                                    <h2 className="text-xl md:text-2xl lg:text-xl font-bold mb-2 text-slate-700">Depositantes:</h2> : 
                                    <h2 className="text-xl md:text-2xl lg:text-xl font-bold mb-2 text-slate-700">Titulares:</h2>}

                                {
                                    detailsData.depositantes ? detailsData.depositantes.map((depositante, index) => (
                                        <p key={index} className="text-lg md:text-xl font-semibold text-gray-500 mb-1">{depositante}</p>
                                    ))
                                :
                                    detailsData.nomes_titulares ? detailsData.nomes_titulares.map((titular, index) => (
                                            <p key={index} className="text-lg md:text-xl font-semibold text-gray-500 mb-1">{titular}</p>
                                        ))
                                    :
                                    detailsData.software_registration.nomes_titulares.map((titular, index) => (
                                        <p key={index} className="text-lg md:text-xl font-semibold text-gray-500 mb-1">{titular}</p>
                                    ))
                                        }

                                {situacao === "regiSoftware"? <h2 className="text-xl md:text-2xl lg:text-xl font-bold mb-2 text-slate-700">Campo de Aplicação:</h2>: ""} 
                                {detailsData.campo_aplicacao && detailsData.campo_aplicacao.map((nomes, index) => (
                                        <p key={index} className="text-lg md:text-xl font-semibold text-gray-500 mb-1">{nomes}</p>
                                    ))}    

                                {situacao === "regiSoftware"? <h2 className="text-xl md:text-2xl lg:text-xl font-bold mb-2 text-slate-700">Tipo Programa:</h2>: ""}
                                {detailsData.tipo_programa && detailsData.tipo_programa.map((tip, index) => (
                                        <p key={index} className="text-lg md:text-xl font-semibold text-gray-500 mb-1">{tip}</p>
                                    ))}


                                {situacao === "regiSoftware"? <h2 className="text-xl md:text-2xl lg:text-xl font-bold mb-2 text-slate-700">Nomes dos Autores:</h2>: ""}
                                {detailsData.nomes_autores && detailsData.nomes_autores.map((nomes, index) => (
                                        <p key={index} className="text-lg md:text-xl font-semibold text-gray-500 mb-1">{nomes}</p>
                                    ))}

                                {situacao === "pendente" ? <h2 className="text-xl md:text-2xl lg:text-xl font-bold mb-2 text-slate-700">Natureza:</h2> : ""}
                                {situacao === "pendente" ? <p className="text-lg md:text-xl font-semibold text-gray-500 mb-2">{detailsData.natureza}</p>: ""}

                                {situacao === "pendente" ? <h2 className="text-xl md:text-2xl lg:text-xl font-bold mb-2 text-slate-700">Situação INPI:</h2> : ""}
                                {situacao === "pendente" ? <p className="text-lg md:text-xl font-semibold text-gray-500 mb-2">{detailsData.situacao_inpi}</p>: ""}

                                {situacao === "pendente" ? <h2 className="text-xl md:text-2xl lg:text-xl font-bold mb-2 text-slate-700">Estado Detalhado:</h2> : ""}
                                {situacao === "pendente" ? <p className="text-lg md:text-xl font-semibold text-gray-500 mb-2">{detailsData.estado_detalhado}</p>: ""}

                                {situacao === "pendente" ? <h2 className="text-xl md:text-2xl lg:text-xl font-bold mb-2 text-slate-700">Área Tecnológica:</h2> : ""}
                                {situacao === "pendente" ? <p className="text-lg md:text-xl font-semibold text-gray-500 mb-2">{detailsData.area_tecnologica}</p> : ""}

                                {situacao === "pendente" ? <h2 className="text-xl md:text-2xl lg:text-xl font-bold mb-2 text-slate-700">Campo Tecnológico:</h2> : ""}
                                {situacao === "pendente" ? <p className="text-lg md:text-xl font-semibold text-gray-500 mb-2">{detailsData.campo_tecnologico}</p> : ""}
                            </div>
                             
                    </div> 
                    {situacao === "regiSoftware" ? 
                            <ComponentWithImage>
                                    <StyledImg src={notebookImg[0].image} alt={alt}/>
                            </ComponentWithImage> : 
                            <ComponentWithImage>
                                    <StyledImg src={image} alt={alt}/>
                            </ComponentWithImage>
                        }
                    </FlexContainer>
                </SectionContainer>
        </>
    )
}