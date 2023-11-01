
//step 1
var io=require('fs');

io.readFile('data.txt', 'utf8', function(err,lines)
{
    console.log(lines);
    console.log('Read' + lines.length+ 'bytes from file');
});


//step 2
function displayData(err,lines){
    console.log(lines);
    console.log('Read' + lines.length + ' bytes form file')

}

io.readFile('data.txt', 'utf8',displayData);