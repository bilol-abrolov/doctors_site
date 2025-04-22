import { Route, Routes } from "react-router-dom"
import './App.css'
import Doctor from "./components/Doctor"
import Home from "./components/Home"
import Shop from "./components/Shop"
import News from "./components/News"
import Doctordetails from "./components/Doctordetails"

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/doctor" element={<Doctor/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/doctordetails/:id" element={<Doctordetails/>}/>
      </Routes>
    </>
  )
}

export default App
