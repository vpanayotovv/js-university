function solve(input) {

    let sorted = [];
    input.forEach(e => {
        sorted.push(e);
    })

    sorted.sort((a, b) => {
        if (a.length - b.length === 0) {
            return a < b ? -1 : (a > b ? 1 : 0);
        }
        return a.length - b.length;
    }).forEach(e => console.log(e))
}

solve(['Denise',
    'Ignatius',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot'])