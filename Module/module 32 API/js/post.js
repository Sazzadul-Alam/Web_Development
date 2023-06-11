function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}

function displayPost(posts) {
    const postContainer = document.getElementById('posts-container');
    for (const post of posts) {
        const postdiv = document.createElement('div');
        postdiv.innerHTML = `
           <h4>User-</h4>
           <h5>post: title</h5>
           <p>Post Description</p>
        `;
        postContainer.appendChild(postdiv);
    }
}
loadPosts();