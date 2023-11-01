readinput=require('readline-sync');

arrfunc=require('./ArrayFunctions');

console.log('enter your name')
fullNam=readinput.question();
console.log('Enter your age');
age=Number(readinput.question())
console.log('origin country');
country=readinput.question();

console.log('capital of ' + country + ' is ' + arrfunc.getCapCity(country));

if(age>=18 && age<=45)
   console.log("you are eligiblity for grauity");
else
   console.log("Apply gor grautity consideration");