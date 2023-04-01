let fs=require('fs');  


// to write data in to a file
fs.writeFile('mycode.txt','This is text data that we want to write to a file',(err)=>{
    if(err) throw err;
    console.log('Task done');
})

//to append data into a file 
fs.appendFile('mycode.txt','\nthis is appended code in txt file \n',(err)=>{
    if(err) throw err;
    console.log('file data appended');
})

//to read data from a file --output without encoding
fs.readFile('mycode.txt',(err,data)=>
    {
        if(err) throw err;
        console.log(data);
    })

//to read data from a file --output with encoding
fs.readFile('mycode.txt','utf-8',(err,data)=>
    {
        if(err) throw err;
        console.log('\n');
        console.log(data);
    })

fs.readFile('myfile.txt','utf-8',(err,data)=>{
        if(err) throw err;
        console.log('\n');
        console.log(data);

    })

fs.readFile('city.json','utf-8',(err,data)=>{
        if(err) throw err;
        console.log('\n');
        console.log(data);

    })

//All the above funtions will be running in the async mode as node js creates seperate events for each funtion or it supports the parallel programming 
//so while reading data from file it may happen that in response chunk data will be displayed and then other event response will be printed out

//so to get the data in sync we can use sync funtion of fs module -->refer fssync.js file for more example


   