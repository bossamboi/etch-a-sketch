container = document.querySelector('.container');


let pixelNumber = 256;
populateGrid(pixelNumber);
addInk();

function populateGrid(number) {
    for (i = 1; i <= number; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel-class');

    const sqrtNumber = 800 / (number ** (1/2))
    pixel.style.width = `${sqrtNumber}px`;
    pixel.style.height = `${sqrtNumber}px`;

    container.appendChild(pixel);
}
}

function clearGrid(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


function addInk() {
    const pixels = document.querySelectorAll('.pixel-class');
    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', () => {
            pixel.classList.add('pixel-hover-bw');
        })
    })
}




const resetButton = document.querySelector('button');

resetButton.addEventListener('click', () => {
    clearGrid(container);
    let newLength = prompt('How many squares per side? [16-100]', 16)
    if (parseInt(newLength, 10) < 16 || parseInt(newLength, 10) > 100) {
        alert('Can you read?! Try again dummy...');
        newLength = prompt('How many squares per side? [16-100]', 16)
    } 
    
    pixelNumber = parseInt(newLength, 10) ** 2;
    populateGrid(pixelNumber);
    addInk();
})