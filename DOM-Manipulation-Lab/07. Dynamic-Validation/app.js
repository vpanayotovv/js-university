function validate() {
    let inputElement = document.getElementById('email');
    inputElement.addEventListener('change', function (e) {
        let currentValue = e.currentTarget.value;
        let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if (pattern.test(currentValue)) {
            e.currentTarget.classList.remove('error');

        } else {
            e.currentTarget.classList.add('error');
        
        }
    })
}