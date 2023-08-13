import { heroData, equipesImg } from '../../assets';

import {
    MainContainer,
    MainSection,
    Container,
    FlexContainer,
    StyledH1,
    StyledP,
    ImageContainer,
    StyledImg,
    GridContainer,
    TextContainer
} from './MainCss';

export const Main = () => {

    const objective = [
        {phrase: `O site tem o intuito de trazer as patentes das principais 
                 ICT’s da Paraíba facilitando a vida do inventor que deseja 
                 pesquisar sobre patentes no Estado da Paraíba.`}
    ]

    const team = [
        {phrase: `Somos um grupo que deseja entregar soluções eficazes. 
                Nossa missão é utilizar as tecnologias ativas no mercado 
                e implementar no site para que seja possível ter um feedback 
                positivo. Além de propor novos conhecimentos.`}
    ]

    const { image } = heroData;

    return (
        <MainContainer>
            <MainSection>
                <Container>
                    <FlexContainer>
                        <TextContainer>
                            <StyledH1>Objetivo</StyledH1>  {/** Primeiro Título */}
                            {objective.map((phrases, index)=> (
                                <div key={index}>
                                    <StyledP > {/** Frase Do Título do Projeto */}
                                        {phrases.phrase}
                                    </StyledP>
                                </div> 
                            ))}
                        </TextContainer>
                        <ImageContainer>
                            <StyledImg src={image} alt="Imagem Equipe" />
                        </ImageContainer>
                    </FlexContainer>
                </Container>
            </MainSection>

            <MainSection>
                <Container>
                    <FlexContainer>
                        <TextContainer>
                            <StyledH1>Equipe PETI Desenvolvimento</StyledH1>  {/** Segundo Título */}
                            {team.map((phrases, index) => ( 
                                <div key={index}>
                                    <StyledP > {/** Frase da Equipe de Desenvolvimento */}
                                        {phrases.phrase}
                                    </StyledP>
                                </div>
                            ))}
                        </TextContainer>
                        <GridContainer>
                            {equipesImg.map((member, index) => (
                                <div key={index}>
                                    <StyledImg src={member.image} alt={member.alt} /> {/** Imagens em Grid - 4 Imagens Equipe*/}
                                </div>
                            ))}
                        </GridContainer>
                    </FlexContainer>
                </Container>
            </MainSection>
        </MainContainer>
    );
}
