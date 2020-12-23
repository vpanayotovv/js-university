function solve(input) {

    let result = {};
    let text = input[0];
    let regex = new RegExp('[A-Za-z_]+', 'g')
    let words = text.match(regex);
    words.forEach(word => {
        if (!result[word]) {
            result[word] = 1;
        } else {
            result[word] += 1;
        }
    });

    console.log(JSON.stringify(result));
}

solve(['JS devs use Node.js for server-side JS.-- JS for devs'])