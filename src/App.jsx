import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home/home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
