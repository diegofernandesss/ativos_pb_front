import { heroData,
    equipesImg
} from '../../assets';

// import {
//     MainContainer,
//     MainSection,
//     Container,
//     FlexContainer,
//     StyledH1,
//     StyledP,
//     ImageContainer,
//     StyledImg,
//     GridContainer,
//     TextContainer
// } from './MainCss';

export const Main = () => {

const objective = [
   {phrase: `O site tem o intuito de trazer as patentes das principais 
            ICT’s da Paraíba facilitando a vida do inventor que deseja 
            pesquisar sobre patentes no Estado da Paraíba.`}
]

const team = [
   {phrase: `Somos um grupo que deseja entregar soluções eficazes. 
           Nossa missão é utilizar as tecnologias ativas no mercado 
           e implementar no site para que seja possível ter um feedback 
           positivo. Além de propor novos conhecimentos.`}
]

const { image, alt } = heroData;


return (
   <>
   <section className=" text-white py-20 px-6  xl:px-40 container mx-auto ">
       <div className="md:flex md:justify-between md:items-center" data-aos="zoom-in-down">
           <div className="md:w-1/2 mb-6 md:mb-0 "  >
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-red-500">Objetivo</h1>
               {
                   objective.map((obj, index) => (
                       <p key={index} className="text-lg md:text-xl text-gray-500 mb-6">{obj.phrase}</p>
                   ))
               }

           </div>
           <div className="md:w-1/2 ">
               <img src={image} alt={alt} className="w-full rounded-lg "/>
           </div>
       </div>
       
   </section>

   <section className=" bg-gray-200" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
       <div className=" text-white py-20 px-6  xl:px-40 container mx-auto ">

       
   <div className="md:flex md:justify-between md:items-center" >
       <div className="md:w-1/2 mb-6 md:mb-0 " >
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-red-500">Equipe De Desenvolvimento</h1>
           {
               team.map((t, index) => (
                   <p key={index} className="text-lg md:text-xl text-gray-500 mb-6">{t.phrase}</p>
               ))
           }

       </div>
       <div className="md:w-1/2 ">
           <img src={equipesImg[0].image} alt={alt} className="w-full rounded-lg "/>
       </div>
   </div>
   </div>
</section>

</>
   
);
}
