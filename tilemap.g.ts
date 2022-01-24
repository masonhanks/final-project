// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002070707070707070707070707070703080f09090909090d090909090909090508090d090909090909090909090d090508090909090d0909090d090909090905080909090909090909090909090909050809090909090909090909090909090508090d0909090909090909090d09090508090909090d09060606060609090905080909090909050c0b0e0c0c01090905080909060606040c0c0e0b0a0c0809050809050a0b0c0b0c0a0e0c0c0c0809050809050c0c0f0e0e0e0e0c0c0b0809050809050a0c0b0c0c0b0e0a0c0c080905080909070707030c0c0e0c0b02090d0f080f0d0909090907070707070909090501060606060606060606060606060604`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . 2 . . . . . . . . 
. . 2 . . . . . . . . . . 2 . . 
. . . . . 2 . . . 2 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . 2 . . . 
. . . . . 2 . . . . . . . . . . 
. . . . . . . 2 2 . 2 2 . . . . 
. . . . . . . 2 2 . 2 2 2 . . . 
. . . 2 2 2 2 2 2 . 2 2 2 . . . 
. . . 2 2 . . . . . 2 2 2 . . . 
. . . 2 2 2 2 2 2 . 2 2 2 . . . 
. . . . . . . 2 2 . 2 2 . . 2 . 
. . 2 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath7,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath8,sprites.castle.tilePath2,sprites.castle.tilePath4,sprites.castle.tilePath5,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass3,sprites.builtin.forestTiles0,sprites.dungeon.stairLadder,sprites.dungeon.chestClosed], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`0d000d000401050105010501050105010c020608060a060606090606071003060807060907060a0709060d0206060a0806060608060a07100306070606060706070609060d020a08060706080a06090608100306090a080a0608090806070d0206080706080607060a060a10030a06090609060a060609080d0209060706080606090806071003060806080a06070a060a110d020a080708060a0711080611100b0e0e0e0e0e0e0e0e0e0e0e0f`, img`
. . . . . . . . . . . . . 
. . . . . . . . . . . . . 
. . . . . . . . . . . . . 
. . . . . . . . . . . . . 
. . . . . . . . . . . . . 
. . . . . . . . . . . . . 
. . . . . . . . . . . . . 
. . . . . . . . . . . . . 
. . . . . . . . . . . . . 
. . . . . . . . . . . . . 
. . . . . . . . . . . . . 
. . . . . . . . . . . . . 
. . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterWest2,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark0,sprites.dungeon.floorDark1,sprites.dungeon.floorDark2,sprites.dungeon.floorDark3,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterEast2,sprites.dungeon.floorDark4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
