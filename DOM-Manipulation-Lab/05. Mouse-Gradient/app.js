function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');

    gradientElement.addEventListener('click', function (e) {
        let offset = e.offsetX;
        let width = e.currentTarget.offsetWidth;
        let procent = (offset / width) * 100;

        let resultElement = document.getElementById('result');

        resultElement.textContent = `${procent.toFixed(0)}%`;
    })
}