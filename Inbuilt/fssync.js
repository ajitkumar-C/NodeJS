let fs=require('fs');

let data=fs.readFileSync('city.json',{encoding:'utf-8',flag:'r'})
console.log(data)

let data1=fs.readFileSync('myfile.txt',{encoding:'utf-8',flag:'r'})

console.log(data1)

