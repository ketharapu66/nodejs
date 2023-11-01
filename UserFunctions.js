readinput=require('readline-sync')


function validate(empname,empage)
{
    if(empname.length<5)
    console.log("length of name must be minimum of 5 caracters.");
    if(empage<18)
    console.log("not eligible for job under labour laws ");

}
function callValidate(valdata)
{
    console.log('enter youer name');
ename=readinput.question();
console.log("enter your age");
eage=Number(readinput.question());
validate(ename,eage);
valdata(ename,eage);

}
console
callValidate(validate)

