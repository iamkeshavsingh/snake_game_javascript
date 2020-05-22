class Board {

    constructor(width, height) {

        const canvas = document.getElementById('board');
        canvas.width = width;
        canvas.height = height;
    }
}

export default Board;