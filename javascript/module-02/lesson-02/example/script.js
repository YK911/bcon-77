// console.log("Connected");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((data) => data.json())
  .then((posts) => {
    const postsMarkup = createPosts(posts);
    console.log("🚀 ~ postsMarkup:", postsMarkup)
    postsRow.innerHTML = postsMarkup;
  })


  function createPosts(posts) {
    let markup = '';
    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];

      markup +=`
        <div class="card">
          <div class="card-header">
            Featured
          </div>
          <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">${post.body}</p>
            <a href="#" class="btn btn-primary">Read more</a>
          </div>
        </div>
        `
    }

    return markup
  }
