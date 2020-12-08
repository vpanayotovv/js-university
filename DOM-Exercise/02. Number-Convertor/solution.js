function solve() {

    const selectMenuTo = document.getElementById('selectMenuTo');

    document.querySelector("#container > button").addEventListener('click', convert);


    function convert() {

        let number = Number(document.getElementById('input').value);

        let result;

        if (selectMenuTo.value === 'binary') {
            result = convertToBinary(number);
        } else if (selectMenuTo.value === 'hexadeicmal') {
            result = convertToHexadeicmal(number);
        }

        appendResult(result);

    }

    function appendResult(result){
        document.getElementById('result').value = result;
    }

    function convertToBinary(number){
        return (number >>> 0).toString(2);
    }

    function convertToHexadeicmal(number){
        return number.toString(16);
    }

    function createSelectMenuOption() {
        let binaryOption = document.createElement('option');
        binaryOption.textContent = 'Binary';
        binaryOption.value = 'binary';


        let hexadeicmalOption = document.createElement('option');
        hexadeicmalOption.textContent = 'Hexadeicmal';
        hexadeicmalOption.value = 'hexadeicmal';

        selectMenuTo.appendChild(binaryOption);
        selectMenuTo.appendChild(hexadeicmalOption);

    }

    createSelectMenuOption();

}