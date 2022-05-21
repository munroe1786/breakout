const grid = document.querySelector('.grid')
const blockWidth = 100
const blockHeight = 20

//create Block
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis,yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}

//all the blocks
const blocks = [
    new Block(10,270)
]
//draw all the blocks
function addBlocks() {
    for (let i = 0; i < blocks.length; i++) {
        const block = document.createElement('div')
        block.classList.add('block')
        block.style.left = '100px'
        block.style.bottom = '50px'
        grid.appendChild(block)
    }
}

addBlocks()