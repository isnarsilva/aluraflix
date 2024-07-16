import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "./componentes/Cabecalho";
import Inicio from "./paginas/Inicio";
import Cadastro from "./paginas/Cadastro";
import Rodape from "./componentes/Rodape";

function AppRoutes() {

  

  return (
    <BrowserRouter>
      <Cabecalho/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="*" element=''/>
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
