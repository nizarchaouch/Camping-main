import "./style.css";

import { Routes, Route, Navigate } from 'react-router-dom';
import Signup from './Pages/Singup/Signup';
import Main from "./Components/Main/Main";
import Acceuil from "./Pages/Acceuil/Acceuil";
import Destination from "./Pages/Destination/Destination";


function App() {
  return (
    <>
      <Main /> 
      <Routes>
        <Route path="/" element={<Navigate replace to="acceuil" />} />
        <Route path="/signup" element={< Signup />} />
        <Route path="/acceuil" element={< Acceuil />} />
        <Route path="/destination" element={< Destination />}/>

        {/* <Route path="/About" element={< About />} /> */}
      </Routes>
    </>
  );
}

export default App;
