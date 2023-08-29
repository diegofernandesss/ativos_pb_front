import { useState } from "react";
import { ContainerSection,
         BorderSectioSummary,
         SectionSummaryTitle,
         ChartSection,
         SectionSummarySubtitle,
         SectionUnorderedList,
         LinkPatents,
         LineRed
} from "./MainCss";


export const Main = () => {
    const [hoveredIndex, setHoveredIndex] = useState(-1);

    const PatentApplications = [
        {link: "/temp-plot(1).html",  name: "Quantidade de Pedidos de Patentes em Trâmite das ICTs por Natureza"},
        {link: "/temp-plot(2).html",  name: "Pedidos de Patentes por ICTs"},
        {link: "/temp-plot(3).html",  name: "Número de Pedidos de Patentes em Trâmite da UNIVERSIDADE FEDERAL DA PARAIBA"},
        {link: "/temp-plot(4).html",  name: "Número de Pedidos de Patentes em Trâmite da UNIVERSIDADE FEDERAL DE CAMPINA GRANDE"},
        {link: "/temp-plot(5).html",  name: "Número de Pedidos de Patentes em Trâmite da UNIVERSIDADE ESTADUAL DA PARAIBA"},
        {link: "/temp-plot(6).html",  name: "Número de Pedidos de Patentes em Trâmite do INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DA PARAIBA"},
        {link: "/temp-plot(7).html",  name: "Número de Pedidos de Patentes em Trâmite da INSTITUTO NACIONAL DO SEMIÁRIDO"},
        {link: "/temp-plot(8).html",  name: "Número de Pedidos de Patentes em Trâmite das ICTs por Área Tecnológica"},
        {link: "/temp-plot(9).html",  name: "Número de Pedidos de Patentes em Trâmite das ICTs na Área Tecnológica de Química"},
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
            <ContainerSection>
                <BorderSectioSummary >
                    <SectionSummaryTitle>Sumário</SectionSummaryTitle> {/** Título */}
                </BorderSectioSummary >
                <ChartSection>
                    <SectionSummarySubtitle>Gráficos</SectionSummarySubtitle> {/** Subtítulo */}
                    <SectionUnorderedList>
                        {PatentApplications.map((item, index) => (
                            <li key={index}>
                                <LinkPatents
                                    href={item.link}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(-1)}
                                >
                                    {item.name}
                                    <LineRed className={` ${hoveredIndex === index ? 'scale-x-100' : 'scale-x-0'}`} />
                                </LinkPatents>
                            </li>
                        ))}
                    </SectionUnorderedList>
                </ChartSection>
            </ContainerSection>
        </>
    );
}