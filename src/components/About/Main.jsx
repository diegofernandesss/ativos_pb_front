import { heroData,
    equipesImg
} from '../../assets';

import {
    SectionContainer,
    FlexContainer,
    HalfWidthContainerWithMargin,
    Title,
    Paragraph,
    PositionImage,
    Background,
    StyledImg
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

const { image, alt } = heroData;


return (
   <>
    <SectionContainer>
        <FlexContainer data-aos="zoom-in-down">
            <HalfWidthContainerWithMargin  >
                <Title>Objetivo</Title> {/** Título */}
                {
                    objective.map((obj, index) => (
                        <Paragraph key={index}>{obj.phrase}</Paragraph> // Parágrafo
                    ))
                }
            </HalfWidthContainerWithMargin>
            <PositionImage>
                <StyledImg src={image} alt={alt}/> {/** Imagem */}
            </PositionImage>
        </FlexContainer>
        
    </SectionContainer>

    <Background data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <SectionContainer>
            <FlexContainer>
                <HalfWidthContainerWithMargin >
                    <Title>Equipe De Desenvolvimento</Title> {/** Título */}
                    {
                        team.map((t, index) => (
                            <Paragraph key={index}>{t.phrase}</Paragraph> // Parágrafo
                        ))
                    }
                </HalfWidthContainerWithMargin>
                <PositionImage>
                    <StyledImg src={equipesImg[0].image} alt={alt}/> {/** Imagem */}
                </PositionImage>
            </FlexContainer>
        </SectionContainer>
    </Background>

</>
   
);
}
