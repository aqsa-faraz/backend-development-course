// In studentTools.js, create and make available a function that receives a student's first and last name and returns the full name

export default function fullName(firstName, lastName){ // default export
    return firstName+" "+lastName;
}

// In the same file, create and make available a function that receives marks from four subjects and returns the total marks
export function totalMarks(...marks){ // named export
    return marks.reduce((total, mark)=> mark + total, 0);
}