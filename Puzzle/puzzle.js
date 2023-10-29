class Square {
    column;
    htmlReference;
    row;
    value;

    constructor(column, htmlReference, row, value) {
        this.column = column;
        this.htmlReference = htmlReference;
        this.row = row;
        this.value = value;
    }
}

class Game {
    board;

    constructor() {
        this.board = [[], [], []];

        const htmlSquares = 
            document.getElementsByClassName("square")

        for(let i = 0; i < htmlSquares.length; i++) {
            const squareRef = htmlSquares[i];

            let row = Number(squareRef.getAttribute("row"));
            let column = Number(squareRef.getAttribute("column"));
            let value = Number(squareRef.getAttribute("value"));

            const square = new Square(column, squareRef, row, value);

            this.board[row].push(square)

            squareRef.addEventListener("click", 
                () => this.handleSquareClick(square.column, square.row)
            )
        }

        this.board[2].push(new Square(2, null, 2, null));
        this.randomize();
        this.updateView()
    }

    randomize() {
        for(let i=0;i<70;i++){
            let randomRow = Math.floor(Math.random()*(3));
            let randomColumn = Math.floor(Math.random()*(3));

            if (this.isAdjacentToEmpty(randomColumn, randomRow)) {
                this.moveBlock(randomColumn, randomRow);
            } else {
                i--;
            }
        }
    }

    isGameFinished() {
        for(let i = 0; i < this.board.length; i++) {
            for(let j = 0; j < this.board[i].length; j++) {
                const square = this.board[i][j];

                if (square.value == null) {
                    continue;
                }
                
                const squareHTML = square.htmlReference;

                let row = Number(squareHTML.getAttribute("row"));
                let column = Number(squareHTML.getAttribute("column"));

                if (square.row != row || square.column != column) {
                    return false;
                }
            }
        }

        return true;
    }

    updateView() {
        for(let i = 0; i < this.board.length; i++) {
            for(let j = 0; j < this.board[i].length; j++) {
                const square = this.board[i][j];

                if (square.value == null) {
                    continue;
                }

                const squareRef = square.htmlReference;

                squareRef.style.top = ((square.row) / 3) * 100 + "%";
                squareRef.style.left = ((square.column) / 3) * 100 + "%";

                let row = Number(squareRef.getAttribute("row"));
                let column = Number(squareRef.getAttribute("column"));

                if (row == square.row && column == square.column) {
                    squareRef.classList.add("well-placed");
                } else {
                    squareRef.classList.remove("well-placed");
                }
            }
        }

        if (this.isGameFinished()) {
            setTimeout(() => {
                alert("Fazueli"); 
                this.randomize();
                this.updateView();
            }, 500);
            
        }
    }

    handleSquareClick(column, row) {
        if (!this.isAdjacentToEmpty(column, row)) {
            return;
        }

        this.moveBlock(column, row);
        this.updateView();
    }

    moveBlock(column, row) {
        const emptySquare = this.getEmptySquare();

        let auxSquare = this.board[row][column];

        auxSquare.column = emptySquare.column;
        auxSquare.row = emptySquare.row;

        emptySquare.column = column;
        emptySquare.row = row;

        this.board[row][column] = emptySquare;
        this.board[auxSquare.row][auxSquare.column] = auxSquare;
    }

    isAdjacentToEmpty(column, row) {
        const emptySquare = this.getEmptySquare()

        if (row == emptySquare.row &&
            ((emptySquare.column - 1 == column) || emptySquare.column + 1 == column)) {
            return true;
        }

        if (column == emptySquare.column &&
            ((emptySquare.row - 1 == row) || emptySquare.row + 1 == row)) {
            return true;
        }

        return false;
    }

    getEmptySquare() {
        for(let i = 0; i < this.board.length; i++) {
            for(let j = 0; j < this.board[i].length; j++) {
                const square = this.board[i][j];

                if (square.value == null) {
                    return square;
                }
            }
        }

        return null;
    }
}

let game = new Game()