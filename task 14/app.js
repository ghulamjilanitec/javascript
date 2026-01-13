let guests = ["Areeb", "Zaryab", "Abdullah"];
//push adds guest at the end of the list
guests.push("sanan");
guests.push("ameer");
guests.push("subhan");

guests.map((name) =>
console.log(
    `Dear ${name}, I would to inform you that we have a bigger dinner table now.`
)
);
//unshift adds guest at the start of the list
guests.unshift("faisal");
guests.push("Aslam");
//splice adds the guest by its index number
guests.splice(2, 0, "usman");
//map repeats the sentence according to array.
guests.map((name) =>
console.log(`Dear ${name}, I would love to have you on dinner with me.`)
);