import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home/home'
import './App.css'
import { ThemeContext } from "./components/context/context";
import { useState } from "react";
import Button from "./components/buttons/button"

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
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" exact />
      </Routes>
    </BrowserRouter>
    </ThemeContext.Provider>
  )
}

export default App
