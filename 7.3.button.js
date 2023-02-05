class Button {
  constructor(height, width, type, color) {
    this.height = height;
    this.width = width;
    this.type = type;
    this.color = color;
    this.props = `${this.height}, ${this.width}, ${this.type}, ${this.color}`;
  }
  onClick() {
    return this.props;
  }
}
let firstButton = new Button(10, 5, "button", "green");
console.log(`First button properties are ${firstButton.onClick()}`);

function testButton(height, width, type, color) {
  if (
    (firstButton.height === 10) &
    (firstButton.width === 5) &
    (firstButton.type === "button") &
    (firstButton.color === "green")
  ) {
    console.log(`This button is valid`);
  } else {
    console.log(`The properties of this button are invalid`);
  }
}

testButton();
