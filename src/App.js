import React from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./routes/Inicio";
import Historia from "./routes/Historia";
import Mision from "./routes/Mision";
import Estatutos from "./routes/Estatutos";
import Directivos from "./routes/Directivos";
import Asesor from "./routes/Asesor";
import Academicos from "./routes/Academicos";
import Eventos from "./routes/Eventos";
import Publicaciones from "./routes/Publicaciones";
import Footer from "./components/Footer";
import "./AppStyles.css"
  
  const App = () => {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/Historia" element={<Historia />} />
            <Route path="/Mision" element={<Mision />} />
            <Route path="/Estatutos" element={<Estatutos />} />
            <Route path="/Directivos" element={<Directivos />} />
            <Route path="/Asesor" element={<Asesor />} />
            <Route path="/Academicos" element={<Academicos />} />
            <Route path="/Eventos" element={<Eventos />} />
            <Route path="/Publicaciones" element={<Publicaciones />} />
            <Route path="/Contacto" element={<Footer />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  };

  export default App;
