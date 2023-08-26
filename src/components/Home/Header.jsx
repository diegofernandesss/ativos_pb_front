import { useEffect, useState } from 'react'
import { api } from '../../services/api'

import { HeaderComponent, HeaderBackground, HeaderContainer, SearchBarContainer, 
        SelectContainer, StyledSelect, BlockContainer} from './HeaderCss'
import { SearchCard } from '../SearchCard'

export const Header = ({ setIctSelectedMain, setResultNumPatente, setRemoveLoading, situacaoSearch }) =>{
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
      setIctSelectedMain(ictSelected)
  }, [setIctSelectedMain, ictSelected]);

return(
    <>
        <HeaderComponent>
            <HeaderBackground>
                <HeaderContainer>
                    <BlockContainer>
                        <SearchBarContainer>
                            <SearchCard
                                situacaoSearch={situacaoSearch}
                                setRemoveLoading={setRemoveLoading}
                                setResultNumPatente={setResultNumPatente}
                            />
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
