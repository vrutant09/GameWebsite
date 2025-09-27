import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import BirthdayMessage from './pages/BirthdayMessage'
import GameQuestion from './pages/GameQuestion'
import MemoryGame from './pages/MemoryGame'
import './index.css'

const AnimatedRoutes = () => {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/birthday" element={<PageTransition><BirthdayMessage /></PageTransition>} />
        <Route path="/game-question" element={<PageTransition><GameQuestion /></PageTransition>} />
        <Route path="/memory-game" element={<PageTransition><MemoryGame /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <AnimatedRoutes />
      </div>
    </Router>
  )
}

export default App