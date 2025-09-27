import React, { useState, useEffect } from 'react'

const MemoryGame = () => {
  // Game cards with cute couple emojis
  const cardEmojis = [
    '💕', '💖', '💝', '🌹', '🎀', '💐', '🥰', '😘',
    '💕', '💖', '💝', '🌹', '🎀', '💐', '🥰', '😘'
  ]

  const [cards, setCards] = useState([])
  const [flippedCards, setFlippedCards] = useState([])
  const [matchedCards, setMatchedCards] = useState([])
  const [moves, setMoves] = useState(0)
  const [gameWon, setGameWon] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)

  // Initialize game
  useEffect(() => {
    initializeGame()
  }, [])

  const initializeGame = () => {
    // Shuffle cards
    const shuffled = [...cardEmojis].sort(() => Math.random() - 0.5)
    const gameCards = shuffled.map((emoji, index) => ({
      id: index,
      emoji,
      isFlipped: false,
      isMatched: false
    }))
    setCards(gameCards)
    setFlippedCards([])
    setMatchedCards([])
    setMoves(0)
    setGameWon(false)
  }

  // Handle card click
  const handleCardClick = (cardId) => {
    if (!gameStarted) setGameStarted(true)
    
    const card = cards.find(c => c.id === cardId)
    
    // Prevent clicking already flipped or matched cards
    if (card.isFlipped || card.isMatched || flippedCards.length >= 2) {
      return
    }

    const newFlippedCards = [...flippedCards, cardId]
    setFlippedCards(newFlippedCards)

    // Update card state
    setCards(prevCards => 
      prevCards.map(c => 
        c.id === cardId ? { ...c, isFlipped: true } : c
      )
    )

    // Check for match when 2 cards are flipped
    if (newFlippedCards.length === 2) {
      setMoves(prev => prev + 1)
      
      const [firstId, secondId] = newFlippedCards
      const firstCard = cards.find(c => c.id === firstId)
      const secondCard = cards.find(c => c.id === secondId)

      if (firstCard.emoji === secondCard.emoji) {
        // Match found!
        const newMatchedCards = [...matchedCards, firstId, secondId]
        setMatchedCards(newMatchedCards)
        
        setTimeout(() => {
          setCards(prevCards =>
            prevCards.map(c =>
              newMatchedCards.includes(c.id) 
                ? { ...c, isMatched: true }
                : c
            )
          )
          setFlippedCards([])
          
          // Check if game is won
          if (newMatchedCards.length === cardEmojis.length) {
            setGameWon(true)
          }
        }, 1000)
      } else {
        // No match - flip back after delay
        setTimeout(() => {
          setCards(prevCards =>
            prevCards.map(c =>
              newFlippedCards.includes(c.id)
                ? { ...c, isFlipped: false }
                : c
            )
          )
          setFlippedCards([])
        }, 1500)
      }
    }
  }

  const restartGame = () => {
    initializeGame()
    setGameStarted(false)
  }

  const goToMainWebsite = () => {
    // Placeholder function - you'll replace this with actual redirect
    window.location.href = "https://your-birthday-website.vercel.app/"
  }

  return (
    <div className="min-h-screen bg-gradient-sunset page-container">
      {/* Game Won Popup */}
      {gameWon && (
        <div className="popup">
          <div className="popup-content text-center">
            <div className="mb-6">
              <img 
                src="/Yasssss-Milk.gif" 
                alt="Victory" 
                className="w-48 h-48 mx-auto rounded-2xl"
              />
            </div>
            <h2 className="text-5xl font-dancing text-pink-600 mb-4">
              🎉 You Won! 🎉
            </h2>
            <p className="text-2xl text-gray-700 mb-6 font-dancing">
              Amazing! You completed the memory game in {moves} moves! 💕
            </p>
            <p className="text-xl text-purple-600 mb-8 font-dancing">
              You're absolutely incredible! 🥰✨
            </p>
            
            <div className="space-y-4">
              <button 
                onClick={goToMainWebsite}
                className="yes-button text-xl px-12 py-4 mb-4"
              >
                🌸 Go to Main Website 🌸
              </button>
              <br />
              <button 
                onClick={restartGame}
                className="nav-button text-lg px-8 py-3"
              >
                🎮 Play Again 🎮
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="text-center space-y-8 max-w-4xl mx-auto">
        {/* Game Title */}
        <div className="space-y-4">
          <h1 className="game-title leading-tight text-purple-600">
            Memory Game 💕
          </h1>
          <p className="text-xl font-dancing text-pink-600">
            Match the cute emojis to win! 🎯✨
          </p>
        </div>

        {/* Game Stats */}
        {gameStarted && (
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 shadow-lg">
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">{moves}</p>
                <p className="text-sm font-dancing text-gray-700">Moves</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-pink-600">{matchedCards.length / 2}</p>
                <p className="text-sm font-dancing text-gray-700">Matches</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">{cardEmojis.length / 2 - matchedCards.length / 2}</p>
                <p className="text-sm font-dancing text-gray-700">Left</p>
              </div>
            </div>
          </div>
        )}

        {/* Game Instructions */}
        {!gameStarted && (
          <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
            <div className="mb-6">
              <img 
                src="/Dudu-giving-flower-to-bubu.gif" 
                alt="Instructions" 
                className="w-40 h-40 mx-auto rounded-2xl floating-flower"
              />
            </div>
            <h3 className="text-2xl font-dancing text-purple-600 mb-4">
              How to Play 🎮
            </h3>
            <div className="space-y-3 text-lg font-dancing text-gray-700">
              <p>💕 Click cards to flip them over</p>
              <p>🎯 Match pairs of identical emojis</p>
              <p>🌟 Complete all pairs to win!</p>
              <p>✨ Try to win with fewest moves possible!</p>
            </div>
          </div>
        )}

        {/* Game Board */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
          <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
            {cards.map((card) => (
              <button
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                disabled={card.isMatched}
                className={`
                  aspect-square rounded-2xl text-4xl font-bold transition-all duration-300 transform
                  ${card.isFlipped || card.isMatched
                    ? 'bg-white shadow-lg scale-105 cursor-default'
                    : 'bg-gradient-to-br from-pink-400 to-purple-500 hover:from-pink-300 hover:to-purple-400 shadow-md hover:scale-110 cursor-pointer'
                  }
                  ${card.isMatched ? 'opacity-75 ring-4 ring-green-300' : ''}
                `}
              >
                {card.isFlipped || card.isMatched ? card.emoji : '?'}
              </button>
            ))}
          </div>

          {/* Restart Button */}
          {gameStarted && !gameWon && (
            <div className="mt-8">
              <button 
                onClick={restartGame}
                className="nav-button text-lg px-8 py-3"
              >
                🔄 Restart Game
              </button>
            </div>
          )}
        </div>

        {/* Encouraging Messages */}
        {gameStarted && !gameWon && (
          <div className="bg-pink-100/30 backdrop-blur-md rounded-2xl p-6 shadow-lg">
            <p className="text-xl font-dancing text-pink-700">
              {moves === 0 && "Click your first card to start!  "}
              {moves > 0 && moves <= 5 && "Great start! Keep going! 💪✨"}
              {moves > 5 && moves <= 10 && "You're doing amazing! 🌟💕"}
              {moves > 10 && moves <= 15 && "So close! Almost there! 🎯🔥"}
              {moves > 15 && "You're incredibly persistent! I love that! 🥰💖"}
            </p>
          </div>
        )}

        {/* Floating decorations */}
        <div className="flex justify-center space-x-8 text-4xl">
          <span className="floating-flower">🎮</span>
          <span className="floating-flower animation-delay-300">💕</span>
          <span className="floating-flower animation-delay-600">✨</span>
          <span className="floating-flower animation-delay-900">🌸</span>
          <span className="floating-flower animation-delay-1200">🎯</span>
        </div>
      </div>
    </div>
  )
}

export default MemoryGame