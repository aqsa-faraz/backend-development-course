// Initial array of marks
const marks = [78, 45, 92, 66, 88, 54, 91, 73];
// Create a second array of marks and combine both groups
const marks_2 = [57, 75, 49, 83];
// combined array
const combined_marks = marks.concat(marks_2);
// Create a smaller list containing a selected portion of the combined marks
const selected_marks = combined_marks.slice(4, 10);
// Change or remove one mark in the middle of the list
const change_and_delete = combined_marks.splice(9, 1, 70);
// Display the total number of marks currently stored
console.log(`Total number of marks stored: ${combined_marks.length}`);
// Displaying all lists
console.log(`Marks List 1: ${marks}`);
console.log(`Marks List 2: ${marks_2}`);
console.log(`Combined List: ${combined_marks}`);
console.log(`Sliced List: ${selected_marks}`);
console.log(`Updated combined marks list: ${combined_marks}`);

// Display results in HTML elements
        document.getElementById('total-marks').innerText = combined_marks.length;
        document.getElementById('list-1').innerText = marks.join(', ');
        document.getElementById('list-2').innerText = marks_2.join(', ');
        document.getElementById('combined-list').innerText = combined_marks.join(', ');
        document.getElementById('sliced-list').innerText = selected_marks.join(', ');
        document.getElementById('updated-list').innerText = combined_marks.join(', ');


// Arrange the marks so the lowest and highest results can be easily viewed
const marks_ascending = combined_marks.sort(function(a,b){return a - b});
document.getElementById('ascending-list').innerText = marks_ascending.join(', ');


console.log(`Marks in Lowest to Highest order: ${marks_ascending}`);

// Reverse the order of the resulting list for another report
console.log(`Reversed Marks List: ${combined_marks.reverse()}`);
document.getElementById('reversed-list').innerText = combined_marks.join(', ');


// Create an arrow function that receives the marks array and displays the final result
const display_result = (marksArray) => console.log(`Final Marks(Highest to Lowest): ${marksArray}`);

display_result(combined_marks);

document.getElementById('final-list').innerText = combined_marks.join(', ');
            