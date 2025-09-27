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
        <div className="space-y-6">
          <h1 className="birthday-title leading-tight">
            Happy Birthday! 🎂
          </h1>
          
          <div className="bg-white/25 backdrop-blur-md rounded-2xl p-6 shadow-lg">
            <p className="text-xl font-dancing text-pink-600 mb-2">
              To the most amazing person in my universe! 🌟
            </p>
            <p className="text-lg font-dancing text-purple-700">
              Another year of being absolutely wonderful! 💫✨
            </p>
          </div>
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
          <div className="space-y-3 px-4 lg:px-16">
            
            {/* Main greeting */}
            <p className="text-3xl font-dancing text-center text-pink-700 mb-4">
              My Dearest Love, today is your special day! 🎉💕
            </p>
            
            <p className="text-2xl font-dancing text-center text-purple-700">
              Every moment with you feels like a celebration, but today... today is extra magical! ✨
            </p>
            
            <p className="text-2xl font-dancing text-center text-pink-700">
              From the way you laugh at my silly jokes to how you make ordinary moments feel extraordinary... 🌟
            </p>
            
            <p className="text-2xl font-dancing text-center text-purple-700">
              You have this incredible way of making everyone around you feel special and loved! 💫
            </p>
            
            {/* Love quotes section */}
            <div className="bg-pink-100/40 rounded-2xl p-6 my-4">
              <p className="text-2xl font-dancing text-center text-rose-700 mb-2">
                🌸 You are my sunshine on cloudy days 🌸
              </p>
              <p className="text-2xl font-dancing text-center text-purple-600 mb-2">
                💖 My favorite hello and hardest goodbye 💖
              </p>
              <p className="text-2xl font-dancing text-center text-pink-600">
                ✨ The reason my heart smiles every single day ✨
              </p>
            </div>
            
            {/* Personal message */}
            <p className="text-2xl font-dancing text-center text-gray-800">
              You bring so much joy, laughter, and love into my life. Your smile lights up my world!  🌟
            </p>
            
            <p className="text-2xl font-dancing text-center text-purple-700">
              I love how you make everything better just by being you... 💕
            </p>
            
            <p className="text-2xl font-dancing text-center text-pink-700">
              Your kindness, your laugh, your cute little habits... everything about you is perfect! 
            </p>
            
            <p className="text-2xl font-dancing text-center text-rose-700">
              The way you scrunch your nose when you're thinking, how you get excited about little things... 
            </p>
            
            <p className="text-2xl font-dancing text-center text-purple-700">
              How you always know exactly what to say to make me feel better... You're my safe place! 💕
            </p>
            
            <p className="text-2xl font-dancing text-center text-pink-700">
              Every single day with you is a gift, but today we get to celebrate YOU! 🎁✨
            </p>
            
            {/* Birthday wishes section */}
            <div className="bg-gradient-to-r from-pink-200/50 to-purple-200/50 rounded-2xl p-6 my-4">
              <p className="text-2xl font-dancing text-center text-purple-800 mb-3">
                🎂 Birthday Wishes for You 🎂
              </p>
              <div className="space-y-1">
                <p className="text-xl font-dancing text-center text-gray-800">🌟 May this year bring you endless happiness</p>
                <p className="text-xl font-dancing text-center text-gray-800">💝 May all your dreams come true</p>
                <p className="text-xl font-dancing text-center text-gray-800">🌸 May you always feel as loved as you are</p>
                <p className="text-xl font-dancing text-center text-gray-800">✨ May we create a million more memories together</p>
                <p className="text-xl font-dancing text-center text-gray-800">🦋 May you always stay as wonderful as you are today</p>
                <p className="text-xl font-dancing text-center text-gray-800">💖 May every moment bring you closer to your dreams</p>
                <p className="text-xl font-dancing text-center text-gray-800">🌺 May you continue to inspire everyone around you</p>
              </div>
            </div>
            
            {/* Closing message */}
            <p className="text-2xl font-dancing text-center text-rose-700">
              I created this little website just for you because you deserve something as special as you are! 🎮💕
            </p>
            
            <p className="text-2xl font-dancing text-center text-pink-700">
              I wanted to create something that would make you laugh, smile, and feel all the love I have for you! 
            </p>
            
            <p className="text-2xl font-dancing text-center text-purple-700">
              You mean the absolute world to me, and I hope this brings you as much joy as you bring me! 🌍💖</p>
            <p className="text-2xl font-dancing text-center text-purple-700">
              Now... are you ready for a cute surprise? I made a fun little game for us!  ✨
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
        <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-xl">
          <div className="mb-4">
            <img 
              src="/Dudu-pleading.gif" 
              alt="Pleading Milk" 
              className="w-32 h-32 mx-auto rounded-2xl floating-flower"
            />
          </div>
          
          <p className="text-2xl font-dancing text-center text-purple-700 mb-3">
            Ready for your special birthday surprise? 🎁✨
          </p>
          
          <p className="text-xl font-dancing text-center text-gray-800 mb-6">
            I promise it's going to be fun and silly! Just the way you like it! 💕
          </p>
          
          <button 
            onClick={goToGameQuestion}
            className="nav-button text-lg px-10 py-3"
          >
            Yes, I'm ready! 🎮💖
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