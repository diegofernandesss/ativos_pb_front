import { useEffect, useState } from 'react';
import { Loading } from '../../pages';
import { api } from '../../services/api';
import Pagination from 'react-js-pagination';
import dayjs from "dayjs";
import { Container, MainContainer, Select, Title, QueryNotFound, 
         LoadingContainer, NotFoundContainer, Card, GridCards, CardTitle, 
         CardNumber, CardText, CardDepositorText, StatusBadge, 
        //  LoadingButton, Loadingtext, LoadAnimate, 
         DetailsButton, DetailsText, ArrowIcon, PageItem
} from './MainCss';

export const Main = ({ ictSelected, resultNumPatente, removeLoading, setRemoveLoading, setSituacaoSearch }) => {

    const [patentes, setPatentes] = useState([])
    const [activePage, setActivePage] = useState(1);
    const [totPatentes, setTotPatentes] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [situacao, setSituacao] = useState("concedida")
    
    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
        window.scrollTo(0, 0);
    }

    const ChangeSituacao = (e) => {
        setSituacao(e.target.value)
        setSituacaoSearch(e.target.value)
    }

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
        }else if (situacao === "concedida"){
            api.get(`patentes_concedidas?page=${activePage}&limit=${max_items}`)
            .then((resp) => {
                setPatentes(resp.data.patentes);
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
    
    useEffect(() => {
        setActivePage(1);
    }, [ictSelected]);

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

    return(
        <>
            <Container>
                <MainContainer>
                    <div>
                        <Select >
                            <option value="option1">Categorias</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                        <Select value={situacao} onChange={ChangeSituacao}>
                            <option value="Situacao" disabled>Situação</option>
                            <option value="concedida">Concedida</option>
                            <option value="pendente">Pendente</option>
                            <option value="regiSoftware">Registro de Software</option>
                        </Select>
                        <Select >
                                <option value="option1">S3Cao</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                        </Select>
                        <Select >
                                <option value="option1">Sub</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                        </Select>
                        <Select >
                                <option value="option1">IPC</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                        </Select>
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
                                            <DetailsButton>
                                                    <DetailsText>Mais Detalhes</DetailsText>
                                                    <ArrowIcon />
                                            </DetailsButton>
                                        </div>


                                        {/* <div> 
                                            <LoadingButton>
                                                    <Loadingtext>Processando... </Loadingtext>
                                                    <LoadAnimate />
                                            </LoadingButton>
                                        </div>  */}
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
