function getStudentData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 3) {
                reject(`Failed to load data for Student ID ${id}`);
            } else {
                resolve({ id: id, name: `Student${id}`, course: "CS" });
            }
        }, 2000);
    });
}

async function showData() {

    const studentIds = [1, 2, 3];

    for (const id of studentIds) {
        console.log(`Loading data for Student ${id}...`);

        /* 
        WHY AWAIT DOES NOT FREEZE THE PROGRAM: 
        Using 'await' pauses this specific function(showData), but it doesn't freeze the whole page. 
        JavaScript is single-threaded, so while it waits for the 2-second timer to finish 
        in the background, it jumps out of this function to handle other tasks like user 
        clicks or animations. Once the promise resolves, it comes back here and finishes.
                */
        const student = await getStudentData(id)
            .then((result) => {
                console.log(`ID: ${result.id}, Name: ${result.name}, Course: ${result.course}`);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // await getStudentData(1)
    //     .then((result) => {
    //         console.log(result);
    //     });

    // await getStudentData(2)
    //     .then((result) => {
    //         console.log(result);
    //     });

    // await getStudentData(3)
    //     .then((result) => {
    //         console.log(result);
    //     });
}

showData();