let age = 23;

const age_display = document.getElementById('age').innerText = age;
const eligible = document.getElementById('eligible');

let isEligible = (age >= 18) ? "Eligible" : "Not Eligible";

console.log("Age: ", age + " , " + isEligible + " to vote");
eligible.innerText = isEligible+" to vote";