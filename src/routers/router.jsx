import { Routes, Route, Navigate } from "react-router-dom";
import { Home, About} from '../pages'

export default function MainRouters() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/sobre" element={<About />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
