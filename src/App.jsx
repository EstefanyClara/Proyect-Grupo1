import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ThemeContext } from "./components/context/context";
import "./App.css";
// Pages
import Home from "./Pages/Home/home";
import DashBoard from "./Pages/Dashboard/dashboard";

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
        <Route element={<DashBoard />} path="/dashboard" exact />
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
