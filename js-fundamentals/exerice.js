function solve(num , presision){
if(presision > 15){
    presision = 15;
}
let randomedNum = parseFloat(num.toFixed(presision))
return randomedNum
}

function divider(num){
    let divider = 0;

    if(num % 10 === 0){
        divider = 10;
    }else if(num % 7 === 0){
        divider = 7;
    }else if(num % 6 === 0){
        divider = 6;
    }else if(num % 3 === 0){
        divider = 3;
    }else if(num %  2 === 0){
        divider = 2;
    }else {
        return 'Not divisible'
    }
    return 'The number is divisible by '.concat(divider)
}

console.log(divider(1643));