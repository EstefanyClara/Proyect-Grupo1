import { Routes, Route } from 'react-router-dom'
import './App.css'
import {Dashboard}  from './Pages/Dashboard/dashboard.jsx'
import {Home} from './Pages/Home/home.jsx'



export default function App() {
 

  return (
    <div className="App">
      <Routes> 
        <Route path="/" element={<Home/>}  />
        <Route path="/dashboard" element={<Dashboard/>}  />
      </Routes> 
    
  </div> 
  )
}
