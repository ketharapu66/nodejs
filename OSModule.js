var osmod=require('os');
console.log(osmod.arch());
console.log("free memory in bytes" + osmod.freemem());
var info=osmod.cpus();
for(cnt=0;cnt<info.length;cnt++)
{
    console.log("cpu # " + cnt+1);
    console.log(info[cnt].model);
    console.log(info[cnt].speed);
    console.log(info[cnt].times);

}

console.log("Your machine name: " + osmod.hostname);
console.log("machine architeture : " + osmod.machine);
console.log("platform : " + osmod.platform);
console.log("version and release  " + osmod.release() + "&& " + osmod.release());
console.log("total memory " + osmod.totalmem);
user=osmod.userInfo();
console.log("user " + user);




