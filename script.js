const container = document.querySelector("#container");
const slider = document.getElementById("myRange");
const output = document.getElementById("size");
const gridButton = document.querySelector("#grid");
let previousGridSetting = "OFF";
const clearButton = document.querySelector("#clear");
const eraseSwitch = document.querySelector("input[type='checkbox']");

let side = 16;
draw(side);

output.textContent = `${slider.value} x ${slider.value}`;

slider.oninput = function () {
    slider.addEventListener('mouseup', function () {
        output.textContent = `${this.value} x ${this.value}`;
        side = this.value;
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        draw(side)
    });
}

function draw(side) {
    const totalSize = side * side;

    for (let i = 0; i < totalSize; i++) {
        const box = document.createElement('div');
        container.setAttribute('style', `grid-template-columns: repeat(${side}, 1fr); grid-template-rows: repeat(${side}, 1fr)`)
        box.classList.add('grid');
        container.appendChild(box);
    }
    if (previousGridSetting === "ON") {
        toggleGrid()
    }
    color();
}

function color() {
    const boxes = document.querySelectorAll(".grid");
    const colorButtons = document.querySelectorAll(".colorButton")
    let boxColor = "blue";

    eraseSwitch.addEventListener("change", function () {
        if (eraseSwitch.checked) {
            boxColor = "white";
        }
    });

    colorButtons.forEach(colorButton => {
        colorButton.addEventListener("click", () => {
            if (colorButton.id == "random") {
                let r = Math.floor((Math.random() * 256) + 1);
                let g = Math.floor((Math.random() * 256) + 1);
                let b = Math.floor((Math.random() * 256) + 1);
                boxColor = `rgb(${r}, ${g}, ${b})`;
            }

            else {
                boxColor = colorButton.id;
            }
        })
    })

    boxes.forEach(box => {
        box.addEventListener("mouseover", () => box.style.backgroundColor = boxColor);
    });

}

gridButton.addEventListener("click", () => toggleGrid());

function toggleGrid() {
    const gridBox = document.getElementsByClassName("grid");
    if (gridBox[0].style.border == "") {
        for (let i = 0; i < gridBox.length; i++) {
            gridBox[i].style.border = "1px solid grey";
        }
        previousGridSetting = "ON";
    }
    else {
        for (let i = 0; i < gridBox.length; i++) {
            gridBox[i].style.border = "";
        }
        previousGridSetting = "OFF";
    }
}

clearButton.addEventListener("click", () => {
    const gridBox = document.getElementsByClassName("grid");
    for (let i = 0; i < gridBox.length; i++) {
        gridBox[i].style.backgroundColor = "white";
    }
})
