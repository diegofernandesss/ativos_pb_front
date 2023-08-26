import { useState } from "react"
import { StyledSelect } from "./Home/HeaderCss"
import { useEffect } from "react"
import { api } from "../services/api"

export const SelectICT = ({ setIctSelectedMain }) => {
    const [icts, setIcts] = useState([])
    const [ictSelected, setIctSelected] = useState("ICTs")

    const valorIct = (e) => {
        setIctSelected(e.target.value)
    }

    useEffect(() =>{
        api.get("icts")
        .then((resp) => setIcts(resp.data))
    }, [])

    useEffect(() => {
        setIctSelectedMain(ictSelected)
    }, [setIctSelectedMain, ictSelected]);

return (
    <>
        <StyledSelect onChange={valorIct}>
            <option value="ICTs">Selecione a ICT</option> 
            {icts.map((ict, index) => (
                <option key={index} value={ict.cnpj}> {/** Selecionar Opção de ICT */}
                    {ict.sigla}
                </option>
            ))}
        </StyledSelect>
    </>
  )
}