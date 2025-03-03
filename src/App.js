import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Clinica from './pages/Clinica';
import Grupo from './pages/Grupo';
import Sanacion from './pages/Sanacion';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route exact={true} path='/' element={<Home />} />
        <Route path='/clinica-individual' element={<Clinica />} />
        <Route path='/talleres-y-espacios-grupales' element={<Grupo />} />
        <Route path='/armonización-de-campo-energético' element={<Sanacion />} />
      </Routes>
    </>
  );
}

export default App;
