import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import PageTransition from './components/PageTransition'
import GameLoadingScreen from './components/GameLoadingScreen'
import GameBackgroundMusic from './components/GameBackgroundMusic'
import Home from './pages/Home'
import BirthdayMessage from './pages/BirthdayMessage'
import GameQuestion from './pages/GameQuestion'
import MemoryGame from './pages/MemoryGame'
import Confetti from 'react-confetti'
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
  const [isLoading, setIsLoading] = useState(true)
  const [showConfetti, setShowConfetti] = useState(false)

  const handleLoadingComplete = () => {
    setIsLoading(false)
    // Show confetti when entering the app
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 5000) // Stop confetti after 5 seconds
  }

  const triggerConfetti = () => {
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 3000)
  }

  if (isLoading) {
    return <GameLoadingScreen onLoadingComplete={handleLoadingComplete} />
  }

  return (
    <Router>
      <div className="App">
        {showConfetti && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={200}
            recycle={false}
            colors={['#9333ea', '#7c3aed', '#6b21d4', '#5b21b6', '#4c1d95', '#3b0764']}
            wind={0.05}
            gravity={0.3}
          />
        )}
        <GameBackgroundMusic onConfettiTrigger={triggerConfetti} />
        <AnimatedRoutes />
      </div>
    </Router>
  )
}

export default App