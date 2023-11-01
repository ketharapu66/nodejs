//treatment of functions in javascript

function test()
{
    console.log("in test");


}

console.log(test);
console.log(test());

var multiply=new Function("p1,p2" ,"console.log(p1*p2)");//dynamic functions
console.log("multiply : " + multiply );
multiply(100,200);
