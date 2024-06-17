import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import GameDetails from './Pages/GameDetails/GameDetails'
import { ThemeContext } from './ComponentsS/Context/Context'
import DashBoard from "./Pages/Dashboard/DashBoard"
import './App.css'
// Pages
import Home from './Pages/Home/Home'


function App() {

  const [themeSettings, setThemeSettings] = useState({
    mode: "light",
    switchMode: () => {
      setThemeSettings((prevState)=>({
        ...prevState,
        mode: prevState.mode === "light" ? "dark" : "light",
      }));   
    },
  });
  
  return (
    <ThemeContext.Provider value={themeSettings}>
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<DashBoard />} path="/dashboard" exact />
        <Route element={<GameDetails />} path="/gamedetails" exact />
      </Routes>
    </ThemeContext.Provider>
  )
}

export default App
