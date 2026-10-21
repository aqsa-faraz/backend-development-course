const tickets = {
    "TKT-101": {
        id: "TKT-101",
        customer: "Hamza Khan",
        status: "Open"
    },
    "TKT-102": {
        id: "TKT-102",
        customer: "Ahmed Ali",
        status: "In-Progress"
    },
    "TKT-103": {
        id: "TKT-103",
        customer: "Shoaib Akhtar",
        status: "Resolved"
    }
};

function retrieveTicket(ticket_id) {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            const ticket = tickets[ticket_id];
            if (ticket) { // the ticket exists
                resolve({ id: ticket.id, customer: ticket.customer, status: ticket.status });
            } else { // ticket doesnot exists
                reject(`Unable to find ticket: ${ticket_id}`);
            }
        }, 2000);
    })
}

async function displayTicket(id) {

    console.log(`retrieving ticket: ${id}...`);
    const ticketDetails = await retrieveTicket(id)
    .then(result => console.log(result))
    .catch(error => console.log(error));
}

displayTicket("TKT-103"); // ticket exixts
displayTicket("TKT-100"); //unable to find ticket