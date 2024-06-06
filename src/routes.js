import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "./componentes/Cabecalho";
import Inicio from "./paginas/Inicio";
import Cadastro from "./paginas/Cadastro";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="*" element=''/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
