import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const GameBackgroundMusic = ({ songsPreloaded = false, onMusicChoice, onSongsLoaded, isPreloadOnly = false, delayPrompt = 0 }) => {
  const audioRef = useRef(null)
  const preloadRefs = useRef([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [showMusicPrompt, setShowMusicPrompt] = useState(false) // Start as false
  const [volume, setVolume] = useState(0.6)
  const [allSongsLoaded, setAllSongsLoaded] = useState(false)

  // Game website playlist
  const playlist = [
    {
      name: "Renai Circulation",
      src: "/Music/Renai Circulation (English Cover) [Full Version].mp3"
    },
    {
      name: "Soda Pop", 
      src: "/Music/Soda Pop.mp3"
    },
    {
      name: "You Belong With Me",
      src: "/Music/You Belong With Me.mp3"
    }
  ]

  // Preload all songs
  useEffect(() => {
    if (songsPreloaded) {
      // Create audio elements for preloading
      preloadRefs.current = playlist.map((song, index) => {
        const audio = new Audio(song.src)
        audio.preload = 'auto'
        return audio
      })

      let loadedCount = 0
      
      const handleCanPlayThrough = () => {
        loadedCount++
        console.log(`Game Song ${loadedCount}/${playlist.length} loaded`)
        if (loadedCount === playlist.length) {
          setAllSongsLoaded(true)
          onSongsLoaded?.() // Notify parent that all songs are loaded
          console.log('All game songs preloaded!')
        }
      }

      // Add event listeners for all songs
      preloadRefs.current.forEach(audio => {
        audio.addEventListener('canplaythrough', handleCanPlayThrough)
        audio.load()
      })

      return () => {
        // Cleanup
        preloadRefs.current.forEach(audio => {
          audio.removeEventListener('canplaythrough', handleCanPlayThrough)
        })
      }
    }
  }, [songsPreloaded, onSongsLoaded])

  // Delay showing music prompt
  useEffect(() => {
    if (delayPrompt > 0) {
      const timer = setTimeout(() => {
        setShowMusicPrompt(true)
      }, delayPrompt)
      
      return () => clearTimeout(timer)
    } else {
      setShowMusicPrompt(true)
    }
  }, [delayPrompt])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  // Handle track changes and ensure proper playback
  useEffect(() => {
    if (audioRef.current) {
      // Load the new track
      audioRef.current.load()
      
      // If music should be playing, start the new track
      if (isPlaying) {
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error('Error playing new track:', error)
            setIsPlaying(false)
          })
        }
      }
    }
  }, [currentTrack])

  // If this is preload-only mode, don't render the UI
  if (isPreloadOnly) {
    return null
  }

  const startMusic = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play()
        setIsPlaying(true)
        setShowMusicPrompt(false)
        onMusicChoice?.()
      } catch (error) {
        console.error('Error playing audio:', error)
      }
    }
  }

  const toggleMusic = async () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        try {
          await audioRef.current.play()
          setIsPlaying(true)
        } catch (error) {
          console.error('Error playing audio:', error)
          setIsPlaying(false)
        }
      }
    }
  }

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % playlist.length)
    // Don't change isPlaying state here - let useEffect handle it
  }

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + playlist.length) % playlist.length)
    // Don't change isPlaying state here - let useEffect handle it
  }

  const handleTrackEnd = () => {
    // Auto-advance to next track
    const nextIndex = (currentTrack + 1) % playlist.length
    setCurrentTrack(nextIndex)
    // Keep playing automatically
  }

  return (
    <>
      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={playlist[currentTrack].src}
        onEnded={handleTrackEnd}
        loop={false}
      />

      {/* Game-themed Music Prompt Overlay */}
      <AnimatePresence>
        {showMusicPrompt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md mx-4"
            >
              <div className="text-6xl mb-4">🎮🎵</div>
              <h3 className="text-2xl font-bold mb-4 text-purple-600">
                Play Game Music?
              </h3>
              <p className="text-gray-600 mb-6">
                Would you like to play some fun music while we play this special game together?
              </p>
              <div className="space-y-3">
                <button
                  onClick={startMusic}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  🎶 Yes, Let's Rock!
                </button>
                <button
                  onClick={() => {
                    setShowMusicPrompt(false)
                    onMusicChoice?.()
                  }}
                  className="w-full bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition-all duration-300"
                >
                  Maybe Later
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Game-themed Music Controls */}
      <motion.div
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        className="fixed top-4 right-4 z-40"
      >
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border-2 border-purple-200">
          {/* Current Track Display */}
          <div className="text-center mb-3">
            <div className="text-xs text-gray-500">Now Playing</div>
            <div className="text-sm font-semibold text-purple-600 truncate max-w-48">
              {playlist[currentTrack].name}
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-center space-x-2 mb-3">
            <button
              onClick={prevTrack}
              className="p-2 bg-purple-100 hover:bg-purple-200 rounded-full transition-colors"
              title="Previous Track"
            >
              ⏮️
            </button>
            
            <button
              onClick={toggleMusic}
              className="p-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full transition-colors transform hover:scale-105"
              title={isPlaying ? "Pause Music" : "Play Music"}
            >
              {isPlaying ? '⏸️' : '▶️'}
            </button>
            
            <button
              onClick={nextTrack}
              className="p-2 bg-purple-100 hover:bg-purple-200 rounded-full transition-colors"
              title="Next Track"
            >
              ⏭️
            </button>
          </div>

          {/* Volume Control */}
          <div className="flex items-center space-x-2">
            <span className="text-xs">🔊</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="flex-1 h-1 bg-purple-200 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #8b5cf6 0%, #8b5cf6 ${volume * 100}%, #e9d5ff ${volume * 100}%, #e9d5ff 100%)`
              }}
            />
          </div>

          {/* Music Icon Indicator */}
          <div className="flex justify-center mt-2">
            <motion.div
              animate={{ 
                scale: isPlaying ? [1, 1.2, 1] : 1,
                rotate: isPlaying ? [0, 5, -5, 0] : 0
              }}
              transition={{ 
                duration: 1,
                repeat: isPlaying ? Infinity : 0,
                ease: "easeInOut"
              }}
              className="text-purple-500"
            >
              🎮
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default GameBackgroundMusic