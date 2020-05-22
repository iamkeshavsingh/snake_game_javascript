import random from './random';
import apple from '../img/apple-icon-4017545_1280.png';

class Food {

    constructor(size_of_snake, board) {

        this.image = new Image();
        this.size_of_snake = size_of_snake;
        this.board = board;
        this.image.src = apple;
        this.x = random(Math.round((this.board.width / this.size_of_snake)) - 1);
        this.y = random(Math.round((this.board.height / this.size_of_snake)) - 1);
    }

    drawFood() {
        const canvas = document.getElementById('board');
        const ctx = canvas.getContext('2d');
        this.image.onload = () => {
            ctx.drawImage(this.image, this.x * this.size_of_snake, this.y * this.size_of_snake, this.size_of_snake, this.size_of_snake);
        };
    }

}


export default Food;