let ulElement = document.getElementById('items');
let button = document.querySelector('button');


button.onclick = function(){
    let liElements = document.getElementsByClassName('item');
    let itemsAmount = liElements.length;

    // console.log(liElements);

    let newElement = document.createElement('li');
    let textElement = document.createTextNode(`Item ${itemsAmount + 1}`);
    let classA = document.createAttribute('class');
    classA.value = 'item';   

    newElement.appendChild(textElement);
    newElement.setAttributeNode(classA);

    ulElement.appendChild(newElement);   
} 

