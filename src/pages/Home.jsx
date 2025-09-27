import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Confetti from 'react-confetti'

const WelcomePopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="popup">
      <div className="popup-content text-center">
        <div className="mb-6">
          <img 
            src="/Dudu-giving-flower-to-bubu.gif" 
            alt="Dudu giving flower" 
            className="w-48 h-48 mx-auto rounded-2xl"
          />
        </div>
        <h2 className="text-4xl font-dancing text-pink-600 mb-4">
          Welcome Beautiful! 🌸
        </h2>
        <p className="text-xl text-gray-700 mb-6 font-dancing">
          I have something special prepared for you today! ✨
        </p>
        <button 
          onClick={onClose}
          className="nav-button"
        >
          Let's go! 💕
        </button>
      </div>
    </div>
  )
}

const Home = () => {
  const [showWelcomePopup, setShowWelcomePopup] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    // Show welcome popup after a short delay
    const timer = setTimeout(() => {
      setShowWelcomePopup(true)
      setShowConfetti(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleWelcomeClose = () => {
    setShowWelcomePopup(false)
    // Keep confetti for a bit longer
    setTimeout(() => setShowConfetti(false), 3000)
  }

  const goToBirthdayMessage = () => {
    navigate('/birthday')
  }

  return (
    <div className="min-h-screen bg-gradient-romantic page-container">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={200}
          recycle={false}
          gravity={0.3}
        />
      )}
      
      <WelcomePopup 
        isOpen={showWelcomePopup} 
        onClose={handleWelcomeClose} 
      />

      <div className="text-center space-y-16">
        <div className="space-y-8">
          <h1 className="game-title leading-tight">
            Special Day Game 🎮✨
          </h1>
          <div className="text-3xl md:text-4xl lg:text-5xl font-dancing text-pink-600">
            A magical adventure awaits you, my love 💕
          </div>
        </div>

        {/* Floating decorations */}
        <div className="flex justify-center space-x-8 text-6xl py-12">
          <span className="floating-flower text-pink-400">🎮</span>
          <span className="floating-flower text-rose-400 animation-delay-1000">🌸</span>
          <span className="floating-flower text-purple-400 animation-delay-2000">✨</span>
          <span className="floating-flower text-pink-400 animation-delay-1500">💕</span>
        </div>

        <div className="max-w-4xl mx-auto bg-white/20 backdrop-blur-md rounded-3xl p-12 shadow-2xl">
          <p className="game-paragraph text-center">
            Get ready for a fun little game I created just for you! 🎯
          </p>
          <p className="game-paragraph text-center">
            It's going to be cute, funny, and totally worth your time! 😊
          </p>
        </div>

        <button 
          onClick={goToBirthdayMessage}
          className="nav-button"
        >
          Let's Start! 🚀
        </button>

        {/* Bottom decorations */}
        <div className="flex justify-center space-x-8 text-5xl">
          <span className="floating-flower">🎂</span>
          <span className="floating-flower animation-delay-300">🎉</span>
          <span className="floating-flower animation-delay-600">🎈</span>
          <span className="floating-flower animation-delay-900">🌟</span>
          <span className="floating-flower animation-delay-1200">💖</span>
        </div>
      </div>
    </div>
  )
}

export default Home