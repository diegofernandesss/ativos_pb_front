import tw from 'tailwind-styled-components';

export const SectionContainer = tw.section`
    text-white 
    py-20 
    px-6  
    xl:px-40 
    container 
    mx-auto
`;

export const SectionContainerTeam = tw.section`
    bg-gray-200
`;

export const FlexContainer = tw.div`
    md:flex 
    md:justify-between 
    md:items-center
`;

export const HalfWidthContainerWithMargin = tw.div`
    md:w-1/2 
    mb-6 
    md:mb-0
`;


export const Title = tw.h1`
    text-4xl 
    md:text-5xl 
    lg:text-6xl 
    font-bold 
    mb-4 
    text-red-500
`;

export const Paragraph = tw.p`
    text-lg 
    md:text-xl 
    text-gray-500 
    mb-6"
`;

export const PositionImage = tw.div`
    md:w-1/2
`;  


export const Background = tw.div`
    bg-gray-200
`;

export const StyledImg = tw.img`
    w-full 
    rounded-lg 
`;