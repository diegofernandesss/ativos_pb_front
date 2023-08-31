import tw from 'tailwind-styled-components';


export const SectionContainer = tw.section`
    text-white 
    py-20 
    px-6 
    md:px-12 
    lg:px-40 
    xl:px-36 
    container 
    mx-auto 
`;

export const FlexContainer = tw.div`
    md:flex 
    md:justify-between 
    md:items-center
`;

export const StyledImg = tw.img`
    w-full 
    rounded-lg
`;

export const ComponentWithImage = tw.div`
    md:w-1/2
`;