const container = document.querySelector('.container');

for (let i =0 ; i<100;i ++) {
    const outerDiv = document.createElement('div');
    for (let j =0 ; j<100; j++) {
        const innerDiv = document.createElement('div');
        innerDiv.style.flex =  "1";
        innerDiv.style.height = "50px";
        innerDiv.style.widows=  "50px";
        // innerDiv.style.border= "2px solid white";
        innerDiv.classList.toggle("clickme")
        outerDiv.appendChild(innerDiv);
    }
    outerDiv.style.flex = "1" ;
    outerDiv.style.display = "flex";
    outerDiv.style.flexDirection = "column";
    container.appendChild(outerDiv) ;
}

const grids = document.querySelectorAll('.clickme');
grids.forEach((gridItem)=> {
    gridItem.addEventListener('mouseenter',(e)=> {
        e.target.style.backgroundColor = "hotpink";
    })
})