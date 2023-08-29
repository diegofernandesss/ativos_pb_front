import { Routes, Route, Navigate } from "react-router-dom";
import { Home, About, Details } from '../pages'
import { Sumario } from "../pages/Sumario";

export default function MainRouters() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="/sobre" element={<About />} />
      <Route path="/sumario" element={<Sumario />} />

      {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  );
}
