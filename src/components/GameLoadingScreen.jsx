import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const GameLoadingScreen = ({ onLoadingComplete }) => {
  const [loadingText, setLoadingText] = useState("Loading your special game...")
  const [isComplete, setIsComplete] = useState(false)

  const loadingMessages = [
    "Loading your special game...",
    "Preparing cute surprises...",
    "Setting up the fun...",
    "Almost ready to play...",
    "Let the games begin!"
  ]

  useEffect(() => {
    let messageIndex = 0
    const messageInterval = setInterval(() => {
      messageIndex = (messageIndex + 1) % loadingMessages.length
      setLoadingText(loadingMessages[messageIndex])
    }, 2000)

    // Simulate minimum loading time for smooth experience
    const timer = setTimeout(() => {
      setIsComplete(true)
      setTimeout(() => {
        onLoadingComplete()
      }, 1000)
    }, 8000)

    return () => {
      clearInterval(messageInterval)
      clearTimeout(timer)
    }
  }, [onLoadingComplete])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 bg-gradient-to-br from-purple-400 via-pink-300 to-blue-300 flex items-center justify-center z-50"
      >
        {/* Game-themed Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating game elements */}
          <div className="game-elements">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`floating-game-element element-${i + 1}`}
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${10 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>

          {/* Animated gradient orbs */}
          <div className="game-orbs">
            <div className="game-orb orb-1" />
            <div className="game-orb orb-2" />
            <div className="game-orb orb-3" />
          </div>
        </div>

        {/* Main Loading Content */}
        <div className="relative z-10 text-center px-8">
          {/* Game Logo/Title */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.6 }}
            className="mb-8"
          >
            <div className="text-8xl mb-4">🎮</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg font-serif">
              Special Day
            </h1>
            <h2 className="text-5xl md:text-6xl font-bold text-purple-100 drop-shadow-lg font-serif mt-2">
              Game Time!
            </h2>
          </motion.div>

          {/* Loading Message */}
          <motion.div
            key={loadingText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl text-white text-opacity-90 mb-8 font-light"
          >
            {loadingText}
          </motion.div>

          {/* Animated Loading Dots */}
          <div className="flex justify-center space-x-2 mb-8">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
                className="w-4 h-4 bg-white bg-opacity-70 rounded-full"
              />
            ))}
          </div>

          {/* Game Controller Ring */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-32 h-32 border-4 border-white border-opacity-50 rounded-full mx-auto mb-8 flex items-center justify-center"
          >
            <div className="spinning-controller">🎯</div>
          </motion.div>

          {/* Completion Message */}
          <AnimatePresence>
            {isComplete && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="text-2xl text-white font-semibold"
              >
                Ready to play! 🚀
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Game-themed CSS styles */}
        <style jsx>{`
          .game-elements {
            position: absolute;
            width: 100%;
            height: 100%;
          }

          .floating-game-element {
            position: absolute;
            width: 25px;
            height: 25px;
            background: linear-gradient(45deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.2));
            animation: float-up linear infinite;
          }

          .element-1 { 
            border-radius: 0; 
            transform: rotate(45deg); 
            background: linear-gradient(45deg, rgba(138, 43, 226, 0.4), rgba(138, 43, 226, 0.2));
          }
          .element-2 { 
            border-radius: 50%; 
            background: linear-gradient(45deg, rgba(255, 20, 147, 0.4), rgba(255, 20, 147, 0.2));
          }
          .element-3 { 
            width: 20px; 
            height: 20px; 
            border-radius: 0;
            transform: rotate(45deg);
            background: linear-gradient(45deg, rgba(0, 191, 255, 0.4), rgba(0, 191, 255, 0.2));
          }
          .element-4 { 
            width: 30px; 
            height: 30px; 
            border-radius: 50%;
            background: linear-gradient(45deg, rgba(255, 105, 180, 0.4), rgba(255, 105, 180, 0.2));
          }
          .element-5 { 
            width: 22px; 
            height: 22px; 
            border-radius: 0;
            background: linear-gradient(45deg, rgba(148, 0, 211, 0.4), rgba(148, 0, 211, 0.2));
          }
          .element-6 { 
            width: 18px; 
            height: 18px; 
            border-radius: 50%;
            background: linear-gradient(45deg, rgba(30, 144, 255, 0.4), rgba(30, 144, 255, 0.2));
          }

          @keyframes float-up {
            0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
          }

          .game-orbs {
            position: absolute;
            width: 100%;
            height: 100%;
          }

          .game-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(40px);
            animation: float-orb 8s ease-in-out infinite;
          }

          .orb-1 {
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, rgba(138, 43, 226, 0.3) 0%, transparent 70%);
            top: 20%;
            left: 10%;
            animation-delay: 0s;
          }

          .orb-2 {
            width: 150px;
            height: 150px;
            background: radial-gradient(circle, rgba(0, 191, 255, 0.3) 0%, transparent 70%);
            top: 60%;
            right: 15%;
            animation-delay: -3s;
          }

          .orb-3 {
            width: 180px;
            height: 180px;
            background: radial-gradient(circle, rgba(255, 20, 147, 0.2) 0%, transparent 70%);
            bottom: 30%;
            left: 60%;
            animation-delay: -6s;
          }

          @keyframes float-orb {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-20px) scale(1.1); }
          }

          .spinning-controller {
            animation: spin 3s linear infinite;
            font-size: 2rem;
          }

          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </motion.div>
    </AnimatePresence>
  )
}

export default GameLoadingScreen