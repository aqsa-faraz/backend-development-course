// Workflow using nested callbacks

function getOrder(step, callback) {
     console.log(`Start ${step}`);
    setTimeout(() => {
        console.log("Done", step);
        callback();
    }, 1000);
}

function preparingOrder() {

    getOrder("preparing order", function () {
        getOrder("packing order", function () {
            console.log("Order is ready! Please collect your order.");
        });
        // If we had more steps here, the code will keep extending horizontally, making it difficult to read and understand and turning it into a hell.
    });
}

preparingOrder();

// second version of the workflow using a cleaner Promise-based approach
function notifyCustomer2(step) {
    return new Promise((resolve) => {
        console.log(`Start ${step}`);
        setTimeout(() => {
            console.log(`Done ${step}`);
            resolve();
        }, 2000);
    });
}

function getOrderPrepared() {

    notifyCustomer2("preparing order")
        .then(() => {
            return notifyCustomer2("packing order");
        })
        .then(() => {
            console.log("Order is ready! Please collect your order!");

        })
        .catch((error) => {
            console.log("Error", error);
        });
}

getOrderPrepared();

// READABILITY COMPARISON
// ----------------------
// The callback version is basically "callback hell" because each step is nested inside the last one, making a giant pyramid shape that pushes the code all the way to the right. It's super messy and hard to read because you get lost in a jungle of closing brackets and parentheses }); at the bottom.
//The Promise version fixes this by flattening the whole thing into a .then() chain. Instead of nesting inside each other, the steps just stack neatly on top of each other. It reads way better from top to bottom, and if you want to add a fourth or fifth step, you just stack another .then() onto the end without messing up your indentation.