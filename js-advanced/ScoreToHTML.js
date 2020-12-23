function solve(input){

    let html = '';
    html += '<table>\n';
    html += `<tr>${Object.keys(input[0]).map(e => `<th>${e}</th>`).join('')}</tr>\n`
    input.forEach(element => {
        html += `<tr>${Object.values(element).map(e => `<td>${e}</td>`).join('')}</tr>\n`
    });
    html += '</table>';
    return html;
}


solve ([{"name":"Pesho & Kiro",
"score":479
},
{"name":"Gosho, Maria & Viki",
"score":205
}])