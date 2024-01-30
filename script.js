const container = document.querySelector('.container');

for (let i =0 ; i<10 ;i ++) {
    const outerDiv = document.createElement('div');
    for (let j =0 ; j<10 ; j++) {
        const innerDiv = document.createElement('div');
        innerDiv.style.flex =  "1";
        innerDiv.style.height = "50px";
        innerDiv.style.widows=  "50px";
        innerDiv.style.border= "2px solid black";
        outerDiv.appendChild(innerDiv);
    }
    outerDiv.style.flex = "1" ;
    outerDiv.style.display = "flex";
    outerDiv.style.flexDirection = "column";
    container.appendChild(outerDiv) ;
}