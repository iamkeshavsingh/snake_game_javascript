import Board from './board.js';
import Snake from './snake.js';

// file where state is managed 

class Game {

    constructor(board, snake) {
        this.board = new Board(board.width, board.height);
        this.snake = new Snake(snake.init_block_in_snake, snake.size_of_block, snake.color_of_snake, board);
        this.timer = "";
        this.speed = snake.speed;
        this.isPlaying = true;

        document.addEventListener('keydown', (e) => {
            this.snake.state = e.key;
        });
    }

    draw() {
        this.snake.drawSnake();


    }

    update() {

        this.snake.updateSanke(this.end);
    }

    start() {
        this.timer = setInterval(() => {
            this.update();
            this.draw();
        }, this.speed);
    }

    end = () => {
        clearInterval(this.timer);
        this.isPlaying = false;
        alert("Game is Over");
    }

}


export default Game;