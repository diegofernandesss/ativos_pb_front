import '../index.css'

import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
    <div className="dark:bg-slate-900">
      <nav className=" bg-white border-gray-200 dark:border-gray-700 dark:bg-slate-900 py-2.5 sm:container sm:mx-auto">
        <div className='z-10 xl:max-w-screen-xl sm:flex sm:justify-between sm:items-center py-2 flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto'>
              <h1 className="text-2xl text-[#000000]  dark:text-white "> Ativos<span className="font-bold text-[#EF4444]"> PB</span></h1>
            <div className="flex-grow space-x-4 hidden m-0 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
              <Link to="/" className="rounded-lg px-4 py-3 text-slate-700 font-medium hover:bg-red-500 hover:text-white shadow-md dark:shadow-slate-700 cursor-pointer dark:text-white text-sm">Pagina Inicial</Link>
              <Link to="/sobre" className="rounded-lg px-4 py-3 text-slate-700 font-medium hover:bg-red-500 hover:text-white shadow-md dark:shadow-slate-700 cursor-pointer dark:text-white text-sm">Sobre</Link>
            </div>
            <div className='sm:hidden'>
              <button type='button' className='focus:outline-none'>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"> */}
                  {/* <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></svg>  */}
              </button>
            </div>
        </div>
      </nav>
      </div>
    </>
  );
};