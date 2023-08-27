import { Routes, Route, Navigate } from "react-router-dom";
import { Home, About, Details } from '../pages'

export default function MainRouters() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="/sobre" element={<About />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
