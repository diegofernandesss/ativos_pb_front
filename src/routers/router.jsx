// MainRouters.js
import { Routes, Route, Navigate } from "react-router-dom";
import { PaginaInicial, Sobre } from "../pages";

export default function MainRouters() {
  return (
    <Routes>
      <Route path="/" element={<PaginaInicial />}/>
      <Route path="/sobre" element={<Sobre />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
