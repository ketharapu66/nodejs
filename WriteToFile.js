var io=require('fs');
var line="";
var readLine=require('readline-sync');
var cnt=0;
while(cnt<5)
{
    console.log('enter line');
    line=readLine.question();
    //io.writeFile('doc.txt' ,line,dispalyStatus);
    line+='\n';
   // io.appendFile('doc.txt',line,dispalyStatus);
   io.appendFileSync('doc.txt',line,dispalyStatus);

    cnt++;
}

function dispalyStatus(){
    console.log('wrote' + cnt + ' to a file..');
}

