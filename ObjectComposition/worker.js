solve = (worker) => {

    if (worker.dizziness) {
        worker.levelOfHydrated += (worker.weight * worker.experience);
        worker.dizziness = false;
    }

    return worker;
}

let worker = solve(
    {
        weight: 120,
        experience: 20,
        levelOfHydrated: 200,
        dizziness: true
    }
);

console.log(worker)