class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame)
        scene.add.existing(this) // Add to existing scene
        this.points = pointValue // Store pointValue
        this.moveSpeed = game.settings.spaceshipSpeed //Spaceship speed in pixels and frames
    }

    update() {
        // Move spaceship left
        this.x -= this.moveSpeed

        // Wrap from left to right edge
        if(this.x <= 0 - this.width) {
            this.x = game.config.width
        }
    }

    reset() {
        this.x = game.config.width
    }
}