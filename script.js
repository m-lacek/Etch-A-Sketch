const container = document.querySelector('#container');
const resize = document.querySelector('button');
let side = 16;
draw(side);
resize.addEventListener('click', () => {
    side = parseInt(prompt("How many squares per side would you like? (Limit 100)"));
    if (side > 100) {
        alert("Max length is 100. Please enter a number less than or equal to 100.");
    }
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    draw(side);
})

function draw(side) {
    const totalSize = side * side;
    let boxWidth = (550 / side) - 1.6;

    for (let i = 0; i < totalSize; i++) {
        const box = document.createElement('div');
        box.style.width = boxWidth + "px";
        box.style.height = boxWidth + "px";
        box.classList.add('grid');
        container.appendChild(box);
        box.addEventListener('mouseover', () =>
            box.style.backgroundColor = 'blue')
    }
}
