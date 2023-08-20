import tw from "tailwind-styled-components"
import { Link } from 'react-router-dom';


export const NavBackground = tw.div`
  bg-gray-900
`;

export const NavContainer = tw.nav`
  mx-auto 
  lg:px-5 
  px-5 
  w-full 
  h-20 
  items-center 
  justify-between 
  max-w-screen-xl 
  pt-2 
  sm:container 
  sm:mx-auto 
  xl:max-w-screen-xl 
`;


export const Nav = tw.nav`
  flex 
  items-center 
  justify-between 
  h-16
`;

export const Logo = tw.h1`
  text-2xl
  text-white
`;


export const LogoHighligh = tw.span`
  font-bold 
  text-[#EF4444]
`;

export const NavLinks = tw.div`
  flex-grow 
  space-x-4 
  hidden m-0 
  mt-5 
  sm:mt-3 
  sm:flex 
  p-5 
  sm:p-0 
  justify-center 
  items-center 
  shadow-lg 
  sm:shadow-none
`;

export const NavLink = tw(Link)`
  rounded-lg 
  px-4 py-3 
  text-slate-700 
  font-medium 
  hover:bg-red-500 
  hover:text-white 
  shadow-md 
  shadow-slate-700 
  cursor-pointer 
  text-white 
  text-sm
`;


export const NavLinkMobile = tw(Link)`
  text-gray-300 
  hover:text-white 
  block 
  px-3 
  py-2 
  rounded-md 
  text-base 
  font-medium
`;

export const MobileMenuButton = tw.button`
`;