import { useEffect, useState } from 'react'
import { api } from '../../services/api'

import { HeaderComponent, HeaderBackground, HeaderContainer, SearchBarContainer, 
        SearchInput, SearchButton, SearchButtonHighlight, SearchButtonText, 
        SelectContainer, StyledSelect, BlockContainer} from './HeaderCss'

export const Header = ({ setIctSelectedMain }) =>{
  const [icts, setIcts] = useState([])
  const [ictSelected, setIctSelected] = useState("ICTs")

  useEffect(() =>{
    api.get("icts")
    .then((resp) => setIcts(resp.data))
  }, [])

  const valorIct = (e) => {
    setIctSelected(e.target.value)
  }

  useEffect(() => {
    if (ictSelected !== "ICTs") {
      setIctSelectedMain(ictSelected)
    } else {
      setIctSelectedMain(ictSelected)
    }
  }, [setIctSelectedMain, ictSelected]);

return(
    <>
        <HeaderComponent>
            <HeaderBackground>
              <HeaderContainer>
                  <BlockContainer>
                      <SearchBarContainer>
                          <SearchInput type="text" placeholder="Digite o número do Pedido" /> {/** Entrada de Dados Da Patente */}
                          <SearchButton>
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