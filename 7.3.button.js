class Button {
  constructor(height, width, type, color) {
    this.height = height;
    this.width = width;
    this.type = type;
    this.color = color;
    this.props = `height: ${this.height}, width: ${this.width}, type: ${this.type}, color: ${this.color}`;
  }
  onClick() {
    console.log(`Button properties are: ${this.props}`);
  }
}

let firstButton = new Button(10, 5, "button", "green");
let secondButton = new Button(12, 7, "submit", "yellow")

firstButton.onClick();
secondButton.onClick();

function testButton(height, width, type, color) {
  if (
    (this.height === testButton.height) &&
    (this.width === testButton.width) &&
    (this.type === testButton.type) &&
    (this.color === testButton.color)
  ) {
    console.log(`This button is valid`);
  } else {
    console.log(`The properties of this button are invalid`);
  }
}

testButton(firstButton);
testButton(secondButton)
