import React, { useEffect, useState } from 'react';
import { Select } from './Home/MainCss';
import { api } from '../services/api';

export const SelectIPC = ({ situacao, ictSelected, secaoSelected, ChangeSecao, subSecaoSelected, ChangeSubSecao, ChangeCodigoIPC }) => {
    const [secoes, setSecoes] = useState([]);
    const [subSecoes, setSubSecoes] = useState([]);
    const [codigosIpc, setCodigosIpc] = useState([]);

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
