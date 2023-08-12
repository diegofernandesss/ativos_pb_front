import tw from "tailwind-styled-components"
import { Link } from 'react-router-dom';


export const NavContainer = tw.div`
  dark:bg-slate-900
`;

export const Nav = tw.nav`
  bg-white 
  border-gray-200 
  dark:border-gray-700 
  dark:bg-slate-900 
  py-2.5 
  sm:container 
  sm:mx-auto
`;

export const NavContent = tw.div`
  z-10 
  xl:max-w-screen-xl 
  sm:flex 
  sm:justify-between 
  sm:items-center 
  py-2 
  flex flex-wrap 
  items-center 
  justify-between 
  max-w-screen-xl 
  px-4 
  mx-auto
`;

export const Logo = tw.h1`
  text-2xl
  text-[#000000] 
  dark:text-white
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
  dark:shadow-slate-700 
  cursor-pointer 
  dark:text-white 
  text-sm
`;

export const MobileMenuButton = tw.button`
  focus:outline-none
`;