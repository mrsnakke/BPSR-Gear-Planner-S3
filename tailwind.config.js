module.exports = {
  content: ["./**/*.{html,js}", "!./node_modules/**/*"],
  theme: {
    extend: {
      colors: {
        gameOrange: '#f97316',
        gameGold: '#eab308',
        gamePurple: '#a855f7',
      },
      boxShadow: {
        'gold-glow': '0 0 15px rgba(234, 179, 8, 0.4)',
        'orange-glow': '0 0 15px rgba(249, 115, 22, 0.4)',
      }
    }
  }
}
