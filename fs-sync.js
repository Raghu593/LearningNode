const { readFileSync,writeFileSync }=require("fs");

console.log('start')
const first=readFileSync('./content/first.txt','utf8');
const second=readFileSync('./content/second.txt','utf8');

writeFileSync('./content/thisfilewrittenbynode',`Here's the result ${first} dis you notice i am appended by flag a`,{flag:'a'})

console.log('Done with the task')
console.log('starting with the next one')


