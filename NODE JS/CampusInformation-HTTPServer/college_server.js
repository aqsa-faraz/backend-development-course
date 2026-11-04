const http = require('http');

const PORT = 3000;

const sampleStudents = [
            { id: 101, name: 'Shahid Afridi', major: 'Computer Science' },
            { id: 102, name: 'Lionel Messi', major: 'Information Technology' },
            { id: 103, name: 'Virat Kohli', major: 'Data Science' }
        ];

const server = http.createServer((request, response)=>{
    //response.setHeader("Content-Type", "text/plain");

    if(request.url === "/"){
        response.setHeader("Content-Type", "text/plain");
        response.statusCode = 200;
        response.end("Welcome to the College Information Portal!");
    }else if(request.url === "/about"){
        response.setHeader("Content-Type", "text/html");
        response.statusCode = 200;
        response.end(`
            <h1>About Our College</h1>
            <p>We are a leading institution dedicated to excellence in education, innovation, and research.</p>
        `);
    }else if(request.url === "/courses"){
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/html");
        response.end(` <h2>Available Courses</h2>
            <ul>
                <li>Introduction to Computer Science</li>
                <li>Data Structures and Algorithms</li>
                <li>Web Development Essentials</li>
            </ul>`);
    }else if(request.url === "/students"){
        response.statusCode = 200;
        response.setHeader("Content-Type", "application/json");
        response.end(JSON.stringify(sampleStudents));
    }else{
        statusCode = 404;
        response.setHeader("Content-Type", "text/plain");
        response.end(`${statusCode} - Page Not Found`);
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});