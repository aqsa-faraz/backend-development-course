const display_pattern = document.getElementById('pattern');

let n = parseInt(prompt("Enter a number: "));

for(let i = 1; i <=n; i++){
    let row = "";
    for(let j = 1; j <=i; j++){
        row+=j
    }
    console.log(row);
    // display_pattern.innerText += row + '\n';
    display_pattern.innerHTML += row + '<br>';
}