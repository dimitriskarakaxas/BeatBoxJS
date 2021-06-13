class Beat {
  constructor(audioSrc) {
    this.audio = new Audio(audioSrc);
    console.log(this.audio);
  }

  play() {
    this.audio.currentTime = 0;
    this.audio.play();
  }
}

class Button {
  constructor(color, keyCode) {
    this.element = document.getElementById(keyCode);
    this.color = color;
    this.setButtonColorInHTML();
    this.setTransitionEndListener();
  }

  setTransitionEndListener() {
    this.element.addEventListener("transitionend", () => {
      this.deselect();
    });
  }

  setButtonColorInHTML = () => {
    this.element.style.borderColor = this.color;
  };

  select = () => {
    this.element.style.background = this.color;
    this.element.style.boxShadow = `0px 0px 17px 0px ${this.color}`;
  };

  deselect = () => {
    this.element.style.background = "transparent";
    this.element.style.boxShadow = "none";
  };
}
