import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Contact from "./pages/Contact"

export default function App() {
  return (
    <div>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Page Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}