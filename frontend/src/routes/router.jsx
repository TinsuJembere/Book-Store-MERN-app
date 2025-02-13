import { Routes, Route } from "react-router-dom";
import Home from '../pages/home/Home'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/dashboard" element={<div className="text-primary">Dashboard</div>} />

    </Routes>
  );
}

export default AppRoutes;
