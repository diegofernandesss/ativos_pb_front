import { useState } from "react";
import { Layout } from "../pages";
import { Header } from "../components/PaginaInicial/Header";
import { Main } from "../components/PaginaInicial/Main";

export const PaginaInicial = () => {

    const [patente, setPatente] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);
    const [ictSelected, setIctSelected] = useState("ICTs")
    const [cur, setCur] = useState(1)

    return (
        <Layout>
            <Header 
                updatePatente={setPatente} 
                setRemoveLoading={setRemoveLoading} 
                currentCursor={cur}
                IctSelected={setIctSelected}
            />
            <Main 
                patente={patente} 
                removeLoading={removeLoading} 
                setRemoveLoading={setRemoveLoading} 
                setCursor={setCur}
                ictSelected={ictSelected}
            />
        </Layout>
    );
};
