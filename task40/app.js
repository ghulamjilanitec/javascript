function make_sandwich(...items) {
    console.log("Sandwich items:");
    for (let item of items) {
        console.log(item);
    }
}

make_sandwich("Cheese", "Chicken", "club");