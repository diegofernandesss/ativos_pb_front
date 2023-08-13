import '../index.css'

import {
  NavContainer,
  Nav,
  NavContent,
  Logo,
  NavLinks,
  NavLink,
  MobileMenuButton
} from './NavBarCss'

export const NavBar = () => {
  return (
    <>
    <NavContainer>
      <Nav>
        <NavContent>
          <Logo>Ativos<span className="font-bold text-[#EF4444]"> PB</span> {/** Nome do Projeto */}
          </Logo>
          <NavLinks>
            <NavLink to="/">Pagina Inicial</NavLink> {/** Rota para a Página Inicial */}
            <NavLink to="/sobre">Sobre</NavLink> {/** Rota para o Sobre */}
          </NavLinks>
          <div className="sm:hidden">
            <MobileMenuButton type="button"> {/** Botão de Menu para Celular */}

            </MobileMenuButton>
          </div>
        </NavContent>
      </Nav>
    </NavContainer>
    </>
  );
};