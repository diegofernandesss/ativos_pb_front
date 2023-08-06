import Aos from "aos";
import 'aos/dist/aos.css';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes  from './routers/router'


export const App = () => {
  Aos.init({
    duration: 1800,
    offset: 0,
  });

  return (
    <Router>
      <Routes />
    </Router>
  );
}