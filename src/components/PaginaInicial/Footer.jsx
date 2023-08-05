import { BsFacebook, BsInstagram } from 'react-icons/bs'

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

    

    return(
        <>
            <footer className="bg-gray-900" >
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <div className="flex items-center bg-gray-900">
                                <h1 className="h-8 mr-3 text-white font-semibold whitespace-nowra text-2xl">Ativos
                                <span color="orange" className="text-primary self-center text-2xl font-semibold whitespace-nowrap dark:text-primary"> PB</span></h1>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold  uppercase text-white">Equipe</h2>
                                <ul className="text-gray-600 dark:text-gray-400 font-medium">
                                {  
                                    equipe.map((nomes, index) => (
                                            <li key={index} className='mb-2 md:mr-4'>
                                                <div 
                                                className="text-gray-400 cursor-pointer hover:text-white hover:underline"
                                                > {nomes.nome} </div>
                                            </li>
                                        ))
                                }
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold uppercase text-white">Orientador</h2>
                                <ul className="text-gray-600 dark:text-gray-400 font-medium">
                                {
                                    orientador.map((nome, index) => (
                                        <li key={index} className='mb-4'>
                                            <div className='
                                            text-gray-400 hover:text-white cursor-pointer hover:underline
                                            '>{nome.nome}</div>
                                        </li>
                                    ))
                                }
                                
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold uppercase text-white">Contatos</h2>
                                <ul className="text-gray-600 dark:text-gray-400 font-medium flex">
                                    <li className='mb-4'>
                                        <div className='text-gray-400 hover:text-white cursor-pointer hover:underline'>
                                            <BsFacebook size={18}/>
                                        </div>
                                    </li>
                                    <li className='mb-4'>
                                        <div className='text-gray-400 hover:text-white cursor-pointer hover:underline' style={{ marginLeft: '10px' }}>
                                            <BsInstagram size={18}/>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm  sm:text-center text-gray-400">© 2023</span>
                        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
}