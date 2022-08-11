createButton = document.querySelector('#create-button');
createButton.addEventListener('click',(function(){
    rowBox = document.querySelector('#rows');
    columnBox = document.querySelector('#columns');
    insertGrid(columnBox.value, rowBox.value);
}) )
document.getElementById('colors').onchange = changeColor;
let color = 'black';
let mouseDown = 0;
document.getElementById('background-colors').onchange = changeBackgroundColor;
document.body.onmousedown = function(){
    mouseDown = true;
    console.log('down');
}
document.body.onmouseup = function(){
    mouseDown = false;
    console.log('up');
}

function insertGrid(width, height){
    if(width < 10 || width > 100 || height < 10 || height > 100){
        alert('Each dimension must be between 10-100');
        return;
    }
    let sketchBox = document.querySelector('#sketch-box');
    sketchBox.innerHTML = "";
    let boxHeight = sketchBox.clientHeight -  height;
    let boxWidth = sketchBox.clientWidth - width;
    let currentRow, currentColumn;
    for(let row=0; row<height; row++){
        currentRow = document.createElement('div');
        currentRow.style.cssText = 'display: flex;';
        sketchBox.appendChild(currentRow);
        for(let j=0; j<width; j++){
            currentColumn = document.createElement('div');
            currentColumn.style.border = '1px solid black';
            currentColumn.style.borderTop = '0';
            currentColumn.style.borderLeft = '0';
            let heightText = `${boxHeight / height}px`;
            let widthText = `${boxWidth / width}px`;
            currentColumn.style.height = heightText;
            currentColumn.style.width = widthText;
            currentColumn.addEventListener('mouseover', (function(e){
                colorIn(e);
            }))
            currentRow.appendChild(currentColumn);
        }
    }
}
function changeColor(){
    color = document.getElementById('colors').value;
}
function changeBackgroundColor(){
    divs = document.querySelectorAll('#sketch-box');
    backColor = document.getElementById('background-colors').value;
    for(let i =0; i<divs.length; i++){
        divs[i].style.backgroundColor = backColor;
    }
    document.getElementById('eraser').value = backColor;
}
function colorIn(e){
    console.log(e.which);
    if(mouseDown){
        e.target.style.backgroundColor = color;
    }
}
insertGrid(50,50);