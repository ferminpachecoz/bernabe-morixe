import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Service from './pages/Service';

function App() {
  return (
    <Routes>
      <Route exact={true} path='/' element={<Home />} />
      <Route path='/service/:id' element={<Service />} />
    </Routes>
  );
}

export default App;
