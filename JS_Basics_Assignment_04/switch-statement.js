
let choice = 1;
let option;

const choice_made = document.getElementById('choice_made').innerText = choice;
const option_selected = document.getElementById('option_selected');

switch(choice){
    case 1:
        option = "Home";
        option_selected.innerText = option;
        console.log("You selected "+option);
        break;
    case 2:
        option = "About";
        option_selected.innerText = option;
        console.log("You selected "+option);
        break;
    case 3:
        option = "Services";
        option_selected.innerText = option;
        console.log("You selected "+option);
        break;
    case 4:
        option = "Contact";
        option_selected.innerText = option;
        console.log("You selected "+option);
        break;
    default:
        option_selected.innerText = "Invalid Choice";
        console.log("Invalid Choice");
}