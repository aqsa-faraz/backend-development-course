const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
const outputDiv = document.getElementById('output');

// Helper to print text dynamically on the screen
function logToScreen(actionName, statusCode, data) {
  outputDiv.innerHTML = `<strong>Action:</strong> ${actionName}\n` +
                        `<strong>Status Code:</strong> ${statusCode}\n` +
                        `<strong>Response Data:</strong>\n${JSON.stringify(data, null, 2)}`;
}


//   REUSABLE REQUEST HELPER
//  Accepts a URL, method, and an optional body object.
 
async function makeApiRequest(url, method, bodyData = null) {
  const options = {
    method: method,
    headers: {}
  };

  
    // WHY DO WE NEED JSON.stringify() AND THE Content-Type HEADER?
    
    // 1. JSON.stringify(): We use JSON.stringify() 
    //    to transform our live JavaScript objects into a structured text string format (JSON) 
    //    so it can be packaged and sent over the HTTP connection.
    
    // 2. Content-Type Header ('application/json'): Servers are built to handle many formats 
    //   (like XML, form-data, or plain text). By adding this header, we explicitly tell the backend 
    //    server: "Hey, the incoming string data in this packet is structured as JSON. Please use your 
    //   JSON parser middleware to read it properly."
   
  if (bodyData) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(bodyData);
  }

  
  const response = await fetch(url, options);
  
  const data = await response.json();
  
  return {
    status: response.status,
    data: data
  };
}

//  POST REQUEST (Form Submission)
document.getElementById('announcementForm').addEventListener('submit', async (e) => {
  e.preventDefault(); // Stop standard browser page refresh
  
  const payload = {
    title: document.getElementById('title').value,
    body: document.getElementById('content').value,
    userId: parseInt(document.getElementById('userId').value)
  };

  try {
    const result = await makeApiRequest(BASE_URL, 'POST', payload);
    logToScreen('POST (Create Announcement)', result.status, result.data);
  } catch (error) {
    outputDiv.innerText = 'Error running POST request: ' + error.message;
  }
});

// PUT REQUEST (Complete Overwrite of /posts/1) 
document.getElementById('btnPut').addEventListener('click', async () => {
  const completeRecord = {
    id: 1,
    title: 'Completely Overwritten Announcement Title',
    body: 'This body text replaces whatever data was originally stored here.',
    userId: 1
  };

  try {
    const result = await makeApiRequest(`${BASE_URL}/1`, 'PUT', completeRecord);
    logToScreen('PUT (Replace Record /posts/1)', result.status, result.data);
  } catch (error) {
    outputDiv.innerText = 'Error running PUT request: ' + error.message;
  }
});

// PATCH REQUEST (Partial Update to /posts/1) 
document.getElementById('btnPatch').addEventListener('click', async () => {
  const singleFieldChange = {
    title: 'Only the Title Has Been Changed!'
  };

  try {
    const result = await makeApiRequest(`${BASE_URL}/1`, 'PATCH', singleFieldChange);
    logToScreen('PATCH (Update Single Field /posts/1)', result.status, result.data);
  } catch (error) {
    outputDiv.innerText = 'Error running PATCH request: ' + error.message;
  }
});

// DELETE REQUEST (Destroy /posts/1)
document.getElementById('btnDelete').addEventListener('click', async () => {
  try {
    const result = await makeApiRequest(`${BASE_URL}/1`, 'DELETE');
    logToScreen('DELETE (Remove Record /posts/1)', result.status, result.data);
  } catch (error) {
    outputDiv.innerText = 'Error running DELETE request: ' + error.message;
  }
});
