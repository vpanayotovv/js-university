function  solve(input) {
    let jsonData = {};
    jsonData = input;
    let students = JSON.parse(jsonData);
    let first = students[0];
    let second = students[1];
    let html = '';

    html += '<table>\n';

    html += `<tr>\n${Object.keys(first).map(x => `<th>${x}</th>\n`).join("")}</tr>\n`

    html += `<tr>\n${Object.values(first).map(x => `<td>${x}</td>\n`).join('')}</tr>\n`
    html += `<tr>\n${Object.values(second).map(x => `<td>${x}</td>\n`).join('')}</tr>\n`


    html += '</table>\n';
    console.log(html);
}  

solve(
    ['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']
);