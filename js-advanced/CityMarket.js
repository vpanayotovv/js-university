function solve(input) {

    let result = {};

    input.forEach(line => {
        let [town, product, numbers] = line.split(" -> ");
        let [amountOfSales, priceForOneUnit] = numbers.split(" : ");
        numbers = Number(amountOfSales * priceForOneUnit);

        if (!result[town]) {
            result[town] = [];
        }

        result[town][product] = numbers;
    })

    Object.entries(result).forEach(([town , product]) => {
        console.log(`Town - ${town}`);
        Object.entries(product).forEach(key =>
        console.log(`$$$${key[0]} : ${key[1]}`))
    })
}

solve(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3']);