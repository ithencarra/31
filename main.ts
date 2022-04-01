input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
let sprite: game.LedSprite = null
if (input.buttonIsPressed(Button.B)) {
    sprite.change(LedSpriteProperty.X, 1)
}
if (input.buttonIsPressed(Button.A)) {
    sprite = 0
    sprite.change(LedSpriteProperty.X, 1)
    sprite = 0
}
if (input.buttonIsPressed(Button.AB)) {
    sprite.change(LedSpriteProperty.X, 1)
}
basic.forever(function () {
	
})
