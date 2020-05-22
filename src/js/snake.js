import Food from './food.js';

import { stateMapping, isPathSafe, isPresent, eatFood } from './util.js';

class Snake {


    constructor(ini_length, size_of_snake, color, board) {
        this.canvas = document.getElementById('board');
        this.ctx = this.canvas.getContext('2d');
        this.cells = [];
        this.size_of_snake = size_of_snake;
        this.food = new Food(size_of_snake, board);
        this.food.drawFood()
        this.color = color;
        this.board = board;

        this.popX = 0;
        this.popY = 0;

        this.state = 'ArrowRight';
        this.eaten = false;

        //Making up of the initial Snake
        for (let i = 1; i <= ini_length; i++) {
            this.cells.unshift({
                x: i,
                y: 0
            });
            this.ctx.fillRect(i * size_of_snake, 0, size_of_snake - 2, size_of_snake - 2);
        }
    }

    updateSanke(callback) {
        if (isPathSafe(this.cells, this.state, this.board, this.size_of_snake)) {
            let ele;

            if (eatFood(this.cells, this.state, this.food, this.board, this.size_of_snake)) {
                //update Score
                const element = document.getElementById('score');
                element.innerText = parseInt(element.innerText) + 1;
                while (true) {
                    this.food = new Food(this.size_of_snake, this.board);
                    if (isPresent(this.cells, this.food)) {
                        continue;
                    }
                    else {
                        break;
                    }
                }
                this.eaten = !this.eaten;
                ele = this.cells[this.cells.length - 1];
            }
            else {
                ele = this.cells.pop();
            }
            this.popX = ele.x * this.size_of_snake;
            this.popY = ele.y * this.size_of_snake;
            this.cells.unshift(stateMapping(this.cells[0], this.state, this.board, this.size_of_snake));
        }
        else {
            callback();
        }
    }

    drawSnake() {
        this.ctx.fillStyle = this.color;
        if (!this.eaten) {
            this.ctx.clearRect(this.popX, this.popY, this.size_of_snake, this.size_of_snake);
        }
        else {
            this.eaten = !this.eaten;

        }
        this.cells.forEach((val) => {
            this.ctx.fillRect(val.x * this.size_of_snake, val.y * this.size_of_snake, this.size_of_snake - 2, this.size_of_snake - 2);
        });
        this.food.drawFood();
    }


}



export default Snake;