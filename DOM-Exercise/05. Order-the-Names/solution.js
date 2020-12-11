function solve() {

    const db = {
        A: [],
        B: [],
        C: [],
        D: [],
        E: [],
        F: [],
        G: [],
        H: [],
        I: [],
        J: [],
        K: [],
        L: [],
        M: [],
        N: [],
        O: [],
        P: [],
        Q: [],
        R: [],
        S: [],
        T: [],
        U: [],
        V: [],
        W: [],
        X: [],
        Y: [],
        Z: []
    };

    const dbIndex = {
        A: 0,
        B: 1,
        C: 2,
        D: 3,
        E: 4,
        F: 5,
        G: 6,
        H: 7,
        I: 8,
        J: 9,
        K: 10,
        L: 11,
        M: 12,
        N: 13,
        O: 14,
        P: 15,
        Q: 16,
        R: 17,
        S: 18,
        T: 19,
        U: 20,
        V: 21,
        W: 22,
        X: 23,
        Y: 24,
        Z: 25
    };


    document.querySelector("#exercise > article > button").addEventListener('click', addToDb)

    function addToDb() {
        let input = document.querySelector("#exercise > article > input[type=text]").value;
        let firstLetter = input[0].toUpperCase();

        input = input.substring(0, 1).toLocaleUpperCase() + input.substring(1);

        db[firstLetter].push(input);
        
        let listItems = document.querySelectorAll('ol li');
        listItems[dbIndex[firstLetter]].textContent = db[firstLetter].join(', ')
    }
}