function deleteByEmail() {

    let inputElement = document.querySelector("body > label > input[type=text]");
    let inputValue = inputElement.value;

    let customerEmails = document.querySelectorAll('#customers tbody td:nth-of-type(2)');
    let isDeleted = false;

    for (const customer of customerEmails) {
        if(customer.textContent === inputValue){
            customer.parentElement.remove();
            isDeleted = true;
        }
    }

    if(!isDeleted){
        let error = document.getElementById('result');
        error.innerHTML = 'Not found';
    }else{
        let error = document.getElementById('result');
        error.innerHTML = 'Deleted';
    }
}