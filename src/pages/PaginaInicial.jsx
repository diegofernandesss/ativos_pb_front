import { useState } from "react";
import { Layout } from "../pages";
import { Header } from "../components/PaginaInicial/Header";
import { Main } from "../components/PaginaInicial/Main";

export const PaginaInicial = () => {

    const [ictSelected, setIctSelected] = useState("ICTs")

    return (
        <Layout>
            <Header setIctSelectedMain={setIctSelected} />
            <Main ictSelected={ictSelected} />
        </Layout>
    );
};
