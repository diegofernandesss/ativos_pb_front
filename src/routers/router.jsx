import { Routes, Route, Navigate } from "react-router-dom";
import { Home, About, Details, Sumario } from '../pages'

export default function MainRouters() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="/about" element={<About />} />
      <Route path="/summary" element={<Sumario />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
