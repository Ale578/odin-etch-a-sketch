let canvas = document.querySelector("#container");
let size = 16;

let choseSize = document.querySelector("#changeSize");

// Change the size of the canvas
choseSize.addEventListener("click", () => {
    do {
        size = Math.floor(prompt("Number of squares per side: "));
    } while (size > 100); 

    // Remove previous canvas
    let oldCanvas = document.querySelectorAll(".row");
    oldCanvas.forEach((row) => {
        row.remove()
    });

    // Create new canvas
    let canvas = document.createElement("div");
    canvas.id = "container";
    generateCanvas();
});

function generateCanvas () {
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
    
        for (let j = 0; j < size; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
            }
        canvas.appendChild(row);  
    }
    choseSize.parentNode.insertBefore(canvas, choseSize.nextSibling)
}

// Change square color when mouse hovers over square
canvas.addEventListener("mouseover", (event) => {
    let target = event.target;

    target.style.backgroundColor = "pink";
});

// generate canvas when the page is opened
generateCanvas();