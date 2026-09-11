let marks = 83;
let grade = "";

if (marks >= 90) {
    grade = "A";
} else if (marks >= 80 && marks < 90) {
    grade = "B";
} else if (marks >= 70 && marks < 80) {
    grade = "C";
} else if (marks >= 60 && marks < 70) {
    grade = "D";
} else {
    grade = "F";
}

console.log("Marks:", marks, ", Grade:", grade);

//displaying marks and grade in html document
document.getElementById("marks").innerText = marks;
document.getElementById("grade").innerHTML = "<em>" + grade + "</em>";