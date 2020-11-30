function randomCut(num, presision) {
    if (presision > 15) {
        presision = 15;
    }
    let randomedNum = parseFloat(num.toFixed(presision))
    return randomedNum
}

function divider(num) {
    let divider = 0;

    if (num % 10 === 0) {
        divider = 10;
    } else if (num % 7 === 0) {
        divider = 7;
    } else if (num % 6 === 0) {
        divider = 6;
    } else if (num % 3 === 0) {
        divider = 3;
    } else if (num % 2 === 0) {
        divider = 2;
    } else {
        return 'Not divisible'
    }
    return 'The number is divisible by '.concat(divider)
}

function exerice04(groupSize, type, day) {
    let pricePerPerson = 0;
    switch (type) {
        case 'Students':
            if (day === 'Friday') {
                pricePerPerson = 8.45;
            } else if (day === 'Saturday') {
                pricePerPerson = 9.80;
            } else if (day === 'Sunday') {
                pricePerPerson = 10.46;
            }
            break;
        case 'Business':
            if (day === 'Friday') {
                pricePerPerson = 10.90;
            } else if (day === 'Saturday') {
                pricePerPerson = 15.60;
            } else if (day === 'Sunday') {
                pricePerPerson = 16;
            }
            break;
        case 'Regular':
            if (day === 'Friday') {
                pricePerPerson = 15;
            } else if (day === 'Saturday') {
                pricePerPerson = 20;
            } else if (day === 'Sunday') {
                pricePerPerson = 22.50;
            }
            break;
        default:
            return 'Invalid input';
    }
    let totalPrice = groupSize * pricePerPerson

    if (type === 'Students' && groupSize >= 30) {
        totalPrice *= 0.85
    }
    if (type === 'Regular' && (groupSize >= 10 && groupSize <= 20)) {
        totalPrice *= 0.95
    }

    return 'Total price: '.concat(totalPrice.toFixed(2));

}

function isYearLeap(year) {
    if (year % 400 === 0) {
        return 'yes'
    } else if (year % 4 === 0 && year % 100 !== 0) {
        return 'yes'
    } else {
        return 'no'
    }
}

function printSome(begin , end){
    let string = '';
    let sum = 0;

    for (let i = begin; i <= end ; i++) {
        string += i+' ';
        sum += i
    }

    return string + ' \n' + 'Sum: ' + sum
}

console.log(printSome(0,26))