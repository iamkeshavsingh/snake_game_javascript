import Game from './src/js/game.js';
import './src/css/main.css';
// configuration of the game

const config = {
    board: {
        width: 1000,
        height: 500
    },
    snake: {
        init_block_in_snake: 4,
        size_of_block: 50,
        color_of_snake: 'blue',
        speed: 100
    }
};


const game = new Game(config.board, config.snake);
game.start();

