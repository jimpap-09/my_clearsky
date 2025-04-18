import { Route, Routes } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Courses from "./pages/Courses"
import Grades from "./pages/Grades"
import Home from "./pages/Home"
import Login from "./pages/Login"

import "./styles/PageLayout.css"

function App() {
  return (
    <div className="page-layout">
      <Navbar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  )
}

export default App