function registerStudent(studentName, seatIsAvailable){
    return new Promise((resolve, reject) => {
        if(seatIsAvailable){
            // fulfill the promise if seat is available
            resolve(`Congratulations ${studentName}! Registration successful!.`);
        }else{
            // reject the promise if seat is unavailable
            reject(`Registration Failed for ${studentName}. Currently No seats available!`);
        }
    })
}

// test case 1 - seat is available
registerStudent("Ahmed", true)
.then((result)=> {
    console.log(result)
})
.catch((error) => {
    console.log(error);
})

// test case 2 - no seat available
registerStudent("Sara", false)
.then((result)=> {
    console.log(result)
})
.catch((error)=> {
    console.log(error) }
);