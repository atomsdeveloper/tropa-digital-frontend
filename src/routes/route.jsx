// React Router Dom
import { BrowserRouter, Route, Routes } from "react-router";

// Pages
import { Login } from "../pages/Login";
import { Painel } from "../pages/Painel";
import { NotFound } from "../pages/NotFound";

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/painel" element={<Painel />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
