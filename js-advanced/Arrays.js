
function rotateArray(input) {
    let rotations = (+input[input.length - 1]) % (input.length - 1)
    let arr = input.slice(0, input.length - 1)
    for (let i = 0; i < +rotations; i++) {
        arr.unshift(arr.pop())
    }
    return arr.join(' ')
}
function extract(input) {

    let output = input.reduce((acc, curr) => {
        const lastElement = acc[acc.length - 1]
        if (curr >= lastElement || lastElement === undefined) {
            acc.push(curr);
        }
        return acc;
    }, [])
    return output.join('\n')
}
function magicMatrix(matrix) {
    for (let i = 0; i < matrix.length - 1; i++) {
        let sumROne = matrix[i].reduce((a, b) => a + b, 0);
        let sumRTwo = matrix[i + 1].reduce((a, b) => a + b, 0);
        let sumCOne = 0;
        let sumCTwo = 0;

        for (let j = 0; j < matrix.length; j++) {
            sumCOne += matrix[i][j];
            sumCTwo += matrix[i + 1][j];
        }

        if (sumROne !== sumRTwo || sumCOne !== sumCTwo) {
            return 'false';
        }
    }
    return 'true';
}
function matrix(n) {
    let result = new Array(n).fill().map(() => new Array(n).fill(''));
    let counter = 1;
    let startCol = 0;
    let endCol = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;
        for (let j = startRow; j <= endRow; j++) {
            result[j][endCol] = counter;
            counter++;
        }

        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }

        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter;
            counter++;
        }

        startCol++;

    }

    return result;

}