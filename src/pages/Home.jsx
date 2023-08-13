import { useState } from "react";
import { Layout } from ".";
import { Header } from "../components/Home/Header";
import { Main } from "../components/Home/Main";

export const Home = () => {

    const [ictSelected, setIctSelected] = useState("ICTs")

    return (
        <Layout>
            <Header setIctSelectedMain={setIctSelected} />
            <Main ictSelected={ictSelected} />
        </Layout>
    );
};
