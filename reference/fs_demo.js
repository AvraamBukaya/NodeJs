const fs = require('fs');
const path = require('path');

//Create Folder

// fs.mkdir(path.join(__dirname,'/Test'),{},err =>{
//     if(err){
//         console.log('Somthing went wrong', err);
//     } 
//     else {
//         console.log('The Folder created succefully');
//     }
    
// });

//Create a File

// fs.writeFile(path.join(__dirname,'/test','ReadMe.txt'),'This is a test :)',err => {
//     if(err){
//         console.log('Somthing went wrong', err);
//     }
//     console.log('File created .....');
// });

// async function writeFile(){
//     try{
//         const res = await fs.writeFile(path.join(__dirname,'Test','ReadMe.txt'),'This is a test');
//     }catch(error){
//         console.log(error);
//     }
    
  
// }

fs.writeFile(
    path.join(__dirname,'/Test','TestMe.txt'),
    'Made ! with callback fs',
    err => {
        if(err) throw err;
    console.log('File created....');
    
});
