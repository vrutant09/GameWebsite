import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const YesPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="popup">
      <div className="popup-content text-center">
        <div className="mb-6">
          <img 
            src="/Yasssss-Milk.gif" 
            alt="Yassss Milk" 
            className="w-48 h-48 mx-auto rounded-2xl"
          />
        </div>
        <h2 className="text-4xl font-dancing text-green-600 mb-4">
          Yaaay! 🎉✨
        </h2>
        <p className="text-xl text-gray-700 mb-6 font-dancing">
          Perfect! Let's play the special game! 🎮💕
        </p>
        <button 
          onClick={onClose}
          className="yes-button"
        >
          I'm Ready! 🚀
        </button>
      </div>
    </div>
  )
}

const NoHoverPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="popup">
      <div className="popup-content text-center">
        <div className="mb-6">
          <img 
            src="/Pleading-dudu.gif" 
            alt="Pleading Dudu" 
            className="w-40 h-40 mx-auto rounded-2xl"
          />
        </div>
        <h2 className="text-3xl font-dancing text-pink-600 mb-4">
          Don't say nooo qwq 🥺
        </h2>
        <button 
          onClick={onClose}
          className="nav-button text-lg px-8 py-3"
        >
          Okay okay! 💕
        </button>
      </div>
    </div>
  )
}

const GameQuestion = () => {
  const navigate = useNavigate()
  const [showYesPopup, setShowYesPopup] = useState(false)
  const [showNoHoverPopup, setShowNoHoverPopup] = useState(false)
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
  const [evasionCount, setEvasionCount] = useState(0)
  const [hoverAttempts, setHoverAttempts] = useState(0) // Track hover attempts for popup timing
  const noButtonRef = useRef(null)
  const containerRef = useRef(null)

  // Simple positions within the container - no complex calculations
  const positions = [
    { x: 0, y: 0 },      // Center (default)
    { x: 150, y: 0 },    // Right
    { x: -150, y: 0 },   // Left  
    { x: 0, y: -80 },    // Up
    { x: 0, y: 80 },     // Down
    { x: 120, y: -60 },  // Top right
    { x: -120, y: -60 }, // Top left
    { x: 120, y: 60 },   // Bottom right
    { x: -120, y: 60 },  // Bottom left
  ]

  const moveButton = () => {
    // Pick a random position from our safe positions
    const randomIndex = Math.floor(Math.random() * positions.length)
    const newPosition = positions[randomIndex]
    setNoButtonPosition(newPosition)
    setEvasionCount(prev => prev + 1)
  }

  // Auto scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleYesClick = () => {
    setShowYesPopup(true)
  }

  const handleNoHover = () => {
    moveButton() // Always move button when hovered
    setHoverAttempts(prev => prev + 1) // Increment hover attempts
    
    // Only show popup every 3rd attempt
    if (hoverAttempts % 3 === 2) { // When hoverAttempts becomes 2, 5, 8, etc. (every 3rd time)
      setShowNoHoverPopup(true)
    }
  }

  const handleNoClick = (e) => {
    e.preventDefault()
    moveButton() // Always move button when clicked
    setHoverAttempts(prev => prev + 1) // Increment attempts for clicks too
    
    // Only show popup every 3rd attempt
    if (hoverAttempts % 3 === 2) { // When hoverAttempts becomes 2, 5, 8, etc. (every 3rd time)
      setShowNoHoverPopup(true)
    }
  }

  const closeYesPopup = () => {
    setShowYesPopup(false)
    // Navigate to the memory game
    navigate('/memory-game')
  }

  const closeNoHoverPopup = () => {
    setShowNoHoverPopup(false)
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-sunset page-container">
      <YesPopup isOpen={showYesPopup} onClose={closeYesPopup} />
      <NoHoverPopup isOpen={showNoHoverPopup} onClose={closeNoHoverPopup} />
      
      <div className="text-center space-y-16 max-w-4xl mx-auto relative">
        
        {/* Game question title */}
        <div className="space-y-8">
          <h1 className="game-title leading-tight text-purple-600">
            Special Game Time! 🎮
          </h1>
        </div>

        {/* Main question with gif */}
        <div className="bg-white/20 backdrop-blur-md rounded-3xl p-12 shadow-2xl">
          <div className="mb-8">
            <img 
              src="/Pleading-milk.gif" 
              alt="Pleading Milk" 
              className="w-48 h-48 mx-auto rounded-2xl floating-flower"
            />
          </div>
          
          <p className="game-paragraph text-center text-gray-800 mb-12">
            Do you want to play the special game that I have made? 🎯✨
          </p>

          {/* Buttons container */}
          <div className="flex justify-center space-x-8 relative">
            {/* Yes button - stays in place */}
            <button 
              onClick={handleYesClick}
              className="yes-button relative z-10"
            >
              Yes! 😊
            </button>

            {/* No button - evades cursor and clicks */}
            <button 
              ref={noButtonRef}
              onMouseEnter={handleNoHover}
              onClick={handleNoClick}
              className={`no-button transition-all duration-500 ease-out ${
                evasionCount > 0 ? 'shadow-2xl' : ''
              }`}
              style={
                evasionCount > 0 
                  ? {
                      transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                      position: 'relative',
                      zIndex: 1000
                    }
                  : {}
              }
            >
              No... 😔
            </button>
          </div>

          {/* Dynamic messages based on evasion count */}
          {evasionCount > 0 && (
            <div className="text-center mt-8">
              <p className="text-lg font-dancing text-pink-600">
                {evasionCount === 1 && "Oops! The button is shy! 🙈"}
                {evasionCount === 2 && "It's running away from you! 🏃‍♀️💨"}
                {evasionCount === 3 && "This button really doesn't want to be clicked! 😅"}
                {evasionCount === 4 && "It's playing hard to get! 🤭"}
                {evasionCount === 5 && "The button has trust issues! 😂"}
                {evasionCount >= 6 && "You're so persistent! I love that about you! 🥰💕"}
              </p>
              {evasionCount > 3 && (
                <p className="text-md font-dancing text-purple-600 mt-2">
                  (Evasion attempts: {evasionCount} - Just say yes already! 😄)
                </p>
              )}
            </div>
          )}
        </div>

        {/* Floating decorations */}
        <div className="flex justify-center space-x-8 text-5xl">
          <span className="floating-flower">🎮</span>
          <span className="floating-flower animation-delay-300">✨</span>
          <span className="floating-flower animation-delay-600">💕</span>
          <span className="floating-flower animation-delay-900">🌸</span>
          <span className="floating-flower animation-delay-1200">🎯</span>
        </div>

        {/* Encouraging message */}
        {evasionCount > 6 && (
          <div className="bg-pink-100/30 backdrop-blur-md rounded-2xl p-6 shadow-lg">
            <p className="text-2xl font-dancing text-pink-700">
              Okay okay, you win! You're too determined! 🥺💕<br />
              <span className="text-lg">Maybe just try saying yes instead? �</span>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default GameQuestion