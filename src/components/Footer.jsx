import { BsFacebook, BsInstagram } from 'react-icons/bs'
import {
    FooterBackground, FooterContainer, FlexContainer, LogoContainer,
    StyledH2, LogoText, LogoHighlight, TeamSection, TeamListItem, TeamMember,
    ContactSection, ContactList, ContactItem, ContactButton, CustomSpan,
    AdditionalContent, CustomHr, Logo, TeamList, ContentGrid
  } from './FooterCss';


export const Footer = ()=>{

    const equipe = [
        {nome: "Alysson Pereira"},
        {nome: "Diego Fernandes"},
        {nome: "Eurídyce Karla"},
        {nome: "Jardiel Carlos"},
    ]

    const orientador = [
        {nome: "João Ricardo"}
    ]

    const contatos = [
        { icon: <BsFacebook size={18} />, link: "https://www.facebook.com/profile.php?id=100087903570816" },
        { icon: <BsInstagram size={18} />, link: "https://www.instagram.com/peti_tsi/" }
    ]

    return(
        <>
            <FooterBackground>
                <FooterContainer>
                    <FlexContainer>
                        <Logo>
                            <LogoContainer>
                                <LogoText>Ativos<LogoHighlight> PB</LogoHighlight></LogoText> {/** Nome do Projeto */}
                            </LogoContainer>
                        </Logo>
                        <ContentGrid>
                            <TeamSection>
                                <StyledH2>Equipe</StyledH2> {/** Equipe De Desenvolvimento */}
                                <TeamList>
                                {equipe.map((nomes, index) => (
                                    <TeamListItem key={index}>
                                        <TeamMember>{nomes.nome}</TeamMember>
                                    </TeamListItem>
                                ))}
                                </TeamList>
                            </TeamSection>

                            <TeamSection>
                                <StyledH2>Orientador</StyledH2> {/** Orientador Do Desenvolvimento */}
                                <TeamList>
                                {orientador.map((nome, index) => (
                                    <TeamListItem key={index}>
                                        <TeamMember>{nome.nome}</TeamMember>
                                    </TeamListItem>
                                ))}
                                </TeamList>
                            </TeamSection>

                            <ContactSection>
                                <StyledH2>Contatos</StyledH2> {/** Contatos do Projeto*/}
                                <ContactList>
                                {contatos.map((contato, index) => (
                                    <ContactItem key={index}>
                                        <ContactButton onClick={() => window.open(contato.link, "_blank")}>
                                            {contato.icon}
                                        </ContactButton>
                                    </ContactItem>
                                ))}
                                </ContactList>
                            </ContactSection>
                        </ContentGrid>
                    </FlexContainer>
                    <CustomHr />

                    <div className="sm:flex sm:items-center sm:justify-between">
                    <CustomSpan>© 2023</CustomSpan>
                    <AdditionalContent>
                    </AdditionalContent>
                    </div>
                </FooterContainer>
                </FooterBackground>

        </>
    );
}