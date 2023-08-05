import { NavBar } from '../components/NavBar'
import { Header } from '../components/PaginaInicial/Header'
import { Main } from '../components/PaginaInicial/Main';
import { Footer } from '../components/PaginaInicial/Footer';
import { useState } from 'react';

export const PaginaInicial = () => {
    const [patente, setPatente] = useState([]);

    return (
        <>
            <NavBar  />
            <Header updatePatente={setPatente}/>
            <Main patente={patente}/>
            <Footer />                  
        </>
    );
}