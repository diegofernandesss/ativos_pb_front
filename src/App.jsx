import Aos from "aos";
import 'aos/dist/aos.css';
import {PaginaInicial, Sobre } from './pages'

export const App = () => {
  Aos.init({
    duration: 1800,
    offset: 0,
  });

  return (
    <>
      <PaginaInicial />
      <Sobre />
    </>
  );
}