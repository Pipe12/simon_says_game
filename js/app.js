

const BTN_GREEN = document.getElementById('keypad__button--green')
const BTN_RED = document.getElementById('keypad__button--red')
const BTN_YELLOW = document.getElementById('keypad__button--yellow')
const BTN_BLUE = document.getElementById('keypad__button--blue')
const START_BTN = document.getElementById('start-btn')

START_BTN.addEventListener('click', startGame)

class Game {
  constructor() {
    console.log('New Game')
  }
}

function startGame() {
  let newGame = new Game
}

