import { heroData } from '../../assets';

export const Main = () => {
    const { image } = heroData;

    return (
        <main>
            <section className="bg-gradient-to-r py-16 " >
                <div className="container mx-auto px-4 items-center justify-between max-w-screen-xl pt-7 pb-8">
                    <div className="md:flex md:items-center ">
                        <div className="md:w-1/2 text-center xl:text-left" >
                            <h1 className="text-2xl md:text-4xl font-bold text-red-500 mb-4">Objetivo </h1>
                            <p className="text-sm md:text-xl text-gray-800 mb-8 lead xl:max-w-[380px] lg:mb-12 text-center md:text-justify" >
                            O site tem o intuito de trazer as patentes das principais ICT’s da Paraíba facilitando a vida do inventor que deseja pesquisar sobre patentes no Estado da Paraíba.</p>
                        </div>
                        <div className="md:w-1/3 flex justify-center md:justify-end" >
                            <img className="rounded-lg  max-w-full md:max-w-[320px]" src={image} alt="Imagem Equipe"   />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-r">
                <div className="container mx-auto px-4 items-center justify-between max-w-screen-xl pt-7 pb-8">
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/2 text-center xl:text-left">
                            <h1 className="text-2xl md:text-4xl font-bold text-red-500 mb-4 ">Equipe PETI Desenvolvimento</h1>
                            <p className="text-sm md:text-xl text-gray-800 mb-8 lead xl:max-w-[380px] lg:mb-12 text-center md:text-justify">
                                Somos um grupo que deseja entregar soluções eficazes. Nossa missão é utilizar as tecnologias ativas no mercado e implementar no site para que seja possível ter um feedback positivo. Além de propor novos conhecimentos.
                            </p>

                        </div>
                        <div className="md:w-1/3 grid grid-cols-2 gap-4">
                            <img className="rounded-lg shadow-lg max-w-full md:max-w-[200px]" src={image} alt="Imagem Equipe" />
                            <img className="rounded-lg shadow-lg max-w-full md:max-w-[200px]" src={image} alt="Imagem Equipe" />
                            <img className="rounded-lg shadow-lg max-w-full md:max-w-[200px]" src={image} alt="Imagem Equipe" />
                            <img className="rounded-lg shadow-lg max-w-full md:max-w-[200px]" src={image} alt="Imagem Equipe" />
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
