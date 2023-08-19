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
import { Link } from 'react-router-dom';
import { SlMenu } from 'react-icons/sl'
export const NavBar = () => {

  const Links = [
    {name: "Página Inicial", link:"/"},
    {name: "Sobre", link:"/sobre"}
  ]

  return (
    <>
      <NavContainer>
        <Nav>
          <NavContent>
          <Link to="/home"><Logo>Ativos<LogoHighligh> PB</LogoHighligh></Logo></Link> {/** Nome do Projeto */}
          <NavLinks>
            {
              Links.map((link, index) => (
                <NavLink key={index} to={link.link}> 
                  {link.name} 
                </NavLink>  // Links para acesso a uma página
            ))}
          </NavLinks>
          
            <div className="sm:hidden">
              <MobileMenuButton type="button"> {/** Botão de Menu Hambúrguer no Mobile*/}
                <SlMenu className='text-white w-5 h-5'/>
              </MobileMenuButton>
            </div>
          </NavContent>
        </Nav>
      </NavContainer>
    </>
  );
};