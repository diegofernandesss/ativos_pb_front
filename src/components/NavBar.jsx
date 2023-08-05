import '../index.css'

export const NavBar = () => {
  return (
    <>
      <nav className=" bg-white border-gray-200 py-2.5 sm:container sm:mx-auto">
        <div className='z-10 xl:max-w-screen-xl sm:flex sm:justify-between sm:items-center py-2 flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto'>
            <a href="#">
              <h1 className="text-3xl text-[#000000]"> Ativos<span className="font-bold text-[#CA0000]"> PB</span></h1>
            </a>
            <div className="flex-grow space-x-4 hidden m-0 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
              <a href="/" className="rounded-lg px-4 py-3 text-slate-700 font-medium hover:bg-red-700 hover:text-white shadow-md">Página Inicial</a>
              <a href="/about" className="rounded-lg px-4 py-3 text-slate-700 font-medium hover:bg-red-700 hover:text-white shadow-md">Sobre</a>
            </div>
            <div className='sm:hidden'>
              <button type='button' className='focus:outline-none'>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"> */}
                  {/* <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></svg>  */}
              </button>
            </div>
        </div>
      </nav>
    </>
  );
};