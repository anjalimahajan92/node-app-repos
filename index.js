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