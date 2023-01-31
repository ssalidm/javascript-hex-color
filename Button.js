class Button {
  colors = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  initColor = '#B62B2A';
  colorPalette = false;
  timer = null;

  // 1. describe and create/initiate the object
  constructor() {
    this.button = document.getElementById('btn');
    this.palette = document.getElementById('palette');
    this.container = document.querySelector('.container');
    this.currentColor = document.getElementById('current-color');

    this.events();

    this.currentColor.value = this.initColor;
    this.container.style.backgroundColor = this.initColor;
    // this.generateRandomHexColor();
    console.log('ColorPalette:', this.colorPalette);
  }

  // Events
  events() {
    this.button.addEventListener('mousedown', () => this.mousePress());
    this.button.addEventListener('mouseup', () => this.mouseRelease());
    this.palette.addEventListener('click', () => this.randomColorPalette());
  }

  // Methods
  mousePress() {
    this.button.classList.add('clicked');
    this.button.classList.remove('button-shadow');
  }

  mouseRelease() {
    this.button.classList.remove('clicked');
    this.button.classList.add('button-shadow');
    this.stopRandomColorPalette();
    this.generateRandomHexColor();
  }

  randomColorPalette() {
    if (!this.colorPalette) {
      this.displayRandomColorPalette();
    } else {
      this.stopRandomColorPalette();
    }
  }

  displayRandomColorPalette() {
    if (!this.colorPalette) {
      this.timer = setInterval(() => {
        this.generateRandomHexColor();
      }, 400);
    }
    this.colorPalette = true;
    console.log('ColorPalette:', this.colorPalette);
  }

  stopRandomColorPalette() {
    if (this.colorPalette) clearInterval(this.timer);
    this.colorPalette = false;
    console.log('ColorPalette:', this.colorPalette);
  }

  generateRandomHexColor() {
    let randomColor = '#';

    for (let i = 0; i < 6; i++) {
      let randomNumber = Math.floor(Math.random() * this.colors.length);
      randomColor += this.colors[randomNumber];
    }

    this.container.style.backgroundColor = randomColor;
    this.currentColor.value = randomColor;
  }
}

const button = new Button();
