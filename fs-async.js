const { readFile,writeFile, write }=require("fs");


console.log('Start')

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
    }
    else{
        const first=result;
        readFile('./content/second.txt','utf8',(err,result)=>{

            if(err){
                console.log(err)
            }
            else{
                const second=result;
                writeFile('./content/write-async.txt',`Here's the result ${first}  and ${second} dis you notice i am appended by flag a`,(err,result)=>{
                    if(err){
                        console.log(err)
                    }
                        console.log('Done with this task')

                })
            }
        })
    }
})

console.log('starting with the next one')