
// getting the button, heading and paragraph element using their ID
const button = document.getElementById("showBtn");
const title = document.getElementById("title");
const message = document.getElementById("message");

// button onclick function
button.onclick = function(){
    //displaying paragraph message in console
    console.log(message.innerText);
    // showing title in the alert box
    alert(title.innerText);
}

//  Use innerHTML when you want to change an HTML element.
// Target a specific element and insert HTML safely
//  document.getElementById("title").innerHTML = "<button>New content</button>";

// Use innerText when you only want to change the plain text.
 // Targets an element and safely adds text only
//   document.getElementById("title").innerText = "Pakistan Zindabad";
//  document.getElementById("title").textContent = "Pakistan Zindabad";