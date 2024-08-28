controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += -16
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x += 16
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x += -16
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += 16
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . c c c c c 
    . . . . . . . . . c c c c c c c 
    . . . . . . . . c c c c c c c . 
    . . . . . . . . c c c c c . . . 
    . . . . . . . . c c c c c . . . 
    . . . . . . . . c c c c c c . . 
    . . . c c c c c c c c c c c c . 
    . . c c 7 7 7 7 c c c c c c c . 
    . c 7 7 7 7 7 7 7 7 c c c c c c 
    c c 7 7 7 7 7 7 7 7 c c c c c c 
    c 7 c 6 6 6 6 c 7 7 7 c c c c c 
    f 7 c c 6 6 c c 7 7 7 c c c c c 
    f 7 6 f 6 6 f 6 7 7 7 f c c c c 
    . f 7 7 7 7 7 7 7 7 c f c c c . 
    . c c c f f c c 7 c c c c c c . 
    . c c c c c c c c c c c c . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level2`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
