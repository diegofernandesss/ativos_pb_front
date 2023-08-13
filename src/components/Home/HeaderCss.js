import tw from 'tailwind-styled-components';

export const HeaderComponent = tw.header``;

export const HeaderBackground = tw.div`
    bg-gray-200
`;

export const HeaderContainer = tw.div`
    container 
    mx-auto
`;

export const BlockContainer = tw.div`
    container 
    items-center 
    justify-between 
    max-w-screen-xl 
    p-4 
    mx-auto 
    px-4 
    pt-8 
    pb-8
`;

export const SearchBarContainer = tw.div`
    mt-5 
    flex 
    rounded-3xl 
    bg-white 
    py-2.5 
    pr-2.5 
    shadow-xl 
    shadow-red-900/5 
    focus-within:ring-2 
    focus-within:ring-red-600
`;

export const SearchInput = tw.input`
    -my-2.5 
    flex-auto 
    bg-transparent 
    pl-6  
    text-sm 
    text-slate-900 
    placeholder:text-slate-400 
    focus:outline-none 
`;

export const SearchButton = tw.button`
    group 
    relative 
    h-10 
    w-40 
    overflow-hidden 
    rounded-lg 
    bg-white 
    text-lg 
    shadow-xl
`;

export const SearchButtonHighlight = tw.div`
    absolute 
    inset-0 
    w-3 
    bg-red-500 
    transition-all 
    duration-[250ms] 
    ease-out 
    group-hover:w-full
`;

export const SearchButtonText = tw.span`
    relative 
    text-black 
    group-hover:text-white 
    text-sm
`;

export const SelectContainer = tw.div`
    items-center 
    justify-between 
    max-w-screen-xl 
    px-4 
    py-4 
    pb-4 
    mx-auto
`;

export const StyledSelect = tw.select`
    w-50 
    h-12 
    bg-white-500 
    border 
    border-gray-300 
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
    cursor-pointer
`;