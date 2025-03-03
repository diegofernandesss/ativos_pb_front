import { useEffect, useRef, useState } from 'react';
import { Loading } from '../../pages';
import { api } from '../../services/api';
import Pagination from 'react-js-pagination';
import { SelectIPC } from '../SelectIPC';
import { LoadingCardICT } from '../LoadingCardICT';
import { LoadingCard } from '../LoadingCard';
import dayjs from "dayjs";
import { Container, MainContainer, Select, Title, QueryNotFound, 
         LoadingContainer, NotFoundContainer, Card, GridCards, CardTitle, 
         CardNumber, CardText, CardDepositorText, StatusBadge, 
         LoadingButton, Loadingtext, LoadAnimate, 
         DetailsButton, DetailsText, ArrowIcon, PageItem
} from './MainCss';
import { useNavigate } from 'react-router-dom';

export const Main = ({ ictSelected, resultNumPatente, removeLoading, setRemoveLoading, setSituacaoSearch }) => {
    const [patentes, setPatentes] = useState([])
    const [activePage, setActivePage] = useState(1);
    const [totPatentes, setTotPatentes] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [situacao, setSituacao] = useState("concedida")
    const[loadingPatentDetails, setLoadingPatentDetails] = useState(false)
    const[handleClickSelected, setHandleClickSelected] = useState("")

    const isFirstRender = useRef(true);
    const isFirstRender2 = useRef(true);
    const navigate = useNavigate();

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
        window.scrollTo(0, 0);
    }

    const handleClickDetails = (cardID) => {
        setHandleClickSelected(cardID);
        setLoadingPatentDetails(true);
        if (situacao === "concedida"){
            api.get(`patente_concedida/${cardID}`)
            .then((resp) => {
                setLoadingPatentDetails(false);
                navigate(`/details/${cardID}`, { state: { detailsData: resp.data, situacao: situacao } });
                window.scrollTo(0, 0);
            });
        } else if (situacao === "pendente"){
            api.get(`patente_pendente/${cardID}`)
            .then((resp) => {
                setLoadingPatentDetails(false);
                navigate(`/details/${cardID}`, { state: { detailsData: resp.data, situacao: situacao } });
                window.scrollTo(0, 0);
            });
        } else if (situacao === "regiSoftware"){
            api.get(`registro_software/${cardID}`)
            .then((resp) => {
                setLoadingPatentDetails(false);
                navigate(`/details/${cardID}`, { state: { detailsData: resp.data.software_registration, situacao: situacao } });
                window.scrollTo(0, 0);
            });
        }
    }

    const ChangeSituacao = (e) => {
        setSituacao(e.target.value)
        setSituacaoSearch(e.target.value)
        setActivePage(1);
    }

    useEffect(() => {
        setActivePage(1);
    }, [ictSelected, situacao]);

    const max_items = 6
    useEffect(() => {
        setPatentes(resultNumPatente)
        setTotPatentes(1)  
    }, [resultNumPatente])

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
                        <LoadingCard 
                            setRemoveLoading={setRemoveLoading}
                            setIsLoading={setIsLoading}
                            setPatentes={setPatentes}
                            situacao={situacao}
                            activePage={activePage}
                            setTotPatentes={setTotPatentes}
                        />
                        <LoadingCardICT
                            activePage={activePage}
                            ictSelected={ictSelected}
                            setRemoveLoading={setRemoveLoading}
                            situacao={situacao}
                            setTotPatentes={setTotPatentes}
                            setPatentes={setPatentes}
                            setIsLoading={setIsLoading}
                        />
                        <SelectIPC
                            situacao={situacao}
                            ictSelected={ictSelected}
                            setPatentes={setPatentes}
                            setTotPatentes={setTotPatentes}
                            setRemoveLoading={setRemoveLoading}
                            setIsLoading={setIsLoading}
                            isFirstRender={isFirstRender}
                            isFirstRender2={isFirstRender2}
                            activePage={activePage}
                        />
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
                        {patentes.length > 0 &&
                            patentes.map((patente, index) => {  
                                    return (
                                        <Card key={index} className="border-red-500" data-aos="fade-up-right"> 
                                        
                                        {situacao === "regiSoftware" ? <CardTitle>{patente.titulo_programa}</CardTitle> : <CardTitle>{patente.titulo}</CardTitle>}

                                        {situacao !== "concedida" ? <CardText>Data Do Depósito:</CardText> :  "" }
                                        {situacao !== "concedida" ? <CardNumber>{dayjs(patente.data_deposito).format("DD/MM/YYYY")}</CardNumber> : ""}

                                        {situacao === "pendente" ? <CardText>Data Do Protocolo:</CardText> :  "" }
                                        {situacao === "pendente" ? <CardNumber>{dayjs(patente.data_protocolo).format("DD/MM/YYYY")}</CardNumber> : ""}

                                        <CardText>Número Do Pedido:</CardText> 
                                        <CardNumber>{patente.numero_pedido ? patente.numero_pedido: patente.software_registration.numero_pedido}</CardNumber>

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
                                            {(!loadingPatentDetails || handleClickSelected !== (patente.numero_pedido ? patente.numero_pedido : patente.software_registration?.numero_pedido)) && <DetailsButton onClick={() => handleClickDetails(patente.numero_pedido ? patente.numero_pedido : patente.software_registration?.numero_pedido)}>
                                                <DetailsText>Mais Detalhes</DetailsText>
                                                <ArrowIcon />
                                            </DetailsButton>}
                                        </div>

                                        {loadingPatentDetails && handleClickSelected === (patente.numero_pedido ? patente.numero_pedido : patente.software_registration?.numero_pedido) && <div> 
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
