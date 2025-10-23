
const container = document.querySelector("#container");
const grid = document.querySelector("#grid");


function createGrid(squares) {
    if(squares > 100 || squares <= 0) {
        console.log("ERROR - NUMBER OF SQUARES");
        return;
    }

    let size = 800/squares;

    const fragment = document.createDocumentFragment();

    for(let i = 0; i < squares*squares; i++) {
        const square = document.createElement("div");
        square.classList.add('square');
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;
        fragment.appendChild(square);

    }

    grid.appendChild(fragment);
    
    

    grid.addEventListener("mouseover",(e) => {
        if(e.target.classList.contains("square")) {

            if (!e.target.dataset.color) {
                const [r, g, b] = getRandomRGB();
                e.target.dataset.color = `rgb(${r}, ${g}, ${b})`;
            }
            
            
            let currentOpacity = parseFloat(e.target.dataset.opacity) || 0;
            if(currentOpacity < 1) currentOpacity += 0.1;
            e.target.dataset.opacity = currentOpacity;
            e.target.style.background = e.target.dataset.color;
            e.target.style.opacity = currentOpacity;
        }
    });
}


function getRandomRGB() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return [red, green, blue];
}



createGrid(16);

function getInput() {
    let input = prompt("Choose the number of squares per side (should be <= 100)");
    if(input == null) {
        return null;
    }
    if(input > 100 || input <= 0) {
        alert("That's impossible, choose other number");
        input = getInput();
    }
    return input;
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
    let input = getInput();
    if(input == null) return;
    grid.innerHTML="";
    createGrid(input);
});

