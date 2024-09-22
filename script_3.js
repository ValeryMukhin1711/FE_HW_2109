


const API_URL = 'https://jsonplaceholder.typicode.com/posts';




function displayPosts(posts) {
    const postsContainer = document.getElementById('posts');
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        postElement.innerHTML = `
        <h2${post.userId}</h2>
        <h2>${post.title}</h2>
        <p>${post.body}
        `;

        postsContainer.appendChild(postElement);
    });
}



fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        displayPosts(data);

    })
    .catch(error => console.error('Ошибка!', error));


