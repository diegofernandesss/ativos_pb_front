import { HeaderComponent, HeaderBackground, HeaderContainer, SearchBarContainer, 
        SelectContainer, BlockContainer} from './HeaderCss'
import { SearchCard } from '../SearchCard'
import { SelectICT } from '../SelectICT'

export const Header = ({ setIctSelectedMain, setResultNumPatente, setRemoveLoading, situacaoSearch }) =>{
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
                            <SelectICT
                                setIctSelectedMain={setIctSelectedMain}
                            />
                        </SelectContainer>
                    </HeaderContainer>
                </HeaderBackground>
            </HeaderComponent>
        </>
    );
}