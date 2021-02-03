const url = require('url');

const myUrl =  new URL('http://mywebsite.com/hello.html?id=100&&status=active');

//Serialized URL
//console.log(myUrl.href);
//console.log(myUrl.toString());

// Host(root domain)
//console.log(myUrl.host);

// Hostname (not contain the port number if the URL contain it)
//console.log(myUrl.hostname);

//PathName
console.log(myUrl.pathname);

// Serialized query 
//console.log(myUrl.search);

// Params object 
//console.log(myUrl.searchParams);

// Add params

// myUrl.searchParams.append('abc',123);
// console.log(myUrl.search);
// console.log(myUrl.searchParams);

// Loop through params object
myUrl.searchParams.forEach((value,key)=>{
    console.log(`The Key is: ${key}, and the Value is: ${value}`);
});
