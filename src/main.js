let config = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  scene: [Menu, Play]
}

let game = new Phaser.Game(config) // Sets up the new phaser game.

let keyFIRE, keyRESET, keyLEFT, keyRIGHT // Reserved keyboard bindings.

// Sets the UI size
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3