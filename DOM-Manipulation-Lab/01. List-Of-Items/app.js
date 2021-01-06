function addItem() {
    let inputText = document.querySelector("#newItemText");

    let lifield = document.createElement('li');
    lifield.innerHTML = inputText.value;

    let itemsList = document.getElementById('items');
    itemsList.appendChild(lifield);

    inputText.value = '';
}


function onMouseOver(event) {
    console.log(event)
}