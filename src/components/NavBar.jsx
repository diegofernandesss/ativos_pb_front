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
          <Logo>Ativos<span className="font-bold text-[#EF4444]"> PB</span>
          </Logo>
          <NavLinks>
            <NavLink to="/">Pagina Inicial</NavLink>
            <NavLink to="/sobre">Sobre</NavLink>
          </NavLinks>
          <div className="sm:hidden">
            <MobileMenuButton type="button">
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"> */}
              {/* <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></svg>  */}
            </MobileMenuButton>
          </div>
        </NavContent>
      </Nav>
    </NavContainer>
    </>
  );
};