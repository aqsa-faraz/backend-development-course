// Use reusable code from a separate module to format a course summary, such as a sentence containing the course name, instructor, and fee
export function courseSummary(course){
    return `${course.name} - Taught by ${course.instructor} | Fee: Rs.${course.fee}`;
}