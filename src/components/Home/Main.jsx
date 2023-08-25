import { useEffect, useRef, useState } from 'react';
import { Loading } from '../../pages';
import { api } from '../../services/api';
import Pagination from 'react-js-pagination';
import dayjs from "dayjs";
import { Container, MainContainer, Select, Title, QueryNotFound, 
         LoadingContainer, NotFoundContainer, Card, GridCards, CardTitle, 
         CardNumber, CardText, CardDepositorText, StatusBadge, 
         LoadingButton, Loadingtext, LoadAnimate, 
         DetailsButton, DetailsText, ArrowIcon, PageItem
} from './MainCss';

export const Main = ({ ictSelected, resultNumPatente, removeLoading, setRemoveLoading, setSituacaoSearch }) => {

    const [patentes, setPatentes] = useState([])
    const [activePage, setActivePage] = useState(1);
    const [totPatentes, setTotPatentes] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [situacao, setSituacao] = useState("concedida")
    const [secaoSelected, setSecaoSelected] = useState(0)
    const [secoes, setSecoes] = useState([])
    const [subSecaoSelected, setSubSecaoSelected] = useState(0)
    const [subSecoes, setSubSecoes] = useState([])
    const [codigoIpcSelected, setCodigoIpcSelected] = useState("")
    const [codigosIpc, setCodigosIpc] = useState([])
    const[loadingPatentDetails, setLoadingPatentDetails] = useState(false)
    const[handleClickSelected, setHandleClickSelected] = useState("")

    const isFirstRender = useRef(true);

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
        window.scrollTo(0, 0);
    }

    const handleClickDetails = (cardID) => {
        setHandleClickSelected(cardID)
        setLoadingPatentDetails(true)
        api.get(`patente_concedida/${cardID}`)
        .then((resp) => {
            setLoadingPatentDetails(false)
            console.log(resp.data);
        })
    }

    const ChangeSituacao = (e) => {
        setSituacao(e.target.value)
        setSituacaoSearch(e.target.value)
    }

    const ChangeSecao = (e) => {
        setSecaoSelected(e.target.value)
    }

    const ChangeSubSecao = (e) => {
        setSubSecaoSelected(e.target.value)
    }

    const ChangeCodigoIPC = (e) => {
        setCodigoIpcSelected(e.target.value)
    }
    useEffect(() => {
        setActivePage(1);
    }, [ictSelected, situacao]);

    useEffect(() => {
        setRemoveLoading(false);
        setIsLoading(true);
        setPatentes([]);
        if(situacao === "pendente"){
            api.get(`patentes_pendentes?page=${activePage}&limit=${max_items}`)
            .then((resp) => {
                setPatentes(resp.data.patentes)
                setTotPatentes(resp.data.number_patentes)
                setRemoveLoading(true);
                setIsLoading(false);
            })
        }else if (situacao === "regiSoftware"){
            api.get(`registros_softwares?page=${activePage}&limit=${max_items}`)
            .then((resp) => {
                setPatentes(resp.data.software_records);
                setTotPatentes(resp.data.registration_number)
                setRemoveLoading(true);
                setIsLoading(false);
            })
        }
    }, [activePage, setRemoveLoading, situacao]) 

    const max_items = 6
    useEffect(() => {
        setRemoveLoading(false);
        setIsLoading(true);
        setPatentes([]);
        if(situacao === "concedida"){
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
        }else if (situacao === "pendente") {
            if(ictSelected !== "ICTs"){
                api.get(`patentes_pendentes/ict/${ictSelected}?page=${activePage}&limit=${max_items}`)
                .then((resp) => {
                    setPatentes(resp.data.patentes)
                    setTotPatentes(resp.data.number_patentes)
                    setRemoveLoading(true);
                    setIsLoading(false);
                })
            }else {
                api.get(`patentes_pendentes?page=${activePage}&limit=${max_items}`)
                .then((resp) => {
                    setPatentes(resp.data.patentes)
                    setTotPatentes(resp.data.number_patentes)
                    setRemoveLoading(true);
                    setIsLoading(false);
                })
            }
        }else if (situacao === "regiSoftware"){
            if(ictSelected !== "ICTs"){
                api.get(`registros_softwares/ict/${ictSelected}?page=${activePage}&limit=${max_items}`)
                .then((resp) => {
                    setPatentes(resp.data.software_records)
                    setTotPatentes(resp.data.registration_number)
                    setRemoveLoading(true);
                    setIsLoading(false);
                })
                .catch(() => {
                    setPatentes([])
                    setTotPatentes(0)
                    setRemoveLoading(true);
                    setIsLoading(false);
                })
            }else {
                api.get(`registros_softwares?page=${activePage}&limit=${max_items}`)
                .then((resp) => {
                    setPatentes(resp.data.software_records)
                    setTotPatentes(resp.data.registration_number)
                    setRemoveLoading(true);
                    setIsLoading(false);
                })
            }
        }
    }, [activePage, ictSelected, setRemoveLoading, situacao]);

    useEffect(() => {
        setPatentes(resultNumPatente)
        setTotPatentes(1)  
    }, [resultNumPatente])

    useEffect(() => {
        api.get("classificacoes_ipc")
        .then((resp) => {
            setSecoes(resp.data)
        })
    }, [])

    useEffect(() => {
        api.get(`classificacoes_ipc/sub_secao/${secaoSelected}`)
        .then((resp) => setSubSecoes(resp.data))
    }, [secaoSelected, secoes])

    useEffect(() => {
        api.get(`classificacoes_ipc/codigos_ipc/${subSecaoSelected}`)
        .then((resp) => setCodigosIpc(resp.data));
    }, [subSecoes, subSecaoSelected])

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        setRemoveLoading(false);
        setIsLoading(true);
        
        api.get(`patentes_concedidas/classificacao_ipc/cod_subsecao/${subSecaoSelected}`)
        .then((resp) => {
            setPatentes(resp.data.patentes)
            setTotPatentes(resp.data.number_patentes)
            setRemoveLoading(true);
            setIsLoading(false);
        })
    }, [setRemoveLoading, subSecaoSelected])

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        setRemoveLoading(false);
        setIsLoading(true);
        api.get(`patentes_concedidas/ipc/${codigoIpcSelected}`)
        .then((resp) => {
            setPatentes(resp.data.patentesFiltro)
            setTotPatentes(resp.data.number_patentes)
            setRemoveLoading(true);
            setIsLoading(false);
        })
        .catch(() => {})
    }, [codigoIpcSelected, setRemoveLoading])

    return(
        <>
            <Container>
                <MainContainer>
                    <div>
                        <Select value={situacao} onChange={ChangeSituacao}>
                            <option value="Situacao" disabled>Situação</option>
                            <option value="concedida">Concedida</option>
                            <option value="pendente">Pendente</option>
                            <option value="regiSoftware">Registro de Software</option>
                        </Select>
                        {situacao === "concedida" && ictSelected === "ICTs" && 
                        <Select value={secaoSelected} onChange={ChangeSecao}>
                            <option value="secao">Seção</option>
                            {secoes.map((secao, index) => (
                                <option key={index} value={secao.id}>
                                    {secao.nome}
                                </option>
                            ))}
                        </Select>
                        }
                        {secaoSelected !== 0 && situacao === "concedida" && ictSelected === "ICTs" && 
                        <Select onChange={ChangeSubSecao}>
                            <option value="subSecao">Sub Seção</option>
                            {subSecoes.map((subSecao, index) => (
                                <option key={index} value={subSecao.id}>
                                    {subSecao.nome}
                                </option>
                            ))}
                        </Select>
                        }
                        {subSecaoSelected !== 0 && situacao === "concedida" && ictSelected === "ICTs" && 
                        <Select onChange={ChangeCodigoIPC}>
                            <option value="codigoIPC">Códigos IPC</option>
                            {codigosIpc.codigos && codigosIpc.codigos.map((codigoIPC, index) => (
                                <option key={index} value={codigoIPC}>{codigoIPC}</option>
                            ))}
                        </Select>
                        }
                        
                    </div>
                    
                    <div>
                        <Title>Pedidos</Title>
                    </div>
                    {(!removeLoading || isLoading) && <LoadingContainer><Loading /></LoadingContainer>}
                    {removeLoading && !isLoading && patentes.length === 0 && (
                        <NotFoundContainer>
                            <QueryNotFound>CONSULTA NÃO ENCONTRADA</QueryNotFound> 
                        </NotFoundContainer>
                    )}
                    {removeLoading && <GridCards> 
                        {patentes.length > 0 && patentes !== [] &&
                            patentes.map((patente, index) => {  
                                    return (
                                        <Card key={index} className="border-red-500" data-aos="fade-up-right"> 
                                        
                                        {situacao === "regiSoftware" ? <CardTitle>{patente.titulo_programa}</CardTitle> : <CardTitle>{patente.titulo}</CardTitle>}

                                        {situacao !== "concedida" ? <CardText>Data Do Depósito:</CardText> :  "" }
                                        {situacao !== "concedida" ? <CardNumber>{dayjs(patente.data_deposito).format("DD/MM/YYYY")}</CardNumber> : ""}

                                        {situacao === "pendente" ? <CardText>Data Do Protocolo:</CardText> :  "" }
                                        {situacao === "pendente" ? <CardNumber>{dayjs(patente.data_protocolo).format("DD/MM/YYYY")}</CardNumber> : ""}

                                        <CardText>Número Do Pedido:</CardText> 
                                        <CardNumber>{patente.numero_pedido}</CardNumber>

                                        {situacao !== "regiSoftware" ? <CardText>Depositante:</CardText> : <CardText>Titulares:</CardText>}
                                        {
                                            patente.depositantes ? patente.depositantes.map((depositante, index) => (
                                                <CardDepositorText key={index}>{depositante}</CardDepositorText>
                                            ))
                                        :
                                            patente.nomes_titulares ? patente.nomes_titulares.map((titular, index) => (
                                                <CardDepositorText key={index}>{titular}</CardDepositorText>
                                            ))
                                            :
                                            patente.software_registration.nomes_titulares.map((titular, index) => (
                                                <CardDepositorText key={index}>{titular}</CardDepositorText>
                                            ))
                                        }

                                        {situacao === "pendente" && (<StatusBadge>Patente Pendente</StatusBadge>)}
                                        {situacao !== "pendente" && situacao !== "regiSoftware" && (<StatusBadge $primary>Patente Concedida</StatusBadge>)}
                                     

                                        <div>
                                            {(!loadingPatentDetails || handleClickSelected !== patente.numero_pedido) && <DetailsButton onClick={() => handleClickDetails(patente.numero_pedido)}>
                                                    <DetailsText>Mais Detalhes</DetailsText>
                                                    <ArrowIcon />
                                            </DetailsButton>}
                                        </div>

                                        {loadingPatentDetails && handleClickSelected === patente.numero_pedido && <div> 
                                            <LoadingButton>
                                                    <Loadingtext>Processando... </Loadingtext>
                                                    <LoadAnimate />
                                            </LoadingButton>
                                        </div>} 
                                    </Card>
                                );
                            })}
                        </GridCards>
                        }

                        <Pagination
                            activePage={activePage}
                            itemsCountPerPage={max_items}
                            totalItemsCount={totPatentes}
                            pageRangeDisplayed={4}
                            onChange={handlePageChange}
                            innerClass='flex justify-center m-10'
                            itemClass={PageItem}
                            activeClass='bg-red-500 text-white'
                        />
                        
                </MainContainer>
            </Container>
        </>
    );  
}
