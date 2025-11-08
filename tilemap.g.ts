// Автоматически генерируемый код. Не редактируйте.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "уровень1":
            case "уровень1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010000000000000000000000000001010100000000000000000000000000010101000000000000000000000000000101010000000000000000000000000001030100000000000000000000000000010301000000000000000000000000000103010000000000000000000000000001030100000000000000000000000000010101000000000000000000000000000101010000000000000000000000000001010400000000000000000000000000010104000000000000000000000000000101040000000000000000000000000001010400000000000000000000000000010101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . 2 2 
2 . . . . . . . . . . . . . 2 2 
2 . . . . . . . . . . . . . 2 2 
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . 2 2 
2 . . . . . . . . . . . . . 2 2 
2 . . . . . . . . . . . . . 2 2 
. . . . . . . . . . . . . . 2 2 
. . . . . . . . . . . . . . 2 2 
. . . . . . . . . . . . . . 2 2 
. . . . . . . . . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
        }
        return null;
    })

}
// Автоматически генерируемый код. Не редактируйте.
