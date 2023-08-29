import { useState } from "react";

export const Main = () => {
    const [hoveredIndex, setHoveredIndex] = useState(-1);

    

    const PatentApplications = [
        {link: "/temp-plot(1).html", name: "Quantidade de Pedidos de Patentes em Trâmite das ICTs por Natureza"},
        {link: "/temp-plot(2).html", name: "Pedidos de Patentes por ICTs"},
        {link: "/temp-plot(3).html", name: "Número de Pedidos de Patentes em Trâmite da UNIVERSIDADE FEDERAL DA PARAIBA"},
        {link: "/temp-plot(4).html", name: "Número de Pedidos de Patentes em Trâmite da UNIVERSIDADE FEDERAL DE CAMPINA GRANDE"},
        {link: "/temp-plot(5).html", name: "Número de Pedidos de Patentes em Trâmite da UNIVERSIDADE ESTADUAL DA PARAIBA"},
        {link: "/temp-plot(6).html", name: "Número de Pedidos de Patentes em Trâmite do INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DA PARAIBA"},
        {link: "/temp-plot(7).html", name: "Número de Pedidos de Patentes em Trâmite da INSTITUTO NACIONAL DO SEMIÁRIDO"},
        {link: "/temp-plot(8).html", name: "Número de Pedidos de Patentes em Trâmite das ICTs por Área Tecnológica"},
        {link: "/temp-plot(9).html", name: "Número de Pedidos de Patentes em Trâmite das ICTs na Área Tecnológica de Química"},
        {link: "/temp-plot(10).html", name: "Quantidade de Pedidos de Patentes em Trâmite das ICTs por Campo Tecnológico na Área Tecnológica de Química"},
        {link: "/temp-plot(11).html", name: "Número de Pedidos de Patentes em Trâmite das ICTs na Área Tecnológica de Instrumentos"},
        {link: "/temp-plot(12).html", name: "Quantidade de Pedidos de Patentes em Trâmite das ICTs por Campo Tecnológico na Área Tecnológica de Instrumentos"},
        {link: "/temp-plot(13).html", name: "Número de Pedidos de Patentes em Trâmite das ICTs na Área Tecnológica de Engenharia Mecânica"},
        {link: "/temp-plot(14).html", name: "Quantidade de Pedidos de Patentes em Trâmite das ICTs por Campo Tecnológico na Área Tecnológica de Engenharia Mecânica"},
        {link: "/temp-plot(15).html", name: "Número de Pedidos de Patentes em Trâmite das ICTs na Área Tecnológica de Engenharia Elétrica"},
        {link: "/temp-plot(16).html", name: "Quantidade de Pedidos de Patentes em Trâmite das ICTs por Campo Tecnológico na Área Tecnológica de Engenharia Elétrica"},
        {link: "/temp-plot(17).html", name: "Número de Pedidos de Patentes em Trâmite das ICTs na Área Tecnológica de Outros Setores"},
        {link: "/temp-plot(18).html", name: "Quantidade de Pedidos de Patentes em Trâmite das ICTs por Campo Tecnológico na Área Tecnológica de Outros Setores"}
    ];
    return (
        <>
         <section className="px-6 xl:px-36 xl:py-28 container mx-auto">
            <div className="border-b-2 border-red-500 pb-4">
                <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold text-red-500 pt-2">Sumário</h1>
            </div>
            <div className="pt-8 pb-10">
                <h1 className="text-xl md:text-2xl lg:text-2xl font-bold mb-4 text-slate-900">Gráficos</h1>
                <ul className="list-disc pl-5 space-y-2">
                    {PatentApplications.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.link}
                                className="block relative hover:text-red-500 transition-colors duration-300"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(-1)}
                            >
                                {item.name}
                                <span
                                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform transition-transform duration-300 ${
                                        hoveredIndex === index ? 'scale-x-100' : 'scale-x-0'
                                    }`}
                                ></span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            </section>

        </>
    );
}