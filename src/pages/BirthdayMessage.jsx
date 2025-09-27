import React from 'react'
import { useNavigate } from 'react-router-dom'

const BirthdayMessage = () => {
  const navigate = useNavigate()

  const goToGameQuestion = () => {
    navigate('/game-question')
  }

  return (
    <div className="min-h-screen bg-gradient-dreamy page-container">
      <div className="text-center space-y-16 max-w-6xl mx-auto">
        
        {/* Birthday Title */}
        <div className="space-y-8">
          <h1 className="birthday-title leading-tight">
            Happy Birthday! 🎂
          </h1>
        </div>

        {/* Main birthday message with gifs around it */}
        <div className="relative bg-white/20 backdrop-blur-md rounded-3xl p-12 shadow-2xl">
          
          {/* Left side gifs */}
          <div className="absolute left-4 top-8 hidden lg:block">
            <img 
              src="/BubuDudu-CarryingBubu.gif" 
              alt="Carrying Bubu" 
              className="w-24 h-24 rounded-full floating-flower"
            />
          </div>
          
          <div className="absolute left-8 bottom-8 hidden lg:block">
            <img 
              src="/BubuDudu-Buburidingdudu.gif" 
              alt="Bubu riding Dudu" 
              className="w-28 h-28 rounded-full floating-flower animation-delay-1000"
            />
          </div>

          {/* Right side gifs */}
          <div className="absolute right-4 top-8 hidden lg:block">
            <img 
              src="/BubuDudu-CarryingDudu.gif" 
              alt="Carrying Dudu" 
              className="w-24 h-24 rounded-full floating-flower animation-delay-600"
            />
          </div>

          <div className="absolute right-8 bottom-8 hidden lg:block">
            <img 
              src="/BubuDudu-SleepingBubu.gif" 
              alt="Sleeping Bubu" 
              className="w-28 h-28 rounded-full floating-flower animation-delay-1500"
            />
          </div>

          {/* Mobile gifs - displayed horizontally */}
          <div className="flex justify-center space-x-4 mb-8 lg:hidden">
            <img 
              src="/BubuDudu-CarryingBubu.gif" 
              alt="Carrying Bubu" 
              className="w-20 h-20 rounded-full floating-flower"
            />
            <img 
              src="/BubuDudu-Buburidingdudu.gif" 
              alt="Bubu riding Dudu" 
              className="w-20 h-20 rounded-full floating-flower animation-delay-500"
            />
          </div>

          {/* Birthday message */}
          <div className="space-y-8 px-4 lg:px-16">
            <p className="game-paragraph text-center text-pink-700">
              Today is your special day, and I wanted to make it extra fun! 🎉
            </p>
            <p className="game-paragraph text-center text-purple-700">
              You deserve all the love, joy, and silly games in the world! 💕
            </p>
            <p className="game-paragraph text-center text-rose-700">
              So I prepared something cute and funny just for you... 😄✨
            </p>
          </div>

          {/* Mobile gifs bottom */}
          <div className="flex justify-center space-x-4 mt-8 lg:hidden">
            <img 
              src="/BubuDudu-CarryingDudu.gif" 
              alt="Carrying Dudu" 
              className="w-20 h-20 rounded-full floating-flower animation-delay-1000"
            />
            <img 
              src="/BubuDudu-SleepingBubu.gif" 
              alt="Sleeping Bubu" 
              className="w-20 h-20 rounded-full floating-flower animation-delay-1500"
            />
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 shadow-xl">
          <p className="game-paragraph text-center text-gray-800 mb-6">
            Do you want to go to the special part now? 🎮✨
          </p>
          <button 
            onClick={goToGameQuestion}
            className="nav-button"
          >
            Yes, let's go! 🚀
          </button>
        </div>

        {/* Floating decorations */}
        <div className="flex justify-center space-x-8 text-5xl">
          <span className="floating-flower">🎂</span>
          <span className="floating-flower animation-delay-300">🎊</span>
          <span className="floating-flower animation-delay-600">🌸</span>
          <span className="floating-flower animation-delay-900">💖</span>
          <span className="floating-flower animation-delay-1200">🎈</span>
        </div>
      </div>
    </div>
  )
}

export default BirthdayMessage