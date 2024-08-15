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
        if (isEqual(b1) || isEqual(b2) || isEqual(b3)) {
            alert("4 in a row side!")
        }
    }
}