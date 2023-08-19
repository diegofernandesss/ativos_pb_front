import { useEffect, useState } from 'react';
import { Loading } from '../../pages';
import { api } from '../../services/api';
import Pagination from 'react-js-pagination';
import { Container, MainContainer, Select, Title, QueryNotFound, 
         LoadingContainer, NotFoundContainer, Card, GridCards, CardTitle, 
         CardOrderNumber, CardText, CardDepositorText, StatusBadge, LoadingButton, 
         Loadingtext, LoadAnimate, DetailsButton, DetailsText, ArrowIcon, PageItem
} from './MainCss';

export const Main = ({ ictSelected, resultNumPatente, removeLoading, setRemoveLoading, setSituacaoSearch }) => {

    const [patentes, setPatentes] = useState([])
    const [activePage, setActivePage] = useState(1);
    const [totPatentes, setTotPatentes] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [situacao, setSituacao] = useState("concedida")

    const colors = [
        { border: "border-red-500" },
        { border: "border-slate-500" },
    ];
    
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
        }else {
            api.get(`patentes_concedidas?page=${activePage}&limit=${max_items}`)
            .then((resp) => {
                setPatentes(resp.data.patentes);
                setTotPatentes(resp.data.number_patentes)
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
        }else{
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
                        <Select>
                            <option value="option1">Categorias</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                        <Select value={situacao} onChange={ChangeSituacao}>
                            <option value="Situacao" disabled>Situação</option>
                            <option value="concedida">Concedida</option>
                            <option value="pendente">Pendente</option>
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
                                const color = colors[index % colors.length];    
                                    return (
                                        <Card key={index} className={`${color.border}`} data-aos="fade-up-right"> 

                                        <CardTitle>{patente.titulo}</CardTitle>

                                        <CardText>Número do pedido</CardText> 
                                        <CardOrderNumber>{patente.numero_pedido}</CardOrderNumber> 
                                        {patente.depositantes.map((depositante, index) => (
                                            <CardDepositorText key={index}>{depositante}</CardDepositorText>
                                        ))}

                                        <StatusBadge>Patente Concedida</StatusBadge>
                                     

                                        <div>
                                            <DetailsButton>
                                                    <DetailsText>Mais Detalhes</DetailsText>
                                                    <ArrowIcon />
                                            </DetailsButton>
                                        </div>


                                        <div> 
                                            <LoadingButton>
                                                    <Loadingtext>Processando... </Loadingtext>
                                                    <LoadAnimate />
                                            </LoadingButton>
                                        </div> 
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
