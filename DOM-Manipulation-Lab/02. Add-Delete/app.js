function addItem() {

    let ulElement = document.getElementById('items');
    let inputText = document.getElementById('newText');

    let liElement = document.createElement('li');
    let spanElement = document.createElement('span');
    spanElement.innerText = ' [Delete]'
    spanElement.addEventListener('click',function deleteElement(event) {
        let parentElement = event.target.parentElement;
        parentElement.remove();
    })


    liElement.innerHTML = inputText.value;
    
    ulElement.appendChild(liElement);
    liElement.appendChild(spanElement);
    
    inputText.value = '';
}