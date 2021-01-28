function solve(descrioptor) {

    const engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 },
    ]

    const car = {
        model: descrioptor.model,
        carriage: {
            type: descrioptor.carriage,
            color: descrioptor.color
        }
    };

    for (let engine of engines) {
        if (engine.power >= descrioptor.power) {
            car.engine = Object.assign(engine);
            break;
        }
    }

    if (descrioptor.wheelsize % 2 == 0) {
        const wheelsize = descrioptor.wheelsize - 1;
        car.wheels = [wheelsize, wheelsize, wheelsize, wheelsize];
    } else {
        const wheelsize = descrioptor.wheelsize;
        car.wheels = [wheelsize, wheelsize, wheelsize, wheelsize];
    }

    return car;
}


const car = solve(
    {
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
);

console.log(car);