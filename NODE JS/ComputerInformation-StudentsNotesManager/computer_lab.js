const os = require('os');
const path = require('path');
const fs = require('fs');

const os_platform = os.platform();
const cpu_architecture = os.arch();
const total_mem = os.totalmem();
const free_mem = os.freemem();
const home_directory = os.homedir();


console.log("----SYSTEM INFO----");
console.log("-------------------");
console.log(`OS Platform: ${os_platform}`);
console.log(`CPU Architecture: ${cpu_architecture}`);
console.log(`Total Memory: ${total_mem}`);
console.log(`Free Memory: ${free_mem}`);
console.log(`Home Directory: ${home_directory}`);
console.log("----------------------");

const folderName = "data";
const fileName = "student-notes.txt";


// check if the folder exists, if not, create it
if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
    console.log(`Created folder: ${folderName}`);
}
// Build the path for student-notes.txt using a path utility rather than manually joining folder names with slash characters.
const studentNotesFile = path.join(folderName, fileName);
// Display the file name and extension from the path.
console.log("----------------------");
console.log("---PATH Information---");
console.log("----------------------");
console.log(`File name: ${path.basename(studentNotesFile)}`);
console.log(`File extension: ${path.extname(studentNotesFile)}`);

// Create a temporary file and remove it only after completing the other file operations.
const tempFilePath = path.join(folderName, "temp-file.txt");
fs.writeFileSync(tempFilePath, "This is temporary data.");

// Create the notes file and write at least three lines about what you learned in Node.js.
const fileData = `1. Node.js allows JavaScript to run on the server side.\n2. The os module provides essential operating system utilities.\n3. The fs module offers both synchronous and asynchronous file APIs.`
fs.writeFileSync(studentNotesFile, fileData);

// Read the file and display its contents in the terminal.
let content = fs.readFileSync(studentNotesFile, "utf8");
console.log('------------------');
console.log('---File Content---');
console.log('------------------');
console.log(content);


// Append one more line and display the updated contents.
const appendText = `\n4. The path module ensures cross-platform compatibility for file paths.`
fs.appendFileSync(studentNotesFile, appendText);

content = fs.readFileSync(studentNotesFile, "utf8");
console.log('--------------------------');
console.log('---Updated File Content---');
console.log('--------------------------');
console.log(content);

// Rename the file to class-notes.txt.
const renameFilePath = path.join(folderName, "class-notes.txt");
fs.renameSync(studentNotesFile, renameFilePath);

// Removing the temp file
fs.unlinkSync(tempFilePath);



