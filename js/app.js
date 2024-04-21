const map = document.getElementById("map");

let tileMap = []
let tileData = []

generateMap = () => {
    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
            // tileMap.push([x, y])
            let tile = createTileElement(x, y)
            tileMap.push(tile)
        }
    }
}

createTileElement = (x, y) => {
    let tile = document.createElement("article")
    tile.classList.add("tile")
    tile.style.top = x * 3 + "rem";
    tile.style.left = y * 3 + "rem"
    return tile;
} 

generateMap();
console.log(tileMap);
for (let tile of tileMap) {
    map.append(tile);
}