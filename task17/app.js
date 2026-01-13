let guests = ["subhan", "ameer hamza", "sanan"];
guests.map((name) => 
 console.log(
    `Dear ${name}, you have to dinner with me.`
))
console.log("I can only invite two peoples now");
console.log(`I am sorry, I can't invite you ${guests.pop()}`);

let total = guests.length;
console.log(total);