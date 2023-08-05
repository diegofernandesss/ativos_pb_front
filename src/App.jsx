import NavBar from './components/NavBar'
import Header from './components/Header'
import Main from './components/Main';
import Footer from './components/Footer';
import { useState } from 'react';

import Aos from "aos";
import 'aos/dist/aos.css';

const App = () => {
  const [patente, setPatente] = useState([]);

  Aos.init({
    duration: 1800,
    offset: 0,
  });

  return (
    <>
      <NavBar  />
      <Header updatePatente={setPatente}/>
      <Main patente={patente}/>
      <Footer />
    </>
  );
}

export default App;