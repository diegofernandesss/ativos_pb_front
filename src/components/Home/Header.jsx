import { useEffect, useState } from 'react'
import { api } from '../../services/api'

import { HeaderComponent, HeaderBackground, HeaderContainer, SearchBarContainer, 
        SearchInput, SearchButton, SearchButtonHighlight, SearchButtonText, 
        SelectContainer, StyledSelect, BlockContainer} from './HeaderCss'

export const Header = ({ setIctSelectedMain, setResultNumPatente, setRemoveLoading, situacaoSearch }) =>{
  const [icts, setIcts] = useState([])
  const [ictSelected, setIctSelected] = useState("ICTs")
  const [numPatente, setNumPatente] = useState("")

  useEffect(() =>{
    api.get("icts")
    .then((resp) => setIcts(resp.data))
  }, [])

  const valorIct = (e) => {
    setIctSelected(e.target.value)
  }

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
      })
      .catch(() => {
        setResultNumPatente([])
        setRemoveLoading(true)
      })
      setNumPatente("")
    }else if(situacaoSearch === "pendente"){
      api.get(`patente_pendente/${numPatente}`)
      .then((resp) => {
        setResultNumPatente([resp.data])
        setRemoveLoading(true)  
      })
      .catch(() => {
        setResultNumPatente([])
        setRemoveLoading(true)
      })
      setNumPatente("")
    }
  }

  useEffect(() => {
      setIctSelectedMain(ictSelected)
  }, [setIctSelectedMain, ictSelected]);

return(
    <>
        <HeaderComponent>
            <HeaderBackground>
              <HeaderContainer>
                  <BlockContainer>
                      <SearchBarContainer>
                          <SearchInput type="text" placeholder="Digite o número do Pedido" onChange={handleChangeSearch} value={numPatente} /> {/** Entrada de Dados Da Patente */}
                        <SearchButton onClick={handleClickSearch}>
                              <SearchButtonHighlight /> {/** Efeito do Botão Pesquisar */}
                              <SearchButtonText>Pesquisar</SearchButtonText> {/** Botão de Pesquisa de Pedido de Patente */}
                          </SearchButton>
                        </SearchBarContainer>
                    </BlockContainer>

                    <SelectContainer>
                      <StyledSelect onChange={valorIct}>
                        <option value="ICTs">Selecione a ICT</option> 
                        {icts.map((ict, index) => (
                          <option key={index} value={ict.cnpj}> {/** Selecionar Opção de ICT */}
                            {ict.sigla}
                          </option>
                        ))}
                      </StyledSelect>
                    </SelectContainer>
                </HeaderContainer>
            </HeaderBackground>
        </HeaderComponent>
    </>
    );
}