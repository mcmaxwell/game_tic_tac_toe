
import React, { PropTypes, Component } from 'react';
import Content from './content';

class ContentContainer extends Component {
  constructor() {
    super();
    this.state = {
      o: false,
      x: false,
      value: 0
    };
    this.ticTacToe = this.ticTacToe.bind(this);
    this.gameRestart = this.gameRestart.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.ticTacToe);
    window.addEventListener('change', this.gameRestart);
    this.gameRestart();
  }
  componentWillUnmount() {
    window.removeEventListener('click', this.ticTacToe);
    window.removeEventListener('change', this.gameRestart);
  }

  gameRestart() {
    const field = document.querySelector('#field');
    const gameGrid = document.querySelector('.game-grid');

    gameGrid.innerHTML = '';

    document.querySelector('.win-show').className = "win-show";
    document.querySelector('.inform-block').innerHTML = 'Start <div class="game-col x"></div>';

    this.state = {
      o: false,
      x: false
    };

    let valueField = field.options[field.selectedIndex].value;
    this.state.value = Number(valueField);
    gameGrid.style.width = (25*valueField) + 'px';
    for(var i = 0; i < valueField*valueField; i++){
      gameGrid.innerHTML += '<div class="game-col"></div>'
    }
  }
  ticTacToe(e) {
    const gameBox = document.querySelectorAll('.game-col');
    if (e.target.id === "restart"){
      this.gameRestart();
    }
    if (e.target.className === "game-col"){
      const informBlock = document.querySelector('.inform-block');
      informBlock.innerHTML = this.state.x? 'Next <div class="game-col x"></div>': 'Next <div class="game-col o"></div>';
      if(this.state.x !== true) {
        e.target.className = "game-col x";
        this.state.x = true;
        this.state.o = false;

      } else {
        e.target.className = "game-col o";
        this.state.o = true;
        this.state.x = false;
      }
    }
    const win = (name) => {
      const winShowBlock = document.querySelector('.win-show');
      winShowBlock.className = "win-show active";
      winShowBlock.innerHTML = 'Win ' + name;
      setTimeout(() => {
        winShowBlock.className = "win-show";
        this.gameRestart();
      }, 5000);
    };
    for (var i = 0; i < gameBox.length; i++) {

      if (gameBox[i] === e.target){
        if (e.target.classList.contains('o')) {
          if (gameBox[i - 1] && gameBox[i - 1].classList.contains('o')){
            if (gameBox[i - 2] && gameBox[i - 2].classList.contains('o')){
              if (gameBox[i - 3] && gameBox[i - 3].classList.contains('o')){
                if (gameBox[i - 4] && gameBox[i - 4].classList.contains('o')){
                  win(e.target.classList.contains('o')? 'O': 'X');
                }
                if (gameBox[i + 1] && gameBox[i + 1].classList.contains('o')) {
                  win(e.target.classList.contains('o')? 'O': 'X');
                }
              }
              if (gameBox[i + 1] && gameBox[i + 1].classList.contains('o') && gameBox[i + 2] && gameBox[i + 2].classList.contains('o')) {
                win(e.target.classList.contains('o')? 'O': 'X');
              }
            }
            if (gameBox[i + 1] && gameBox[i + 1].classList.contains('o') && gameBox[i + 2] && gameBox[i + 2].classList.contains('o') && gameBox[i + 3] && gameBox[i + 3].classList.contains('o')){
              win(e.target.classList.contains('o')? 'O': 'X');
            }
          }

          if (gameBox[i - this.state.value] && gameBox[i - this.state.value].classList.contains('o')){
            if (gameBox[i - this.state.value*2] && gameBox[i - this.state.value*2].classList.contains('o')){
              if (gameBox[i - this.state.value*3] && gameBox[i - this.state.value*3].classList.contains('o')){
                if (gameBox[i - this.state.value*4] && gameBox[i - this.state.value*4].classList.contains('o')){
                  win(e.target.classList.contains('o')? 'O': 'X');
                }
                if (gameBox[i + this.state.value] && gameBox[i + this.state.value].classList.contains('o')) {
                  win(e.target.classList.contains('o')? 'O': 'X');
                }
              }
              if (gameBox[i + this.state.value] && gameBox[i + this.state.value].classList.contains('o') && gameBox[i + this.state.value*2] && gameBox[i + this.state.value*2].classList.contains('o')) {
                win(e.target.classList.contains('o')? 'O': 'X');
              }
            }
            if (gameBox[i + this.state.value] && gameBox[i + this.state.value].classList.contains('o') && gameBox[i + this.state.value*2] && gameBox[i + this.state.value*2].classList.contains('o') && gameBox[i + this.state.value*3] && gameBox[i + this.state.value*3].classList.contains('o')){
              win(e.target.classList.contains('o')? 'O': 'X');
            }
          }
          if (gameBox[i - this.state.value+1] && gameBox[i - this.state.value+1].classList.contains('o')){
            if (gameBox[i - this.state.value*2+2] && gameBox[i - this.state.value*2+2].classList.contains('o')){
              if (gameBox[i - this.state.value*3+3] && gameBox[i - this.state.value*3+3].classList.contains('o')){
                if (gameBox[i - this.state.value*4+4] && gameBox[i - this.state.value*4+4].classList.contains('o')){
                  win(e.target.classList.contains('o')? 'O': 'X');
                }
                if (gameBox[i + this.state.value+1] && gameBox[i + this.state.value+1].classList.contains('o')) {
                  win(e.target.classList.contains('o')? 'O': 'X');
                }
              }
              if (gameBox[i + this.state.value+1] && gameBox[i + this.state.value+1].classList.contains('o') && gameBox[i + this.state.value*2+2] && gameBox[i + this.state.value*2+2].classList.contains('o')) {
                win(e.target.classList.contains('o')? 'O': 'X');
              }
            }
            if (gameBox[i + this.state.value+1] && gameBox[i + this.state.value+1].classList.contains('o') && gameBox[i + this.state.value*2+2] && gameBox[i + this.state.value*2+2].classList.contains('o') && gameBox[i + this.state.value*3+3] && gameBox[i + this.state.value*3+3].classList.contains('o')){
              win(e.target.classList.contains('o')? 'O': 'X');
            }
          }
          if (gameBox[i - this.state.value-1] && gameBox[i - this.state.value-1].classList.contains('o')){
            if (gameBox[i - this.state.value*2-2] && gameBox[i - this.state.value*2-2].classList.contains('o')){
              if (gameBox[i - this.state.value*3-3] && gameBox[i - this.state.value*3-3].classList.contains('o')){
                if (gameBox[i - this.state.value*4-4] && gameBox[i - this.state.value*4-4].classList.contains('o')){
                  win(e.target.classList.contains('o')? 'O': 'X');
                }
                if (gameBox[i + this.state.value-1] && gameBox[i + this.state.value-1].classList.contains('o')) {
                  win(e.target.classList.contains('o')? 'O': 'X');
                }
              }
              if (gameBox[i + this.state.value-1] && gameBox[i + this.state.value-1].classList.contains('o') && gameBox[i + this.state.value*2-2] && gameBox[i + this.state.value*2-2].classList.contains('o')) {
                win(e.target.classList.contains('o')? 'O': 'X');
              }
            }
            if (gameBox[i + this.state.value-1] && gameBox[i + this.state.value-1].classList.contains('o') && gameBox[i + this.state.value*2-2] && gameBox[i + this.state.value*2-2].classList.contains('o') && gameBox[i + this.state.value*3-3] && gameBox[i + this.state.value*3-3].classList.contains('o')){
              win(e.target.classList.contains('o')? 'O': 'X');
            }
          }
          if (gameBox[i + 1] && gameBox[i + 1].classList.contains('o')){
            if (gameBox[i + 2] && gameBox[i + 2].classList.contains('o')){
              if (gameBox[i + 3] && gameBox[i + 3].classList.contains('o')){
                if (gameBox[i + 4] && gameBox[i + 4].classList.contains('o')){
                  win(e.target.classList.contains('o')? 'O': 'X');
                }
                if (gameBox[i - 1] && gameBox[i - 1].classList.contains('o')) {
                  win(e.target.classList.contains('o')? 'O': 'X');
                }
              }
              if (gameBox[i - 1] && gameBox[i - 1].classList.contains('o') && gameBox[i - 2] && gameBox[i - 2].classList.contains('o')) {
                win(e.target.classList.contains('o')? 'O': 'X');
              }
            }
            if (gameBox[i - 1] && gameBox[i - 1].classList.contains('o') && gameBox[i - 2] && gameBox[i - 2].classList.contains('o') && gameBox[i - 3] && gameBox[i - 3].classList.contains('o')){
              win(e.target.classList.contains('o')? 'O': 'X');
            }
          }
          if (gameBox[i + this.state.value] && gameBox[i + this.state.value].classList.contains('o')){
            console.log(1);
            if (gameBox[i + this.state.value*2] && gameBox[i + this.state.value*2].classList.contains('o')){
              if (gameBox[i + this.state.value*3] && gameBox[i + this.state.value*3].classList.contains('o')){
                if (gameBox[i + this.state.value*4] && gameBox[i + this.state.value*4].classList.contains('o')){
                  win(e.target.classList.contains('o')? 'O': 'X');
                }
                if (gameBox[i - this.state.value] && gameBox[i - this.state.value].classList.contains('o')) {
                  win(e.target.classList.contains('o')? 'O': 'X');
                }
              }
              if (gameBox[i - this.state.value] && gameBox[i - this.state.value].classList.contains('o') && gameBox[i - this.state.value*2] && gameBox[i - this.state.value*2].classList.contains('o')) {
                win(e.target.classList.contains('o')? 'O': 'X');
              }
            }
            if (gameBox[i - this.state.value] && gameBox[i - this.state.value].classList.contains('o') && gameBox[i - this.state.value*2] && gameBox[i - this.state.value*2].classList.contains('o') && gameBox[i - this.state.value*3] && gameBox[i - this.state.value*3].classList.contains('o')){
              win(e.target.classList.contains('o')? 'O': 'X');
            }
          }
          if (gameBox[i + this.state.value+1] && gameBox[i + this.state.value+1].classList.contains('o')){
            if (gameBox[i + this.state.value*2+2] && gameBox[i + this.state.value*2+2].classList.contains('o')){
              if (gameBox[i + this.state.value*3+3] && gameBox[i + this.state.value*3+3].classList.contains('o')){
                if (gameBox[i + this.state.value*4+4] && gameBox[i + this.state.value*4+4].classList.contains('o')){
                  win(e.target.classList.contains('o')? 'O': 'X');
                }
                if (gameBox[i - this.state.value+1] && gameBox[i - this.state.value+1].classList.contains('o')) {
                  win(e.target.classList.contains('o')? 'O': 'X');
                }
              }
              if (gameBox[i - this.state.value+1] && gameBox[i - this.state.value+1].classList.contains('o') && gameBox[i - this.state.value*2+2] && gameBox[i - this.state.value*2+2].classList.contains('o')) {
                win(e.target.classList.contains('o')? 'O': 'X');
              }
            }
            if (gameBox[i - this.state.value+1] && gameBox[i - this.state.value+1].classList.contains('o') && gameBox[i - this.state.value*2+2] && gameBox[i - this.state.value*2+2].classList.contains('o') && gameBox[i - this.state.value*3+3] && gameBox[i - this.state.value*3+3].classList.contains('o')){
              win(e.target.classList.contains('o')? 'O': 'X');
            }
          }
          if (gameBox[i + this.state.value-1] && gameBox[i + this.state.value-1].classList.contains('o')){
            if (gameBox[i + this.state.value*2-2] && gameBox[i + this.state.value*2-2].classList.contains('o')){
              if (gameBox[i + this.state.value*3-3] && gameBox[i + this.state.value*3-3].classList.contains('o')){
                if (gameBox[i + this.state.value*4-4] && gameBox[i + this.state.value*4-4].classList.contains('o')){
                  win(e.target.classList.contains('o')? 'O': 'X');
                }
                if (gameBox[i - this.state.value-1] && gameBox[i - this.state.value-1].classList.contains('o')) {
                  win(e.target.classList.contains('o')? 'O': 'X');
                }
              }
              if (gameBox[i - this.state.value-1] && gameBox[i - this.state.value-1].classList.contains('o') && gameBox[i - this.state.value*2-2] && gameBox[i - this.state.value*2-2].classList.contains('o')) {
                win(e.target.classList.contains('o')? 'O': 'X');
              }
            }
            if (gameBox[i - this.state.value-1] && gameBox[i - this.state.value-1].classList.contains('o') && gameBox[i - this.state.value*2-2] && gameBox[i - this.state.value*2-2].classList.contains('o') && gameBox[i - this.state.value*3-3] && gameBox[i - this.state.value*3-3].classList.contains('o')){
              win(e.target.classList.contains('o')? 'O': 'X');
            }
          }
        }
        if (e.target.classList.contains('x')) {
          if (gameBox[i - 1] && gameBox[i - 1].classList.contains('x')){
            if (gameBox[i - 2] && gameBox[i - 2].classList.contains('x')){
              if (gameBox[i - 3] && gameBox[i - 3].classList.contains('x')){
                if (gameBox[i - 4] && gameBox[i - 4].classList.contains('x')){
                  win(e.target.classList.contains('o')? 'O': 'X');
                }
                if (gameBox[i + 1] && gameBox[i + 1].classList.contains('x')) {
                  win(e.target.classList.contains('o')? 'O': 'X');
                }
              }
              if (gameBox[i + 1] && gameBox[i + 1].classList.contains('x') && gameBox[i + 2] && gameBox[i + 2].classList.contains('x')) {
                win(e.target.classList.contains('o')? 'O': 'X');
              }
            }
            if (gameBox[i + 1] && gameBox[i + 1].classList.contains('x') && gameBox[i + 2] && gameBox[i + 2].classList.contains('x') && gameBox[i + 3] && gameBox[i + 3].classList.contains('x')){
              win(e.target.classList.contains('o')? 'O': 'X');
            }
          }
          if (gameBox[i - this.state.value] && gameBox[i - this.state.value].classList.contains('x')){
            if (gameBox[i - this.state.value*2] && gameBox[i - this.state.value*2].classList.contains('x')){
              if (gameBox[i - this.state.value*3] && gameBox[i - this.state.value*3].classList.contains('x')){
                if (gameBox[i - this.state.value*4] && gameBox[i - this.state.value*4].classList.contains('x')){
                  win(e.target.classList.contains('o')? 'O': 'X');
                }
                if (gameBox[i + this.state.value] && gameBox[i + this.state.value].classList.contains('x')) {
                  win(e.target.classList.contains('o')? 'O': 'X');
                }
              }
              if (gameBox[i + this.state.value] && gameBox[i + this.state.value].classList.contains('x') && gameBox[i + this.state.value*2] && gameBox[i + this.state.value*2].classList.contains('x')) {
                win(e.target.classList.contains('o')? 'O': 'X');
              }
            }
            if (gameBox[i + this.state.value] && gameBox[i + this.state.value].classList.contains('x') && gameBox[i + this.state.value*2] && gameBox[i + this.state.value*2].classList.contains('x') && gameBox[i + this.state.value*3] && gameBox[i + this.state.value*3].classList.contains('x')){
              win(e.target.classList.contains('o')? 'O': 'X');
            }
          }
          if (gameBox[i - this.state.value-1] && gameBox[i - this.state.value-1].classList.contains('x')){
            if (gameBox[i - this.state.value*2-2] && gameBox[i - this.state.value*2-2].classList.contains('x')){
              if (gameBox[i - this.state.value*3-3] && gameBox[i - this.state.value*3-3].classList.contains('x')){
                if (gameBox[i - this.state.value*4-4] && gameBox[i - this.state.value*4-4].classList.contains('x')){
                  win(e.target.classList.contains('o')? 'O': 'X');
                }
                if (gameBox[i + this.state.value-1] && gameBox[i + this.state.value-1].classList.contains('x')) {
                  win(e.target.classList.contains('o')? 'O': 'X');
                }
              }
              if (gameBox[i + this.state.value-1] && gameBox[i + this.state.value-1].classList.contains('x') && gameBox[i + this.state.value*2-2] && gameBox[i + this.state.value*2-2].classList.contains('x')) {
                win(e.target.classList.contains('o')? 'O': 'X');
              }
            }
            if (gameBox[i + this.state.value-1] && gameBox[i + this.state.value-1].classList.contains('x') && gameBox[i + this.state.value*2-2] && gameBox[i + this.state.value*2-2].classList.contains('x') && gameBox[i + this.state.value*3-3] && gameBox[i + this.state.value*3-3].classList.contains('x')){
              win(e.target.classList.contains('o')? 'O': 'X');
            }
          }
          if (gameBox[i + 1] && gameBox[i + 1].classList.contains('x')){
            if (gameBox[i + 2] && gameBox[i + 2].classList.contains('x')){
              if (gameBox[i + 3] && gameBox[i + 3].classList.contains('x')){
                if (gameBox[i + 4] && gameBox[i + 4].classList.contains('x')){
                  win(e.target.classList.contains('o')? 'O': 'X');
                }
                if (gameBox[i - 1] && gameBox[i - 1].classList.contains('x')) {
                  win(e.target.classList.contains('o')? 'O': 'X');
                }
              }
              if (gameBox[i - 1] && gameBox[i - 1].classList.contains('x') && gameBox[i - 2] && gameBox[i - 2].classList.contains('x')) {
                win(e.target.classList.contains('o')? 'O': 'X');
              }
            }
            if (gameBox[i - 1] && gameBox[i - 1].classList.contains('x') && gameBox[i - 2] && gameBox[i - 2].classList.contains('x') && gameBox[i - 3] && gameBox[i - 3].classList.contains('x')){
              win(e.target.classList.contains('o')? 'O': 'X');
            }
          }
          if (gameBox[i + this.state.value+1] && gameBox[i + this.state.value+1].classList.contains('x')){
            if (gameBox[i + this.state.value*2+2] && gameBox[i + this.state.value*2+2].classList.contains('x')){
              if (gameBox[i + this.state.value*3+3] && gameBox[i + this.state.value*3+3].classList.contains('x')){
                if (gameBox[i + this.state.value*4+4] && gameBox[i + this.state.value*4+4].classList.contains('x')){
                  win(e.target.classList.contains('o')? 'O': 'X');
                }
                if (gameBox[i - this.state.value+1] && gameBox[i - this.state.value+1].classList.contains('x')) {
                  win(e.target.classList.contains('o')? 'O': 'X');
                }
              }
              if (gameBox[i - this.state.value+1] && gameBox[i - this.state.value+1].classList.contains('x') && gameBox[i - this.state.value*2+2] && gameBox[i - this.state.value*2+2].classList.contains('x')) {
                win(e.target.classList.contains('o')? 'O': 'X');
              }
            }
            if (gameBox[i - this.state.value+1] && gameBox[i - this.state.value+1].classList.contains('x') && gameBox[i - this.state.value*2+2] && gameBox[i - this.state.value*2+2].classList.contains('x') && gameBox[i - this.state.value*3+3] && gameBox[i - this.state.value*3+3].classList.contains('x')){
              win(e.target.classList.contains('o')? 'O': 'X');
            }
          }
          if (gameBox[i - this.state.value+1] && gameBox[i - this.state.value+1].classList.contains('x')){
            if (gameBox[i - this.state.value*2+2] && gameBox[i - this.state.value*2+2].classList.contains('x')){
              if (gameBox[i - this.state.value*3+3] && gameBox[i - this.state.value*3+3].classList.contains('x')){
                if (gameBox[i - this.state.value*4+4] && gameBox[i - this.state.value*4+4].classList.contains('x')){
                  win(e.target.classList.contains('o')? 'O': 'X');
                }
                if (gameBox[i + this.state.value+1] && gameBox[i + this.state.value+1].classList.contains('x')) {
                  win(e.target.classList.contains('o')? 'O': 'X');
                }
              }
              if (gameBox[i + this.state.value+1] && gameBox[i + this.state.value+1].classList.contains('x') && gameBox[i + this.state.value*2+2] && gameBox[i + this.state.value*2+2].classList.contains('x')) {
                win(e.target.classList.contains('o')? 'O': 'X');
              }
            }
            if (gameBox[i + this.state.value+1] && gameBox[i + this.state.value+1].classList.contains('x') && gameBox[i + this.state.value*2+2] && gameBox[i + this.state.value*2+2].classList.contains('x') && gameBox[i + this.state.value*3+3] && gameBox[i + this.state.value*3+3].classList.contains('x')){
              win(e.target.classList.contains('o')? 'O': 'X');
            }
          }
          if (gameBox[i + this.state.value] && gameBox[i + this.state.value].classList.contains('x')){
            if (gameBox[i + this.state.value*2] && gameBox[i + this.state.value*2].classList.contains('x')){
              if (gameBox[i + this.state.value*3] && gameBox[i + this.state.value*3].classList.contains('x')){
                if (gameBox[i + this.state.value*4] && gameBox[i + this.state.value*4].classList.contains('x')){
                  win(e.target.classList.contains('o')? 'O': 'X');
                }
                if (gameBox[i - this.state.value] && gameBox[i - this.state.value].classList.contains('x')) {
                  win(e.target.classList.contains('o')? 'O': 'X');
                }
              }
              if (gameBox[i - this.state.value] && gameBox[i - this.state.value].classList.contains('x') && gameBox[i - this.state.value*2] && gameBox[i - this.state.value*2].classList.contains('x')) {
                win(e.target.classList.contains('o')? 'O': 'X');
              }
            }
            if (gameBox[i - this.state.value] && gameBox[i - this.state.value].classList.contains('x') && gameBox[i - this.state.value*2] && gameBox[i - this.state.value*2].classList.contains('x') && gameBox[i - this.state.value*3] && gameBox[i - this.state.value*3].classList.contains('x')){
              win(e.target.classList.contains('o')? 'O': 'X');
            }
          }
          if (gameBox[i + this.state.value-1] && gameBox[i + this.state.value-1].classList.contains('x')){
            if (gameBox[i + this.state.value*2-2] && gameBox[i + this.state.value*2-2].classList.contains('x')){
              if (gameBox[i + this.state.value*3-3] && gameBox[i + this.state.value*3-3].classList.contains('x')){
                if (gameBox[i + this.state.value*4-4] && gameBox[i + this.state.value*4-4].classList.contains('x')){
                  win(e.target.classList.contains('o')? 'O': 'X');
                }
                if (gameBox[i - this.state.value-1] && gameBox[i - this.state.value-1].classList.contains('x')) {
                  win(e.target.classList.contains('o')? 'O': 'X');
                }
              }
              if (gameBox[i - this.state.value-1] && gameBox[i - this.state.value-1].classList.contains('x') && gameBox[i - this.state.value*2-2] && gameBox[i - this.state.value*2-2].classList.contains('x')) {
                win(e.target.classList.contains('o')? 'O': 'X');
              }
            }
            if (gameBox[i - this.state.value-1] && gameBox[i - this.state.value-1].classList.contains('x') && gameBox[i - this.state.value*2-2] && gameBox[i - this.state.value*2-2].classList.contains('x') && gameBox[i - this.state.value*3-3] && gameBox[i - this.state.value*3-3].classList.contains('x')){
              win(e.target.classList.contains('o')? 'O': 'X');
            }
          }
        }
      }
    }
  }

  render() {
    return (
      <Content />
    );

  }
}


export default ContentContainer;
