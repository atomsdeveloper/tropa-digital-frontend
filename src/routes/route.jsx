// React
import { useEffect } from "react";

// React Router Dom
import { BrowserRouter, Route, Routes, useLocation } from "react-router";

// Pages
import { Login } from "../pages/Login";
import { Dash } from "../pages/Dash";
import { NotFound } from "../pages/NotFound";

// 'pathname' não pode ser capturado antes de ser iniciado um Router, uso dentro de um componente que está dentro do Router.
// Toda vez que o 'path'/url mudar é executado o scroll to top.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null; // O componente existe, mas não retorna nada.
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dash />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}
