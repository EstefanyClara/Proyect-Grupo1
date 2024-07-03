import { useState, useEffect } from 'react'
import { ThemeContext } from './Components/Context/Context'
import './App.css'
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
 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        setUsuario(usuarioFirebase);
      } else {
        setUsuario(null);
      }
    });

    // Limpieza del listener de autenticación cuando el componente se desmonte
    return () => unsubscribe();
  }, []);
  
  return (
   
    <ThemeContext.Provider value={themeSettings}>
      {usuario ? <DashBoard/> : <Home/>}
    </ThemeContext.Provider>
  );
}

export default App;
