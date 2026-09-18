let totalNum = 0;
const total = document.getElementById('total');

for(let i = 1; i<=20; i++){
    if(i === 13)
        continue;
    else if(i === 18)
        break;
        totalNum++;
    console.log("Calling roll number "+i);
    
}
console.log("Total roll numbers called: "+totalNum);
total.innerText = totalNum;