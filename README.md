# 🎮 Special Birthday Game Website for Jasmine

A cute and interactive birthday game website built with React, Vite, and lots of love! 💕

## 🌟 Features

- **Welcome Popup**: Greets with confetti animation and cute "Dudu giving flower" gif
- **Birthday Message Page**: Displays birthday wishes surrounded by adorable BubuDudu gifs
- **Interactive Game Question**: Features a playful Yes/No interaction where:
  - Clicking "Yes" shows a celebration popup with "Yassss Milk" gif
  - Hovering over "No" shows a pleading popup with "Pleading Dudu" gif
  - Clicking "No" makes the button run away from clicks (evasive behavior)

## 🎨 Design

- Matches the style and color scheme of the main birthday website
- Romantic gradient backgrounds (dreamy pastels, sunset colors)
- Dancing Script and Playfair Display fonts
- Floating animations and smooth transitions
- Responsive design for mobile and desktop

## 🚀 Development

### Prerequisites
- Node.js (latest version)
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   └── PageTransition.jsx
├── pages/
│   ├── Home.jsx              # Welcome page with confetti
│   ├── BirthdayMessage.jsx   # Birthday wishes with gifs
│   └── GameQuestion.jsx      # Interactive Yes/No game
├── App.jsx                   # Main app with routing
├── main.jsx                  # Entry point
└── index.css                 # Styles (Tailwind + custom)

public/
├── *.gif                     # All the cute BubuDudu gifs
└── index.html
```

## 🎯 Game Flow

1. **Landing Page**: Welcome popup with confetti and "Dudu giving flower" gif
2. **Birthday Page**: Happy birthday message with cute gifs floating around
3. **Game Question**: "Do you want to play the special game?"
   - Yes → Celebration popup → Ready to proceed to main game
   - No → Pleading popup + button runs away from clicks

## 🔧 Deployment

Configured for Vercel deployment with:
- `vercel.json` for SPA routing
- Optimized build configuration
- Asset optimization

## 💕 Next Steps

This is the introduction part of the game. The actual game mechanics will be implemented in the next phase!

## 🎨 Color Palette

- Pink gradients: `from-pink-600 via-rose-500 to-purple-600`
- Romantic background: `linear-gradient(135deg, #FFE4E6 0%, #FECDD3 50%, #F7CAC9 100%)`
- Dreamy background: `linear-gradient(135deg, #E9D5FF 0%, #DCFCE7 50%, #FEF3C7 100%)`
- Sunset background: `linear-gradient(135deg, #FFE4B5 0%, #FFCCCB 50%, #DDA0DD 100%)`