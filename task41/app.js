function create_car(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    for (let option of options) {
        let [key, value] = option;
        car[key] = value;
    }
    return car;
}

console.log(create_car("toyotta", "Corolla", ["color", "black"], ["year", 2024]));