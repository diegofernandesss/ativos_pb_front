import tw from 'tailwind-styled-components';


export const ContainerSection = tw.section`
    px-6 
    xl:px-36 
    xl:py-28 
    container 
    mx-auto
`;

export const BorderSectioSummary = tw.div`
    border-b-2 
    border-red-500 
    pb-4
`;


export const SectionSummaryTitle = tw.h1`
    text-4xl 
    md:text-4xl 
    lg:text-4xl 
    font-bold 
    text-red-500 
    pt-3
`;

export const ChartSection = tw.div`
    pt-8 
    pb-10
`;


export const SectionSummarySubtitle = tw.h1`
    text-xl 
    md:text-2xl 
    lg:text-2xl 
    font-bold 
    mb-4 
    text-slate-900
`;

export const SectionUnorderedList = tw.ul`
    list-disc 
    pl-5 
    space-y-2
`;

export const LinkPatents = tw.a`
    block 
    relative 
    hover:text-red-500 
    transition-colors 
    duration-300
`;

export const LineRed = tw.span`
    absolute 
    bottom-0 
    left-0 
    w-full 
    h-0.5
    bg-red-500 
    transform 
    transition-transform 
    duration-300
`;