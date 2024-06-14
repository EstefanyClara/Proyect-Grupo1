import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GameDetails from "./Pages/GameDetails/GameDetails";
import { ThemeContext } from "./Components/Context/Context";
import "./App.css";
// Pages
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";

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
        <Route element={<GameDetails />} path="/gamedetails" exact />
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
