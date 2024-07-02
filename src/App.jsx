import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ThemeContext } from "./Components/Context/Context";
import "./App.css";
// Pages
import GameDetails from "./Pages/GameDetails/GameDetails";
import DashBoard from "./Pages/Dashboard/DashBoard";
import Home from "./Pages/Home/Home";
//importando los modulos de firebase
import appFirebase from "./credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth"; //getAuth traerá el objeto de autenticación y onAuthStateChanged se encargará de escuchar los cambios en la autenticación

const auth = getAuth(appFirebase);

function App() {
  const [themeSettings, setThemeSettings] = useState({
    mode: "light",
    switchMode: () => {
      setThemeSettings((prevState) => ({
        ...prevState,
        mode: prevState.mode === "light" ? "dark" : "light",
      }));
    },
  });

  const [usuario, setUsuario] = useState(null); //El estado usuario se inicializa en null
  onAuthStateChanged(auth, (usuarioFirebase) => { //escuchando los cambios en la autenticación
    if(usuarioFirebase){
      setUsuario(usuarioFirebase); 
    } else{
      setUsuario(null); //sino esta logeado la variable usuario se inicializa en null
    }
  });
  
  return (
    /*<ThemeContext.Provider value={themeSettings}>
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<DashBoard />} path="/dashboard" exact />
        <Route element={<GameDetails />} path="/gamedetails" exact />
      </Routes>
    </ThemeContext.Provider>*/
    <ThemeContext.Provider value={themeSettings}>
      {usuario ? <DashBoard/> : <Home/>}
    </ThemeContext.Provider>
  );
}

export default App;
