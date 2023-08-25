import { useEffect } from "react";
import { api } from "../services/api";

export const LoadingCard = ({ setRemoveLoading, setIsLoading, setPatentes, situacao, activePage, setTotPatentes }) => {
  useEffect(() => {
    const max_items = 6
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
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [setIsLoading, setPatentes, setRemoveLoading, setTotPatentes, situacao]) 
}