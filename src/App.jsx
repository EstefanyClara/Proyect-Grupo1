import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home/home'
import Dashboard from './Pages/Dashboard/dashboard'
import gameDetails from './Pages/gameDetails/gameDetails'
import './App.css'
import { ThemeContext } from './components/context/context'
import { useState } from 'react'



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

  
  return (
    <ThemeContext.Provider value={themeSettings}>
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<Dashboard />} path="/dashboard" exact />
        <Route element={<gameDetails />} path="/gameDetails" exact />
      </Routes>
    </ThemeContext.Provider>
  )
}

export default App
