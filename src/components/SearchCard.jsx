import { useState } from "react"
import { SearchButton, SearchButtonHighlight, SearchButtonText, SearchInput } from "./Home/HeaderCss"
import { api } from "../services/api"

export const SearchCard= ({ situacaoSearch, setRemoveLoading, setResultNumPatente }) => {
    const [numPatente, setNumPatente] = useState("")

    const handleChangeSearch = (e) => {
        setNumPatente(e.target.value)
      }

    const handleClickSearch = () => {
        setRemoveLoading(false)
        if(situacaoSearch === "concedida"){
          api.get(`patente_concedida/${numPatente}`)
          .then((resp) => {
            setResultNumPatente([resp.data])
            setRemoveLoading(true)  
            setNumPatente("")
          })
          .catch(() => {
            setResultNumPatente([])
            setRemoveLoading(true)
          })
          
        }else if(situacaoSearch === "pendente"){
          api.get(`patente_pendente/${numPatente}`)
          .then((resp) => {
            setResultNumPatente([resp.data])
            setRemoveLoading(true)  
            setNumPatente("")
          })
          .catch(() => {
            setResultNumPatente([])
            setRemoveLoading(true)
          })
          
        }else if(situacaoSearch === "regiSoftware"){
          api.get(`registro_software/${numPatente}`)
          .then((resp) => {
            setResultNumPatente([resp.data])
            setRemoveLoading(true)  
            setNumPatente("")
          })
          .catch(() => {
            setResultNumPatente([])
            setRemoveLoading(true)
          })
          
        }
    }
    return(
        <>
            <SearchInput type="text" placeholder="Digite o número do Pedido" onChange={handleChangeSearch} value={numPatente} /> {/** Entrada de Dados Da Patente */}
                <SearchButton onClick={handleClickSearch}>
                    <SearchButtonHighlight /> {/** Efeito do Botão Pesquisar */}
                    <SearchButtonText>Pesquisar</SearchButtonText> {/** Botão de Pesquisa de Pedido de Patente */}
                </SearchButton>
        </>
    )
}