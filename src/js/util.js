export const stateMapping = ({ x, y }, currentState, board, size_of_snake) => {

    const xMax = Math.round(board.width / size_of_snake) - 1;
    if (x < 0) {
        x = xMax;
    }

    if (x > xMax) {
        x = -1;
    }

    const yMax = Math.round(board.height / size_of_snake) - 1;

    if (y < 0) {
        y = yMax;
    }

    if (y > yMax) {
        y = -1;
    }

    if (currentState == 'ArrowLeft') return {
        x: x - 1,
        y: y
    };

    if (currentState == 'ArrowRight') return {
        x: x + 1,
        y: y
    };


    if (currentState == 'ArrowUp') return {
        x: x,
        y: y - 1
    };


    if (currentState == 'ArrowDown') return {
        x: x,
        y: y + 1
    };


};

export const isPathSafe = (cells, state, board, size_of_snake) => {
    const headPointer = cells[0];
    const newState = stateMapping(headPointer, state, board, size_of_snake);

    const { x, y } = newState;
    const xMax = Math.round(board.width / size_of_snake);
    const yMax = Math.round(board.height / size_of_snake);
    // if (x < 0 || x >= xMax) return false;

    // if (y < 0 || y >= yMax) return false;

    // if the index is not present in the array
    for (let i = 0; i < cells.length; i++) {
        let obj = cells[i];
        if (obj.x == x && obj.y == y) return false;
    }

    return true;

}

export const isPresent = (cells, newCoords) => {
    for (let i = 0; i < cells.length; i++) {
        let obj = cells[i];
        if (obj.x == newCoords.x && obj.y == newCoords.y) {
            return true;
        }
    }

    return false;
}

export const eatFood = (cells, state, food, board, size_of_snake) => {
    const headPointer = cells[0];
    const { x, y } = stateMapping(headPointer, state, board, size_of_snake);
    if (x == food.x && y == food.y) {
        return true;
    }
    return false;
}