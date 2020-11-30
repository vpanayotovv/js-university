// function solve(data) {

//     let keys = [];
//     let futureKeys = data[0].split("|");
//     for (let i = 0; i < futureKeys.length; i++) {
//         if(futureKeys[i] !== ""){
//             keys.push(futureKeys[i].trim())
//         }
//     }
//     let value = [];
//     for (let i = 1; i < data.length; i++) {
//         let row = data[i].split("|");
//         let futureValue = [];
//         for (let j = 0; j < row.length; j++) {
//             if(row[j] !== ""){
//                let val = Number(row[j]);
//                if(isNaN(val)){
//                    val = row[j].trim();
//                }else{
//                    val = Math.floor(val * 100) / 100; 
//                }
//                futureValue.push(val);
//             }
//         }
//         value.push(futureValue);
//     }
//     let result  = [];
//     for (let i = 0; i < value.length; i++) {
//         let obj = {};
//         for (let j = 0; j < keys.length; j++) {
//             obj[keys[j]] = value[i][j];
//         }
//         result.push(obj)
//     }
//     console.log(result)
// }

function parseStringToArrayOfValues(str) {
    return str
        .split("|")
        .filter(x => x !== "")
        .map(x => x.trim())
        .map(x => Number(x) ? Math.floor(Number(x) * 100) / 100 : x)
}

function solve(data) {
    let keys = parseStringToArrayOfValues(data[0]);
    return data
        .slice(1)
        .map(parseStringToArrayOfValues)
        .map(x => x.reduce((a, b, i) => {
            a[keys[i]] = b;
            return a;
        }, {}))
}

console.log(
    solve(
        ['| Town | Latitude | Longitude |',
            '| Veliko Turnovo | 43.0757 | 25.6172 |',
            '| Monatevideo | 34.50 | 56.11 |']
    )
)