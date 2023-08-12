import tw from 'tailwind-styled-components';

export const MainContainer = tw.main`
`;

export const MainSection = tw.section`
    bg-gradient-to-r 
    py-16
`;

export const Container = tw.div`
    container 
    mx-auto 
    px-4 
    items-center 
    justify-between 
    max-w-screen-xl 
    pt-7 
    pb-8
`;



export const TextContainer = tw.div`
    md:w-1/2 
    text-center 
    xl:text-left
`;

export const StyledH1 = tw.h1`
    text-2xl 
    md:text-4xl 
    font-bold 
    text-red-500 
    mb-4
`;

export const StyledP = tw.p`
    text-sm 
    md:text-xl 
    text-gray-800 
    mb-8 lead 
    xl:max-w-[380px] 
    lg:mb-12 
    text-center 
    md:text-justify
`;

export const ImageContainer = tw.div`
    md:w-1/3 
    grid grid-cols-1
    mx-auto
    md:gap-4
`;

export const FlexContainer = tw.div`
    container 
    flex 
    flex-col 
    py-4 
    mx-auto  
    md:h-128 
    md:py-16 
    md:flex-row 
    md:items-center
`;

export const StyledImg = tw.img`
    rounded-lg 
    max-w-full 
    md:max-w-[320px]
`;

export const GridContainer = tw.div`
    md:w-1/3 
    grid grid-cols-2 
    gap-4
    mx-auto
    md:gap-4
`;


// export const StyledImg = tw.img`
//     rounded-lg 
//     max-w-full 
//     md:max-w-[320px]
// `;

// export const GridContainer = tw.div`
//     mx-auto
//     md:w-1/3 
//     md:max-w-[800px]
//     grid 
//     md:grid-cols-2 
//     gap-4
//     md:gap-4
// `; 