//generate cells
for (var i = 0; i < (7); i++) {
    column = document.createElement("div");
    column.id = "col" + i;
    column.classList.add("column");

    column.addEventListener("click", (e) => {
        e.target.id.length < 4 ? colnum = e.target.parentElement.id[3] : colnum = e.target.id[3] //makes sure that even if you click on a cell
        //alert(e.target.id)
        if (board[0][colnum] == null) {
            var isnull = false
            var ctr = 5;
            while (!isnull) {
                if (board[ctr][colnum] == null) {
                    board[ctr][colnum] = "y";
                    document.getElementById(String(colnum) + ctr).style.backgroundColor = "#f7d100";
                    isnull = true;
                }
                ctr--;
            }

            console.log(board);

            checkWin();
            botMove();
            checkWin();
        } else {
            alert("this column is already full!")
        }
    })

    document.getElementById("board").appendChild(column);
    for (var j = 0; j < 6; j++) {
        cell = document.createElement("div");
        cell.classList.add("cell");
        cell.id = "" + i + j;
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

function botMove() {
    for (var i = 0; i < 6; i++) {
        if (board[0][i] == null) {
            //drop piece here
            var isnull = false
            var ctr = 5;
            while (!isnull) {
                if (board[ctr][i] == null) {
                    board[ctr][i] = "r";
                    document.getElementById(String(i) + ctr).style.backgroundColor = "#f70000";
                    isnull = true;
                }
                ctr--;
            }
            return;
        }
    }
    alert("no more room!")
}

function isEqual(s) {
    l = [...s];
    equal = true;
    for (i = 0; i < l.length - 1; i++) {
        if (!(l[i] == l[i + 1])) {
            equal = false;
            break;
        }
    }
    if (l[0] == "0") { equal = false }
    return equal;
}

function getString(s) {
    if (s == null) {
        return "0"
    } else if (s == "r") {
        return "2"
    } else if (s == "y") {
        return "1"
    }
}

function checkWin() {
    //check columns
    columns = []
    for (var i = 0; i < 7; i++) {
        var temp = ""
        for (var j = 0; j < 6; j++) {
            board[j][i] == null && (temp = temp + "0");
            board[j][i] == "r" && (temp = temp + "2");
            board[j][i] == "y" && (temp = temp + "1");
        }
        columns.push(temp)
    }

    for (var i = 0; i < columns.length; i++) {
        var b1 = columns[i].substring(0, 4);
        var b2 = columns[i].substring(1, 5);
        var b3 = columns[i].substring(2, 6);
        if (isEqual(b1) || isEqual(b2) || isEqual(b3)) {
            alert("4 in a row down!")
        }
    }


    //check rows
    rows = []
    for (var i = 0; i < 6; i++) {
        var temp = ""
        for (var j = 0; j < 7; j++) {
            board[i][j] == null && (temp = temp + "0");
            board[i][j] == "r" && (temp = temp + "2");
            board[i][j] == "y" && (temp = temp + "1");
        }
        rows.push(temp)
    }
    console.log(rows)

    for (var i = 0; i < rows.length; i++) {
        var b1 = rows[i].substring(0, 4);
        var b2 = rows[i].substring(1, 5);
        var b3 = rows[i].substring(2, 6);
        var b3 = rows[i].substring(3,);
        if (isEqual(b1) || isEqual(b2) || isEqual(b3)) {
            alert("4 in a row side!")
        }
    }


    //left right down diagonals
    var diagonals = []
    diagonals.push(getString(board[2][0]) + getString(board[3][1]) + getString(board[4][2]) + getString(board[5][3]));
    diagonals.push(getString(board[1][0]) + getString(board[2][1]) + getString(board[3][2]) + getString(board[4][3]) + getString(board[5][4]));
    diagonals.push(getString(board[0][0]) + getString(board[1][1]) + getString(board[2][2]) + getString(board[3][3]) + getString(board[4][4]) + getString(board[5][5]));
    diagonals.push(getString(board[0][1]) + getString(board[1][2]) + getString(board[2][3]) + getString(board[3][4]) + getString(board[4][5]) + getString(board[5][6]));
    diagonals.push(getString(board[0][2]) + getString(board[1][3]) + getString(board[2][4]) + getString(board[3][5]) + getString(board[4][6]));
    diagonals.push(getString(board[0][3]) + getString(board[1][4]) + getString(board[2][5]) + getString(board[3][6]));
    //console.log(diagonals);

    if (isEqual(diagonals[0]) || isEqual(diagonals[5]) || isEqual(diagonals[1].substring(0, 4)) || isEqual(diagonals[1].substring(1, 5))
        || isEqual(diagonals[4].substring(0, 4)) || isEqual(diagonals[4].substring(1, 5))
        || isEqual(diagonals[2].substring(0, 4)) || isEqual(diagonals[3].substring(1, 5)) || isEqual(diagonals[2].substring(2, 6))
        || isEqual(diagonals[3].substring(0, 4)) || isEqual(diagonals[4].substring(1, 5)) || isEqual(diagonals[3].substring(2, 6))) {
        alert("diagonal1");
    }


    //right left up diagonals
    diagonals = []
    diagonals.push(getString(board[3][0]) + getString(board[2][1]) + getString(board[1][2]) + getString(board[0][3]));
    diagonals.push(getString(board[4][0]) + getString(board[3][1]) + getString(board[2][2]) + getString(board[1][3]) + getString(board[0][4]));
    diagonals.push(getString(board[5][0]) + getString(board[4][1]) + getString(board[3][2]) + getString(board[2][3]) + getString(board[1][4]) + getString(board[0][5]));
    diagonals.push(getString(board[5][1]) + getString(board[4][2]) + getString(board[3][3]) + getString(board[2][4]) + getString(board[1][5]) + getString(board[0][6]));
    diagonals.push(getString(board[5][2]) + getString(board[4][3]) + getString(board[3][4]) + getString(board[2][5]) + getString(board[1][6]));
    diagonals.push(getString(board[5][3]) + getString(board[4][4]) + getString(board[3][5]) + getString(board[2][6]));
    //console.log(diagonals);

    if (isEqual(diagonals[0]) || isEqual(diagonals[5]) || isEqual(diagonals[1].substring(0, 4)) || isEqual(diagonals[1].substring(1, 5))
        || isEqual(diagonals[4].substring(0, 4)) || isEqual(diagonals[4].substring(1, 5))
        || isEqual(diagonals[2].substring(0, 4)) || isEqual(diagonals[3].substring(1, 5)) || isEqual(diagonals[2].substring(2, 6))
        || isEqual(diagonals[3].substring(0, 4)) || isEqual(diagonals[4].substring(1, 5)) || isEqual(diagonals[3].substring(2, 6))) {
        alert("diagonal1");
    }

}