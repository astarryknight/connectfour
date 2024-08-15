//generate cells
for (var i = 0; i < (7); i++) {
    column = document.createElement("div");
    column.id = "col" + i;
    column.classList.add("column");
    document.getElementById("board").appendChild(column);
    for (var j = 0; j < 6; j++) {
        cell = document.createElement("div");
        cell.classList.add("cell");
        cell.id = i + j;
        document.getElementById(String(column.id)).appendChild(cell);
    }
}

board = []
turn = "Yellow"
document.getElementById("turn").textContent = turn;
document.getElementById("turn").style.color = "#f7d100";
//"#f70000"

//init board
for (var i = 0; i < 6; i++) {
    board.push([])
    for (var j = 0; j < 7; j++) {
        board[i].push(null);
    }
}