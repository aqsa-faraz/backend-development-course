const EventEmitter = require('events');

// Create an EventEmitter object for the registration system
const registration = new EventEmitter();

// Register a listener for an event named studentRegistered
registration.on('studentRegistered', (student) => {
    console.log(`[CONFIRMATION SUCCESSFUL]: "Student ${student.name}" (ID: ${student.id}) has been registered.`);

    // After the confirmation, schedule a reminder message to appear after approximately three seconds
    setTimeout(()=>{
        console.log(`[REMINDER] Attention ${student.name}: Please remember to complete your orientation modules!`)
    }, 3000);
});


// Create a function that accepts a student ID and name, then emits the event with that student's details.
function registerStudent(id, name){
    const studentDetails = {
        id: id,
        name: name
    };
    registration.emit('studentRegistered', studentDetails);
}

// Call the registration function for at least two sample students
registerStudent(101, "Ali");
registerStudent(102, "Fatima");

