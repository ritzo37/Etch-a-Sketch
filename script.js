const container = document.querySelector('.container');
function createGrids() {
    let gridSize;
    gridSize = +(prompt("Please Enter The Grid Size!"));
    while (true) {
        if (gridSize > 100 || gridSize == 0) {
            gridSize = +(prompt("Please Enter Values between 1 and 100"))
        }
        else {
            break;
        }
    }
    for (let i = 0; i < gridSize; i++) {
        const outerDiv = document.createElement('div');
        for (let j = 0; j < gridSize; j++) {
            const innerDiv = document.createElement('div');
            innerDiv.style.flex = "1";
            innerDiv.style.height = "50px";
            innerDiv.classList.toggle("clickme")
            outerDiv.appendChild(innerDiv);
        }
        outerDiv.style.flex = "1";
        outerDiv.style.display = "flex";
        outerDiv.style.flexDirection = "column";

        outerDiv.classList.add('outerdiv');

        container.appendChild(outerDiv);
    }
}

function getRandomRGB() {
    return (Math.floor(Math.random()*1000))%255; 
}

function addHoverEffect() {
    const grids = document.querySelectorAll('.clickme');
    grids.forEach((gridItem) => {
        gridItem.addEventListener('mouseenter', (e) => {
            let red = getRandomRGB() ; 
            let green = getRandomRGB(); 
            let blue = getRandomRGB() ;
            e.target.style.backgroundColor=`rgb(${red},${green},${blue})`;

        })
    })
}

createGrids();
addHoverEffect();

const changeBtn = document.querySelector('.Change');
changeBtn.addEventListener('click', () => {
    const grids = document.querySelectorAll('.outerdiv');
    grids.forEach((gridItem) => {
        container.removeChild(gridItem);
    })
    createGrids();
    addHoverEffect();
});

const resetBtn = document.querySelector('.Reset');
resetBtn.addEventListener('click', (e) => {
    const grids = document.querySelectorAll('.clickme');
    grids.forEach((gridItem) => {
        gridItem.style.backgroundColor = "black";
    })
})
