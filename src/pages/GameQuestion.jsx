import React, { useState } from 'react'

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
  const [showYesPopup, setShowYesPopup] = useState(false)
  const [showNoHoverPopup, setShowNoHoverPopup] = useState(false)
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
  const [noButtonClicks, setNoButtonClicks] = useState(0)

  const handleYesClick = () => {
    setShowYesPopup(true)
  }

  const handleNoHover = () => {
    setShowNoHoverPopup(true)
  }

  const handleNoClick = (e) => {
    e.preventDefault()
    
    // Make the button run away!
    const newClicks = noButtonClicks + 1
    setNoButtonClicks(newClicks)
    
    // Calculate random position for the button to escape to
    const maxX = window.innerWidth - 200  // button width buffer
    const maxY = window.innerHeight - 100 // button height buffer
    const minDistance = 100 // minimum distance to move
    
    let newX, newY
    
    do {
      newX = Math.random() * (maxX - minDistance * 2) + minDistance
      newY = Math.random() * (maxY - minDistance * 2) + minDistance
    } while (
      Math.abs(newX - noButtonPosition.x) < minDistance && 
      Math.abs(newY - noButtonPosition.y) < minDistance
    )
    
    setNoButtonPosition({ x: newX, y: newY })
    
    // Show pleading popup occasionally
    if (newClicks % 2 === 0) {
      setShowNoHoverPopup(true)
    }
  }

  const closeYesPopup = () => {
    setShowYesPopup(false)
    // Here you would navigate to the actual game
    alert("🎮 Great! The actual game would start here! This is where you'll implement the main game logic. 💕")
  }

  const closeNoHoverPopup = () => {
    setShowNoHoverPopup(false)
  }

  return (
    <div className="min-h-screen bg-gradient-sunset page-container">
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

            {/* No button - can be moved or in original position */}
            <button 
              onMouseEnter={handleNoHover}
              onClick={handleNoClick}
              className={`no-button ${noButtonClicks > 0 ? 'evasive-button' : ''} transition-transform duration-200`}
              style={
                noButtonClicks > 0 
                  ? {
                      position: 'fixed',
                      left: `${noButtonPosition.x}px`,
                      top: `${noButtonPosition.y}px`,
                      zIndex: 1000
                    }
                  : {}
              }
            >
              No... 😔
            </button>
          </div>

          {noButtonClicks > 0 && (
            <p className="text-lg font-dancing text-pink-600 mt-8">
              Hey! Why is the button running away? 🏃‍♀️💨
              {noButtonClicks > 3 && " (You've tried " + noButtonClicks + " times! Just say yes! 😄)"}
            </p>
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
        {noButtonClicks > 5 && (
          <div className="bg-pink-100/30 backdrop-blur-md rounded-2xl p-6 shadow-lg">
            <p className="text-2xl font-dancing text-pink-700">
              Come on, you know you want to play! 🥺💕
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default GameQuestion