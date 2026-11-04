const fs = require('fs');

const readStream = fs.createReadStream("large.txt", {
    encoding: "utf8"
});

// Read the file using a readable stream and display each received chunk in the terminal.
readStream.on("data", (chunk) => {
    console.log("Received a chunk");
    console.log(chunk);
});

// Display a completion message when reading ends.
readStream.on("end", () => {
    console.log("Finished reading the file.")
});

// Copy the file into copy.txt using a readable stream, writable stream, and pipe.
const readable = fs.createReadStream("large.txt");
const writable = fs.createWriteStream("copy.txt");

readable.pipe(writable);

// Display a success message when copying finishes and handle read/write errors.
writable.on("finish", () => {
    console.log("File copied successfully!");
});

readable.on("error", (error) => console.log(error.message));
writable.on("error", (error) => console.log(error.message));



