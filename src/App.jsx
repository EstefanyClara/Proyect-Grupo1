import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home/home'
import './App.css'
import { ThemeContext } from './components/context/context'
import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)
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
      </Routes>
    </ThemeContext.Provider>
  )
}

export default App
