import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Select } from './Home/MainCss';

export const SelectIPC = ({ situacao, ictSelected, setPatentes, setTotPatentes, setRemoveLoading, setIsLoading, isFirstRender, isFirstRender2, activePage }) => {
    const [secoes, setSecoes] = useState([]);
    const [subSecoes, setSubSecoes] = useState([]);
    const [codigosIpc, setCodigosIpc] = useState([]);
    const [secaoSelected, setSecaoSelected] = useState(0);
    const [subSecaoSelected, setSubSecaoSelected] = useState(0);
    const [codigoIpcSelected, setCodigoIpcSelected] = useState("");

    const max_items = 6

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
        api.get("classificacoes_ipc")
        .then((resp) => {
            setSecoes(resp.data)
        })
    }, [])

    useEffect(() => {
        api.get(`classificacoes_ipc/sub_secao/${secaoSelected}`)
        .then((resp) => setSubSecoes(resp.data))
    }, [secaoSelected])

    useEffect(() => {
        api.get(`classificacoes_ipc/codigos_ipc/${subSecaoSelected}`)
        .then((resp) => setCodigosIpc(resp.data));
    }, [subSecaoSelected])

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        setRemoveLoading(false);
        setIsLoading(true);
        
        api.get(`patentes_concedidas/classificacao_ipc/cod_subsecao/${subSecaoSelected}?page=${activePage}&limit=${max_items}`)
        .then((resp) => {
            setPatentes(resp.data.patentes)
            setTotPatentes(resp.data.number_patentes)
            setRemoveLoading(true);
            setIsLoading(false);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFirstRender, setIsLoading, setPatentes, setRemoveLoading, setTotPatentes, subSecaoSelected])

    useEffect(() => {
        if (isFirstRender2.current) {
            isFirstRender2.current = false;
            return;
        }

        setRemoveLoading(false);
        setIsLoading(true);
        api.get(`patentes_concedidas/ipc/${codigoIpcSelected}?page=${activePage}&limit=${max_items}`)
        .then((resp) => {
            setPatentes(resp.data.patentes)
            setTotPatentes(resp.data.number_patentes)
            setRemoveLoading(true);
            setIsLoading(false);
        })
        .catch(() => {})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [codigoIpcSelected, isFirstRender, setIsLoading, setPatentes, setRemoveLoading, setTotPatentes])

    return (
        <>
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
        </>
    );
}
