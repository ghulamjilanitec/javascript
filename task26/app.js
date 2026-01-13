let users = ["admin", "Osama", "Ahmed", "subhan"];

for (let user of users) {
    if (user === "admin") {
        console.log("Hello admin, would you like to see a user report?");
    } else {
        console.log(`Hello ${user}, thank you for logging in again.`);
    }
}