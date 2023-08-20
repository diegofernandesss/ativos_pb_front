import '../index.css'

import {
  NavBackground,
  NavContainer,
  Nav,
  NavLinkMobile,
  Logo,
  NavLink,
  MobileMenuButton,
  LogoHighligh
} from './NavBarCss'
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

export const NavBar = () => {

  const Links = [
    {name: "Página Inicial", link:"/"},
    {name: "Sobre", link:"/sobre"}
  ]

  const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


return (
    <>
        <NavBackground>
            <NavContainer>
                <Nav>
                    <Logo>
                        Ativos<LogoHighligh> PB</LogoHighligh>
                    </Logo>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {Links.map((link, index) => (
                                <NavLink key={index} to={link.link} >
                                {link.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    <div className="md:hidden flex items-center "> 
                        <MobileMenuButton onClick={toggleMenu} className="ml-4">
                            {menuOpen ? (
                                    <FiX className="h-6 w-6 text-white" />
                                ) : ( 
                                    <FiMenu className="h-6 w-6 text-white" />
                                )}
                        </MobileMenuButton>
                    </div>
                </Nav>
            </NavContainer>
                {menuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {Links.map((link, index) => (
                            <NavLinkMobile key={index} to={link.link}>
                                {link.name}
                            </NavLinkMobile>
                            ))}
                        </div>
                    </div>
                )}
        </NavBackground>
    </>

  );
};