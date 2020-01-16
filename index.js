function echo(input, greeting) {
    return `${greeting} ${input}`;
}

let pageGreeting = document.querySelector('h1');
pageGreeting.textContent = echo('Jacob', "Hi, ");


const user1 = "Reed";
const user2 = "Doug";

function sendUserMessage(user, text) {
    console.log(`${user}: ${text}`);
}

sendUserMessage(user1, "Hey there");
sendUserMessage(user2, "What is up?!");


function splitBill(bill, friends) {
    return bill / friends;
}


console.log(splitBill(10, 2));
console.log(splitBill(16, 4));
console.log(splitBill(350, 9));


