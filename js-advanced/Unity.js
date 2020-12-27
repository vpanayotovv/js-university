class Rat {

    constructor(name) {
        this.name = name;
        this.rats = [];
    }
    unite(otherRat) {
        if (typeof otherRat === 'object') {
            this.rats.push(otherRat)
        }
    }

    getRats() {
        return this.rats;
    }

    toString() {
        return `${this.name}`;
    }
}

function solve() {

    let firstRat = new Rat("Peter");
    console.log(firstRat.toString()); // Peter

    console.log(firstRat.getRats()); // []

    firstRat.unite(new Rat("George"));
    firstRat.unite(new Rat("Alex"));
    console.log(firstRat.getRats());
    // [ Rat { name: 'George', unitedRats: [] },
    //  Rat { name: 'Alex', unitedRats: [] } ]

    console.log(firstRat.toString());


}

solve();