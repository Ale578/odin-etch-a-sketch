const container = document.querySelector("#container");

// Generate canvas
for (let i = 0; i < 4; i++) {
    let row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < 4; j++) {
        let square = document.createElement("div");
        square.classList.add("square");
        // set class to a position
        square.classList.add(i+"."+j);

        row.appendChild(square);
        }
        container.appendChild(row);
    }

// Change square color when mouse hovers over square
container.addEventListener("mouseover", (event) => {
    let target = event.target;

    target.style.backgroundColor = "pink";
});

