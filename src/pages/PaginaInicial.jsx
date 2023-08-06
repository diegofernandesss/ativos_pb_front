import { useState } from "react";
import { Layout } from "../pages";
import { Header } from "../components/PaginaInicial/Header";
import { Main } from "../components/PaginaInicial/Main";

export const PaginaInicial = () => {
  const [patente, setPatente] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);

  return (
    <Layout>
      <Header updatePatente={setPatente} setRemoveLoading={setRemoveLoading} />
      <Main patente={patente} removeLoading={removeLoading} setRemoveLoading={setRemoveLoading} />
    </Layout>
  );
};
