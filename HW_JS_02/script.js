const userName = prompt(`user name here...`);
console.log(userName);
const birthYear = prompt(`hi ${userName} pls type in your birth year`);
const currentAge = (2022 - birthYear);
console.log(currentAge);

switch (currentAge) {
    case 18:
    console.log("no money in pocket");
    break;
    case 19:
    console.log("go find work dude");
    break;
    case 20:
    console.log("still no money");
    break;
}

const ageIn56Years = currentAge + 56;
console.log(ageIn56Years)
