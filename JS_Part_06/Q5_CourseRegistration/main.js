import {courses} from './courses.js';
import { courseSummary } from './courseUtils.js';

console.log(courses);

// In the main file, prepare a summary for one course by extracting the course name and fee into variables
let course_name = courses[0].name;
let course_fee = courses[0].fee;

console.log(`course name: ${course_name}, fee: ${course_fee}`);

// Create a separate list containing the existing courses plus one newly introduced course. Keep the original course list unchanged
const new_course = {
    name: "Graphhic Designing",
    instructor: "Humera Tariq",
    duration: "6 weeks",
    fee: 600
};

const updatedCourseList = [...courses, new_course];

// Create an updated version of one course with a revised fee while preserving its other details and the original course object
const updatedFeeCourseList = updatedCourseList.map(course => {
    if(course.name === 'Backend Development'){
        course.fee = 2000;//return {...course, fee: 1200}; // revised fee
    }
    return course; // return the rest of the courses as it is
})


// Display all course summaries in the console or on the HTML page
updatedFeeCourseList.forEach(course => console.log(courseSummary(course)));
