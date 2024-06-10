import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import GameDetails from './Pages/GameDetails/gamedetails'
import { ThemeContext } from './components/context/context'
import './App.css'
// Pages
import Home from './Pages/Home/home'
import Dashboard from './Pages/Dashboard/dashboard'

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
        <Route element={<Dashboard />} path="/dashboard" exact />
        <Route element={<GameDetails />} path="/gamedetails" exact />
      </Routes>
    </ThemeContext.Provider>
  )
}

export default App
