

const GREEN = document.getElementById('keypad__button--green')
const RED = document.getElementById('keypad__button--red')
const YELLOW = document.getElementById('keypad__button--yellow')
const BLUE = document.getElementById('keypad__button--blue')
const START_BTN = document.getElementById('start-btn')

START_BTN.addEventListener('click', startGame)

class Game {
  constructor() {
    console.log('New Game')
    this.initialize()
  }

  initialize() {
    this.toggleElement(START_BTN)
    this.currentLevel = 1
    this.colors = {
      GREEN,
      RED,
      YELLOW,
      BLUE
    }
  }
  
  //Recive a html element and then add the class .hide to this element.
  toggleElement(element) {
    if(element.classList.contains('hide')) {
      START_BTN.classList.remove('hide')
    } else {
      START_BTN.classList.add('hide')
    }
  }
}

function startGame() {
  window.newGame = new Game
}

