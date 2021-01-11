function focus() {

    let inputs = document.querySelectorAll('input[type="text"');

    Array.from(inputs).forEach(x => {
        x.addEventListener('focus', function (e) {
            let parentDivElement = e.currentTarget.parentElement;
            parentDivElement.classList.add('focused');
        });

        x.addEventListener('blur', function (e) {
            let parentDivElement = e.currentTarget.parentElement;
            parentDivElement.classList.remove('focused'); 
        });
    })


}