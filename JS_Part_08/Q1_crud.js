const API_URL = 'https://jsonplaceholder.typicode.com/posts';
let localPosts = [];

// DOM References
const postsGrid = document.getElementById('postsGrid');
const postsCount = document.getElementById('postsCount');
const loadingIndicator = document.getElementById('loadingIndicator');
const statusAlert = document.getElementById('statusAlert');
const addPostForm = document.getElementById('addPostForm');
const reloadPostBtn = document.getElementById('reloadPostBtn');

// displaying status messages to the interface
function displayAlert(message, type = 'success'){
    statusAlert.textContent = message;
    statusAlert.className = `alert alert-${type}`;
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function renderUI(){
    postsGrid.innerHTML = '';
    postsCount.textContent = `${localPosts.length} posts shown`;

    if(localPosts.length === 0){
        postsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #9ca3af; font-size: 14px;">No posts tracking dynamically. Try reloading.</p>';
        return;
    }

    localPosts.forEach(post => {
        const article = document.createElement('article');
    article.className = 'post-item';
    article.innerHTML = `
      <div class="post-body">
        <div class="post-meta">
          <span>Post ID: ${post.id}</span>
          <span>User ID: ${post.userId}</span>
        </div>
        <h3 class="post-item-title">${post.title}</h3>
        <p class="post-item-text">${post.body}</p>
      </div>
      <div class="post-actions">
        <button class="btn-sm btn-green" onclick="handlePut(${post.id})">PUT full update</button>
        <button class="btn-sm btn-orange" onclick="handlePatch(${post.id})">PATCH title</button>
        <button class="btn-sm btn-red" onclick="handleDelete(${post.id})">DELETE</button>
      </div>`;
      postsGrid.appendChild(article);
    });
}

// GET request
async function fetchInitialPosts() {
  loadingIndicator.classList.remove('hidden');
  postsGrid.classList.add('hidden');
  
  try {
    const response = await fetch(`${API_URL}?_limit=6`);
    console.log(`[GET] Response Status Code: ${response.status}`);
    
    if (!response.ok) throw new Error(`HTTP Error Status: ${response.status}`);
    
    localPosts = await response.json();
    renderUI();
    displayAlert(`GET successful! Loaded ${localPosts.length} posts. (Status ${response.status})`, 'success');
  } catch (error) {
    console.error('Error executing network GET pipeline:', error);
    displayAlert(`Failed to connect or fetch network data: ${error.message}`, 'error');
  } finally {
    loadingIndicator.classList.add('hidden');
    postsGrid.classList.remove('hidden');
  }
}

// POST request
addPostForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const title = document.getElementById('postTitleInput').value.trim();
  const userId = parseInt(document.getElementById('userIdInput').value, 10);
  const body = document.getElementById('postContentInput').value.trim();

  const newPostData = { title, body, userId };

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(newPostData)
    });
    
    console.log(`[POST] Response Status Code: ${response.status}`);
    if (!response.ok) throw new Error(`HTTP Error Status: ${response.status}`);

    const serverResponseObj = await response.json();
    
    // Safety check: mock APIs like JSONPlaceholder consistently reuse the ID '101' for creations
    // We adjust it dynamically if that mock collision exists locally to show a clean state array insertion
    if (localPosts.some(p => p.id === serverResponseObj.id)) {
      serverResponseObj.id = localPosts.length > 0 ? Math.max(...localPosts.map(p => p.id)) + 1 : 101;
    }

    // Insert server response structure directly to internal runtime view tracking state arrays
    localPosts.unshift(serverResponseObj);
    renderUI();
    addPostForm.reset();
    document.getElementById('userIdInput').value = "1"; // restore programmatic fallback value defaults
    
    displayAlert(`POST successful! Added tracking Post ID: ${serverResponseObj.id}. (Status ${response.status})`, 'success');
  } catch (error) {
    console.error('Error performing programmatic POST request:', error);
    displayAlert(`Creation payload drop event failed: ${error.message}`, 'error');
  }
});

// PUT
async function handlePut(id) {
  const targetPost = localPosts.find(p => p.id === id);
  if (!targetPost) return;

  // Simple clean mock prompt data gathers
  const newTitle = prompt("Enter replacement Title text:", targetPost.title);
  if (newTitle === null) return; // execution cancelled
  
  const newBody = prompt("Enter replacement Body content text:", targetPost.body);
  if (newBody === null) return;

  // PUT updates the complete resource representation wrapper
  const putPayload = {
    id: targetPost.id,
    title: newTitle.trim(),
    body: newBody.trim(),
    userId: targetPost.userId
  };

  try {
    // Standard mock environments break on mock runtime generated IDs, gracefully fallback safely
    const fetchTargetUrl = id > 100 ? `${API_URL}/1` : `${API_URL}/${id}`;
    const response = await fetch(fetchTargetUrl, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(putPayload)
    });

    console.log(`[PUT] Response Status Code: ${response.status}`);
    if (!response.ok) throw new Error(`HTTP Error Status: ${response.status}`);

    // Update real local state layout indices to mirror success state transformations
    targetPost.title = putPayload.title;
    targetPost.body = putPayload.body;
    renderUI();
    
    displayAlert(`PUT successful for Post ID: ${id}! (Status ${response.status})`, 'success');
  } catch (error) {
    console.error('Error processing PUT structural overwrite:', error);
    displayAlert(`PUT transaction broken down on remote server: ${error.message}`, 'error');
  }
}

// PATCH
// UPDATE partial fragment logic (PATCH)
async function handlePatch(id) {
  const targetPost = localPosts.find(p => p.id === id);
  if (!targetPost) return;

  const newTitle = prompt("Enter updated Title text (leave blank to make no modifications):", targetPost.title);
  if (newTitle === null) return; // execution cancelled

  if (newTitle.trim() === "") {
    displayAlert("PATCH action skipped: No property modification inputs submitted.", "error");
    return;
  }

  const patchPayload = { title: newTitle.trim() };

  try {
    const fetchTargetUrl = id > 100 ? `${API_URL}/1` : `${API_URL}/${id}`;
    const response = await fetch(fetchTargetUrl, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(patchPayload)
    });

    console.log(`[PATCH] Response Status Code: ${response.status}`);
    if (!response.ok) throw new Error(`HTTP Error Status: ${response.status}`);

    // Assign dynamic tracking property mutations into view arrays
    targetPost.title = patchPayload.title;
    renderUI();
    
    displayAlert(`PATCH partial update successful for Post ID: ${id}! (Status ${response.status})`, 'success');
  } catch (error) {
    console.error('Error firing remote properties PATCH transaction payload:', error);
    displayAlert(`PATCH properties modification processing failed: ${error.message}`, 'error');
  }
}

// Delete
async function handleDelete(id) {
  if (!confirm(`Are you absolutely sure you want to remove Post ID: ${id}?`)) return;

  try {
    const fetchTargetUrl = id > 100 ? `${API_URL}/1` : `${API_URL}/${id}`;
    const response = await fetch(fetchTargetUrl, { method: 'DELETE' });

    console.log(`[DELETE] Response Status Code: ${response.status}`);
    if (!response.ok) throw new Error(`HTTP Error Status: ${response.status}`);

    // Splice targeted array elements from local layout configuration indices
    localPosts = localPosts.filter(post => post.id !== id);
    renderUI();
    
    displayAlert(`DELETE operation successful for Post ID: ${id}! (Status ${response.status})`, 'success');
  } catch (error) {
    console.error('Error throwing target item DELETE request event pipelines:', error);
    displayAlert(`Failed to securely purge item from database reference nodes: ${error.message}`, 'error');
  }
}

// Global Core UI Runtime Initializers
reloadPostsBtn.addEventListener('click', fetchInitialPosts);
window.addEventListener('DOMContentLoaded', fetchInitialPosts);
