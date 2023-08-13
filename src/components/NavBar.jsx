import '../index.css'

import {
  NavContainer,
  Nav,
  NavContent,
  Logo,
  NavLinks,
  NavLink,
  MobileMenuButton,
  LogoHighligh
} from './NavBarCss'

export const NavBar = () => {
  return (
    <>
      <NavContainer>
        <Nav>
          <NavContent>
            <Logo>Ativos<LogoHighligh> PB</LogoHighligh></Logo> {/** Nome do Projeto */}
            <NavLinks>
              <NavLink to="/">Pagina Inicial</NavLink> {/** Rota para a Página Inicial */}
              <NavLink to="/sobre">Sobre</NavLink> {/** Rota para o Sobre */}
            </NavLinks>
            <div className="sm:hidden">
              <MobileMenuButton type="button"> {/** Botão de Menu Hambúrguer no Mobile*/}

              </MobileMenuButton>
            </div>
          </NavContent>
        </Nav>
      </NavContainer>
    </>
  );
};