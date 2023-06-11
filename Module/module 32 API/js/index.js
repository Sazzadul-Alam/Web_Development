function loadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
        .then(res => res.json())
        .then(data => displayUsers2(data))
}
function displayUsers2(data) {
    const ul = document.getElementById('users-list')
    for (const user of data) {
        console.log(user.email);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}