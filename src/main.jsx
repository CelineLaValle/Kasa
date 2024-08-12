import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import Header from './components/Header.jsx'
import Banner from './components/Banner.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Logements from './pages/Logements.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logements />} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>,
)

