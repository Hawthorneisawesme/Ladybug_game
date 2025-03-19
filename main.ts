controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.destroy(my_enemy)
    info.setScore(10)
})
let my_enemy: Sprite = null
let mySprite = sprites.create(img`
    . . . . f f f f f f f . . . . . 
    . . . f f f f f f f f f f . . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f f f f f f f f . . 
    . f 2 2 2 f 2 2 2 2 2 2 2 f . . 
    . f 2 f 2 2 2 2 f 2 f 2 2 f . . 
    . f 2 2 2 2 2 2 2 2 f 2 2 f . . 
    . f 2 2 2 f 2 2 2 2 2 2 2 f . . 
    . f 2 2 2 2 2 2 f 2 f 2 2 f . . 
    f f 2 2 f 2 2 2 2 2 f 2 2 f . . 
    f 2 2 2 2 2 2 f 2 2 2 f 2 f . . 
    f 2 2 2 2 2 2 2 f 2 2 2 2 f . . 
    f 2 f 2 2 f 2 2 2 2 2 2 2 f . . 
    f f 2 2 2 2 2 2 2 2 f 2 f f . . 
    . f f 2 2 2 2 2 2 2 2 f f . . . 
    . . f f f f f f f f f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
my_enemy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
mySprite.setStayInScreen(true)
scene.setBackgroundImage(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 3 
    . . . . . . . . . . . . . . 3 . 
    . . . . . . . . . . . . . 3 . . 
    . . . . . . . . . . 3 . . 3 . . 
    . . . . . . . . . . 3 . 3 . . . 
    . . . . . . . . . 3 . 3 . . . . 
    . . . . . . . . . 3 3 . . . . . 
    . . . . . . . . . 3 . . . . . . 
    . . . . . . . . 3 3 . . . . . . 
    . . . . . . . 3 3 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
mySprite.startEffect(effects.halo)
