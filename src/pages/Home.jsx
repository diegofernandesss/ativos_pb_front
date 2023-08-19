import { useState } from "react";
import { Layout } from ".";
import { Header } from "../components/Home/Header";
import { Main } from "../components/Home/Main";

export const Home = () => {
    const [ictSelected, setIctSelected] = useState("ICTs")
    const [resultNumPatente, setResultNumPatente] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false);
    const [situacaoSearch, setSituacaoSearch] = useState("concedida")

    return (
        <Layout>
            <Header 
                setIctSelectedMain={setIctSelected} 
                setResultNumPatente={setResultNumPatente}
                setRemoveLoading={setRemoveLoading}
                situacaoSearch={situacaoSearch}
            />
            <Main 
                ictSelected={ictSelected} 
                resultNumPatente={resultNumPatente}
                removeLoading={removeLoading}
                setRemoveLoading={setRemoveLoading}
                setSituacaoSearch={setSituacaoSearch}
            />
        </Layout>
    );
};
