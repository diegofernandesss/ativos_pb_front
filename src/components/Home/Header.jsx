import { SelectICT } from '../../pages/SelectICT';
import { SearchCard } from '../SearchCard';
import {
    BlockContainer,
    HeaderBackground,
    HeaderComponent,
    HeaderContainer, SearchBarContainer,
    SelectContainer
} from './HeaderCss';

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