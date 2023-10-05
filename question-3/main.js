// Question 3: File Module
// ● Create a script that will do the following:
// 1. Remove Log files
// o remove all the files from the Logs directory, if exists
// o output the file names to delete
// o remove the Logs directory
// 2. Create Log files
// o create a Logs directory, if it does not exist
// o change the current process to the new Logs directory
// o create 10 log files and write some text into the file
// o output the files names to console
// o Hint: use the fs module and path module, and the process current working directory to
// build directory path. It is acceptable, to have a remove.js script and separate add.js
// script.

const fs = require('fs');
const path = require('path');

const logPath = path.join(__dirname, 'Logs');

// Remove old log files and directory if they exist
if (fs.existsSync(logPath)){
    const fileNames = fs.readdirSync(logPath);
    fileNames.forEach(file => {
        const filePath = path.join(logPath, file);  
        console.log(`Deleting file: ${file}`);
        fs.unlinkSync(filePath);  
    });
    fs.rmdirSync(logPath);  // Remove the directory after all files deleted
    console.log('Directory removed.');
} else {
    console.log('Directory does not exist.');
}

// Create new log files and directory
fs.mkdirSync(logPath);
console.log('Made a new directory :)');

process.chdir(logPath);

for(let i = 1; i <=10; i++){
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `example ${i}!`);
    console.log(`File ${fileName} created successfully! :)`);
}
