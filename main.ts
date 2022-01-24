namespace SpriteKind {
    export const Chest = SpriteKind.create()
    export const Bat = SpriteKind.create()
}
function buildlevel() {
    tiles.setTilemap(tilemap`level2`)
    let witch = sprites.create(img`
        ........ff......
        ......fffff.....
        ......fffff.....
        ......fffff.....
        .....fffffff....
        .....fffffffff..
        ..ffffffffffffff
        ..ffffffffffffff
        ....77777777777.
        ....777777777777
        ....777277727777
        ..3.77777777777.
        .33..777bbb7777.
        .333..77b7b777..
        .333..7777777...
        .333...fffff....
        ..3...fffffff...
        ..e...ffffffff..
        ..e...ffffffff..
        ..e..fffffffff..
        ..efffffffffff..
        ..efffffffffff..
        ..e..fffffffff..
        ..e..fffffffff..
        ..e..fffffffff..
        ..e..fffffffff..
        ..e..fffffffff..
        ..e...fffffff...
        ..e....ffffff...
        ..e...ffffffff..
        ..e...ffffffff..
        ..e...ffffffff..
        `, SpriteKind.Enemy)
    witch.setPosition(180, 100)
    spawnBat()

}

scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, otherSprite) {
    searchChest()
    tiles.setTileAt(tiles.getTileLocation(otherSprite.col, otherSprite.row), img`
                                . b b b b b b b b b b b b b b .
                                b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b
                                b e 4 4 4 4 4 4 4 4 4 4 4 4 e b
                                b e e 4 4 4 4 4 4 4 4 4 4 e e b
                                b b b b b b b d d b b b b b b b
                                . b b b b b b c c b b b b b b .
                                b c c c c c b c c b c c c c c b
                                b c c c c c c b b c c c c c c b
                                b c c c c c c c c c c c c c c b
                                b c c c c c c c c c c c c c c b
                                b b b b b b b b b b b b b b b b
                                b e e e e e e e e e e e e e e b
                                b e e e e e e e e e e e e e e b
                                b c e e e e e e e e e e e e c b
                                b b b b b b b b b b b b b b b b
                                . b b . . . . . . . . . . b b .
                        ` )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, Location) {
    buildlevel()
})
function searchChest() {
    if (randint(1, chestList.length * chestList.length) == 1) {
        
        tiles.setTileAt(tiles.getTileLocation(8, 0), img`
                        d d c c c c c c c c c c c c d d
                        d d c b b b b b b b b b b c d d
                        d d b d d d d d d d d d d b d d
                        d d c c c c c c c c c c c c d d
                        d d c b b b b b b b b b b c d d
                        d d b d d d d d d d d d d b d d
                        d d c c c c c c c c c c c c d d
                        d d c b b b b b b b b b b c d d
                        d d b d d d d d d d d d d b d d
                        d d c c c c c c c c c c c c d d
                        d d c b b b b b b b b b b c d d
                        d d b d d d d d d d d d d b d d
                        d d c c c c c c c c c c c c d d
                        d d c b b b b b b b b b b c d d
                        b b b d d d d d d d d d d b b b
                        c c c c c c c c c c c c c c c c
                    `)
        tiles.setTileAt(tiles.getTileLocation(9, 0), img`
                        d d c c c c c c c c c c c c d d
                        d d c b b b b b b b b b b c d d
                        d d b d d d d d d d d d d b d d
                        d d c c c c c c c c c c c c d d
                        d d c b b b b b b b b b b c d d
                        d d b d d d d d d d d d d b d d
                        d d c c c c c c c c c c c c d d
                        d d c b b b b b b b b b b c d d
                        d d b d d d d d d d d d d b d d
                        d d c c c c c c c c c c c c d d
                        d d c b b b b b b b b b b c d d
                        d d b d d d d d d d d d d b d d
                        d d c c c c c c c c c c c c d d
                        d d c b b b b b b b b b b c d d
                        b b b d d d d d d d d d d b b b
                        c c c c c c c c c c c c c c c c
                    `)
        dude.say("I found it", 500)
    } else {
        chestList.pop()
    }
}
let witch: Sprite = null
let chestList: tiles.Location[] = []
let dude: Sprite = null
game.splash("Search the chests for", "the key!")
tiles.setTilemap(tilemap`level1`)
dude = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . f f e e e e f 2 f . . . . 
    . . f f e e e e f 2 2 2 f . . . 
    . . f e e e f f e e e e f . . . 
    . . f f f f e e 2 2 2 2 e f . . 
    . . f e 2 2 2 f f f f e 2 f . . 
    . f f f f f f f e e e f f f . . 
    . f f e 4 4 e b f 4 4 e e f . . 
    . f e e 4 d 4 1 f d d e f . . . 
    . . f e e e e e d d d f . . . . 
    . . . . f 4 d d e 4 e f . . . . 
    . . . . f e d d e 2 2 f . . . . 
    . . . f f f e e f 5 5 f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . f f . . . f f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(dude)
scene.cameraFollowSprite(dude)
chestList = tiles.getTilesByType(sprites.dungeon.chestClosed)
function spawnBat() {
    game.onUpdateInterval(2000, function () {
        sprites.create(img`
    . . f f f . . . . . . . . f f f
    . f f c c . . . . . . f c b b c
    f f c c . . . . . . f c b b c .
    f c f c . . . . . . f b c c c .
    f f f c c . c c . f c b b c c .
    f f c 3 c c 3 c c f b c b b c .
    f f b 3 b c 3 b c f b c c b c .
    . c 1 b b b 1 b c b b c c c . .
    . c 1 b b b 1 b b c c c c . . .
    c b b b b b b b b b c c . . . .
    c b 1 f f 1 c b b b b f . . . .
    f f 1 f f 1 f b b b b f c . . .
    f f 2 2 2 2 f b b b b f c c . .
    . f 2 2 2 2 b b b b c f . . . .
    . . f b b b b b b c f . . . . .
    . . . f f f f f f f . . . . . .
`, SpriteKind.Bat)
        batList = sprites.allOfKind(SpriteKind.Bat)
    }
    )
}
let batList = sprites.allOfKind(SpriteKind.Bat)
sprites.onCreated(SpriteKind.Bat, function (bat) { bat.setPosition(180, 100) })
game.onUpdateInterval(200, function () {
    for (let bat of batList) {
        if (dude.x > bat.x) { bat.x += 2 } else { bat.x += -2 }

        if (dude.y > bat.y) { bat.y += 2 } else { bat.y += -2 }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bat, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.createProjectileFromSprite(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . 5 . . . .
    . . . . . . . . . . 5 2 5 . . .
    . . . . . . 2 2 2 2 2 4 2 5 . .
    . . . . . . . . 2 2 2 4 4 5 . .
    . . . . . . . . . . 2 4 5 4 . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, dude, 20, 0)
    pause(500)
})

sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Bat, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
})
sprites.onDestroyed(SpriteKind.Enemy, function () { game.over(true) })

