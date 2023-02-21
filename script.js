const container = document.querySelector("#container");
const slider = document.getElementById("myRange");
const output = document.getElementById("size")

let side = 16;
draw(side);

output.textContent = slider.value;

slider.oninput = function () {
    output.textContent = this.value;
    side = this.value;
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    draw(side);
}

function draw(side) {
    const totalSize = side * side;

    for (let i = 0; i < totalSize; i++) {
        const box = document.createElement('div');
        container.setAttribute('style', `grid-template-columns: repeat(${side}, 1fr); grid-template-rows: repeat(${side}, 1fr)`)
        box.classList.add('grid');
        container.appendChild(box);
        box.addEventListener('mouseover', () =>
            box.style.backgroundColor = 'blue')
    }
}
