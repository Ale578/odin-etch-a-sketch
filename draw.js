let container = document.querySelector("#container");
let size = 10;

let choseSize = document.querySelector("button");

choseSize.addEventListener("click", () => {
    size = Math.floor(prompt("Number of squares per side: "));

    document.getElementById("container").remove(); 

    let container = document.createElement("div");
    container.id = "container";

    // Generate canvas
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < size; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
            }
            container.appendChild(row);
    }
    choseSize.parentNode.insertBefore(container, choseSize.nextSibling);

    container.addEventListener("mouseover", (event) => {
        let target = event.target;
    
        target.style.backgroundColor = "pink";
    });
});

// Generate canvas
for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < size; j++) {
        let square = document.createElement("div");
        square.classList.add("square");
        row.appendChild(square);
        }
        container.appendChild(row);
}

// Change square color when mouse hovers over square
container.addEventListener("mouseover", (event) => {
    let target = event.target;

    target.style.backgroundColor = "pink";
});
