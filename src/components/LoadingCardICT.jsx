import { useEffect } from 'react';
import { api } from '../services/api';

export const LoadingCardICT = ({ activePage, ictSelected, setRemoveLoading, situacao, setTotPatentes, setPatentes, setIsLoading }) => {
    const max_items = 6;

    useEffect(() => {
        setRemoveLoading(false);
        setIsLoading(true);
        setPatentes([]);
        if (situacao === "concedida") {
            if (ictSelected !== "ICTs") {
                api.get(`patentes_concedidas/ict/${ictSelected}?page=${activePage}&limit=${max_items}`)
                    .then((resp) => {
                        setPatentes(resp.data.patentes)
                        setTotPatentes(resp.data.number_patentes)
                        setRemoveLoading(true);
                        setIsLoading(false);
                    })
            } else {
                api.get(`patentes_concedidas?page=${activePage}&limit=${max_items}`)
                    .then((resp) => {
                        setPatentes(resp.data.patentes);
                        setTotPatentes(resp.data.number_patentes)
                        setRemoveLoading(true);
                        setIsLoading(false);
                    })
            }
        } else if (situacao === "pendente") {
            if (ictSelected !== "ICTs") {
                api.get(`patentes_pendentes/ict/${ictSelected}?page=${activePage}&limit=${max_items}`)
                    .then((resp) => {
                        setPatentes(resp.data.patentes)
                        setTotPatentes(resp.data.number_patentes)
                        setRemoveLoading(true);
                        setIsLoading(false);
                    })
            } else {
                api.get(`patentes_pendentes?page=${activePage}&limit=${max_items}`)
                    .then((resp) => {
                        setPatentes(resp.data.patentes)
                        setTotPatentes(resp.data.number_patentes)
                        setRemoveLoading(true);
                        setIsLoading(false);
                    })
            }
        } else if (situacao === "regiSoftware") {
            if (ictSelected !== "ICTs") {
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
            } else {
                api.get(`registros_softwares?page=${activePage}&limit=${max_items}`)
                    .then((resp) => {
                        setPatentes(resp.data.software_records)
                        setTotPatentes(resp.data.registration_number)
                        setRemoveLoading(true);
                        setIsLoading(false);
                    })
            }
        }
    }, [activePage, ictSelected, setIsLoading, setPatentes, setRemoveLoading, setTotPatentes, situacao]);

}
