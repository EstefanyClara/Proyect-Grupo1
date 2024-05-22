import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home/home'
import './App.css'

import Button from "./components/buttons/button"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" exact />
      </Routes>
    </BrowserRouter>
  )
}

export default App
