import tw from 'tailwind-styled-components';


export const Container = tw.div`
    container 
    mx-auto
`;

export const MainContainer = tw.main`
    items-center 
    justify-between 
    max-w-screen-xl 
    mx-auto 
    px-2 
    pt-7 
    pb-8
`;

export const Select = tw.select`
    w-50 
    h-12 
    bg-white-500 
    border border-gray-300 
    rounded-md 
    shadow-sm 
    px-10 
    py-2 
    text-xs 
    font-medium 
    text-black 
    focus:outline-none 
    focus:ring-2  
    focus:ring-red-500 
    focus:border-red-500 
    mx-2 
    cursor-pointer
`;

export const Title = tw.h1`
    px-2 
    pt-7 
    pb-8 
    text-xl 
    mb-1 
    font-semibold
`;

export const LoadingContainer = tw.div`
    flex 
    justify-center 
    items-center 
    mb-16
`;

export const NotFoundContainer = tw.div`
    flex 
    justify-center 
    items-center 
    mb-20
`;

export const GridCards = tw.div`
    grid grid-cols-1 
    sm:grid-cols-2 
    lg:grid-cols-2 
    sm:gap-3
`;

export const Card = tw.div`
    rounded-xl 
    shadow-lg 
    hover:shadow-xl 
    mb-10 
    sm:mb-0 
    bg-secondary-light 
    dark:bg-ternary-dark 
    pt-4 
    box 
    border-t-4
`;

export const CardTitle = tw.h1`
    text-base 
    font-bold 
    m-4
`;

export const CardText= tw.p`
    font-semibold 
    ml-4
`;

export const CardOrderNumber = tw.p`
    font-normal 
    ml-4 
    text-stone-500
`;

export const CardDepositorText = tw.p`
    font-semibold 
    ml-4
    last:pb-4
`;

export const StatusBadge = tw.div`
    text-sm 
    ml-4 
    mr-4
    mt-4 
    py-2 
    px-4 
    rounded-full 
    border-0 
    font-semibold
    bg-teal-50
    text-teal-500
    mb-3
    w-40
`;

export const DetailsButton = tw.div`
    text-sm 
    ml-4 
    mr-4 
    py-2 
    px-4 
    rounded-full 
    border-0 
    font-semibold 
    bg-violet-50 
    text-violet-500 
    hover:bg-violet-100 
    mb-3 
    w-40 
    flex 
    items-center 
    justify-center 
    cursor-pointer
`;

export const DetailsText = tw.div`
    mr-3
`;


export const ArrowIcon = tw.div`
    w-2 
    h-2 
    ml-2 
    border-t-2 
    border-r-2 
    transform 
    rotate-45 
    border-violet-500
`;

export const LoadingButton = tw.div`
    text-sm 
    ml-4 
    mr-4 
    py-2 
    px-4 
    rounded-full 
    border-0 
    font-semibold 
    bg-violet-50 
    text-violet-400 
    hover:bg-violet-100 
    mb-3 
    w-40 
    flex 
    items-center 
    justify-center 
    cursor-pointer 
    hover:cursor-not-allowed
`;

export const Loadingtext = tw.div`
    mr-3
`;

export const LoadAnimate = tw.div`
    w-4 
    h-4 
    rounded-full 
    animate-spin
    border-4 
    border-solid 
    border-violet-500 
    border-t-transparent
`;

export const QueryNotFound = tw.div`
    text-gray-400
    font-bold
    text-xl
`;

export const PageItem = `
    h-10 
    w-10 
    mr-1 
    flex 
    justify-center 
    items-center 
    rounded-full 
    bg-gray-200 
    cursor-pointer 
    hover:scale-105 
    border-red-500 
    hover:bg-red-500 
    hover:text-white 
    cursor-pointer 
    transform 
    bg-scale-100
`;