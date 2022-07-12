const os=require('os');

//info about current user 
const user=os.userInfo()

//

const currentOs={
    name:os.type(),
    release:os.release(),
    freemem:os.freemem(),
    totalMem:os.totalmem(),
    uptime:os.uptime()

}

console.log(currentOs);
