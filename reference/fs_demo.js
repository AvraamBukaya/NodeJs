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

//Write File & Appand to file

// fs.writeFile(
//     path.join(__dirname,'/Test','TestMe.txt'),
//     'First Line \n',
//     err => {
//         if(err) throw err;
//     console.log('File created....');

//     //Append File
//     fs.appendFile(
//         path.join(__dirname,'/Test','TestMe.txt'),
//         'I love node js',
//         err => {
//             if(err) throw err;
//         console.log('File created....');
        
//     });
    
    
// });

//Read File
// fs.readFile(path.join(__dirname,'/Test','TestMe.txt'),'utf-8',(err, data)=>{

//     if(err){
//         throw err;
//     }
//     console.log(data);
// });


//Rename File 

// fs.rename(path.join(__dirname,'/Test','TestMe.txt'),path.join(__dirname,'/Test','info.txt'),(err)=>{
//     if(err){
//         throw err;
//     }
//     console.log('File renamed.....');
// });
