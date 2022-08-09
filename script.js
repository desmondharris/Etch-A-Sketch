createButton = document.querySelector('#create-button');
createButton.addEventListener('click',(function(){
    rowBox = document.querySelector('#rows');
    columnBox = document.querySelector('#columns');
    insertGrid(columnBox.value, rowBox.value);
}) )
document.getElementById('colors').onchange = changeColor;
let color = 'red';
function insertGrid(width, height){
    if(width < 10 || width > 100 || height < 10 || height > 100){
        alert('Each dimension must be between 10-100');
        return;
    }
    let sketchBox = document.querySelector('.sketch-box');
    sketchBox.innerHTML = "";
    let boxHeight = sketchBox.clientHeight;
    let boxWidth = sketchBox.clientWidth;
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
            currentColumn.addEventListener('mousedown', (function(){
                colorIn(currentColumn);
            }))
            currentRow.appendChild(currentColumn);
        }
    }
}
function changeColor(){
    colors = document.getElementById('colors').value;
}
function colorIn(div){
    div.style.backgroundColor = color;
}

