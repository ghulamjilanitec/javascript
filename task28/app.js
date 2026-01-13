let currentUsers = ["rehman", "hasan", "urwa", "Admin"];
let newUsers = ["admin", "Bilal", "Sara"];

for (let newUser of newUsers) {
    if (currentUsers.map(u => u.toLowerCase()).includes(newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    } else {
        console.log(`${newUser} is available.`);
    }
}