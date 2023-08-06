import { useState } from 'react';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/PaginaInicial/Footer';
import { Header } from '../components/PaginaInicial/Header';
import { Main } from '../components/PaginaInicial/Main';

export const PaginaInicial = () => {
    const [patente, setPatente] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);
    const [cur, setCur] = useState(1);
    const [ictSelected, setIctSelected] = useState("")

    return (
        <>
            <NavBar  />
            <Header updatePatente={setPatente} setRemoveLoading={setRemoveLoading} currentPage={cur} updateIctSelected={setIctSelected}/>
            <Main patente={patente} removeLoading={removeLoading} setRemoveLoading={setRemoveLoading} setCuror={setCur} ictSelected={ictSelected}/>
            <Footer />                  
        </>
    );
}