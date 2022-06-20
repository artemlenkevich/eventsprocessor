const square = document.querySelector('.square');
const description = document.querySelector('.description');

let matrix = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
]

let currentRow = 0;
let currentIndex = 0;
const path = [currentIndex]; //keeps an index for every row 

square.innerText = matrix[0][0];

function isLastPosition() {
    return matrix[currentRow].length - 1 === currentIndex;
} 

function isFirstPosition() {
    return currentIndex === 0;
}

function isLastRow() {
    return matrix.length - 1 === currentRow;
}

function isFirstRow() {
    return currentRow === 0;
}

function processor(event) {
    switch(event) {
        case 'right':
            if (!isLastPosition()) {
                currentIndex += 1;
                path.pop();
                path.push(currentIndex);
            }
            break;
        case 'left':
            if (!isFirstPosition()) {
                currentIndex -= 1;
                path.pop();
                path.push(currentIndex);
            }
            break;
        case 'down':
            if (!isLastRow()) {
                currentRow += 1;
                currentIndex = 0;
                path.push(currentIndex);
            }
            break;
        case 'up':
            if (!isFirstRow()) {
                currentRow -= 1;
                path.pop();
                currentIndex = path.at(-1);
            } 
            break;
    }

    const dataFromPath = path.map((index, row) => matrix[row][index]).join('.');
    square.innerText = dataFromPath;
    description.innerText = event;
}


const mockEvents = ['down', 'right', 'right', 'right', 'right', 'right', 'down', 'up', 'left', 'down', 'right', 'up', 'up'];

let timerId = setInterval(() => {
    if (!mockEvents.length) {
        clearInterval(timerId);
        return;
    }
    processor(mockEvents.shift());
}, 4000)






