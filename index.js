const os=require (`os`);


console.log(`My first app`);
console.log(`file name:${__filename}`);
console.log(`dirtory name:${__dirname}`);

console.log("===========Built in modules===================");
console.log(`Arch :${os.arch()}`);
console.log(`os cpus ${os.cpus()}`);
console.log(`os freemem ${os.freemem()}`);
console.log(`os totalmem ${os.totalmem()}`);
console.log(`os hostname ${os.hostname()}`);
console.log(`os platform ${os.platform()}`);
console.log(`os release ${os.release()}`);
console.log(`os type ${os.type()}`);
console.log(`os uptime ${os.uptime()}`);
console.log(`os userInfo ${os.userInfo()}`);

const fs = require('fs');
//fs --> File System
console.log(`=========== readFile() ===========`);

fs.readFile('./sample-file.txt', 'utf8', (error, data)=>{
    console.log(`Reading the contents from the File: sample-file.txt`);
    console.log("====================================");
    
    if (error) {
        console.log(error);
        return;
    }
    console.log(data); 
})

// nodemon start module-fs.js

console.log(`=========== writeFile() ===========`);
const content = "The issue in your code is that you're using fs.readFileSync() incorrectly with a callback. The method readFileSync() is a synchronous function, meaning it does not take a callback. It reads the file and returns the contents directly.";
fs.writeFile('output.txt', content, "utf8", (error)=>{
    if (error) {
       console.log(error);
        return;
    }
    console.log("Content Written Successfully.");
});

console.log("========stat()========================");
const filepath='output.txt';
fs.stat(filepath,(err,stats)=>{
    if(err){
        console.error(err);
        return;
    }
    //Access the properties of stats object
    console.log(`File size:`,stats.size+ `bytes`);
    console.log(`Is a File:,`,stats.isFile());
    console.log(`Is a directory`,stats.isDirectory());
    console.log(`FileBirth Time(creation time)`,stats.birthtime);
    console.log(`File modification time`,stats.mtime);
   
});

console.log("=========appendFile===================");
const filePath='output.txt';
const dataToAppend='\n This data will be appended to the file.';
//Append data to the file asynchronously
fs.appendFile(filePath,dataToAppend,(err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(`Data has been appended to the file`);
    
});

console.log("==========unlink()==================");
const filePaths='sample.txt';
//Delete the file aynchronously
fs.unlink(filePaths,(err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(`File has been deleted`);
    
});