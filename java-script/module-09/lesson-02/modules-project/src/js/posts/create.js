export function createPost({ title, body } = {}) {
  return `<div class="alert alert-primary" role="alert">
  <h3 clas="text-primary-emphasis">${title}</h3>
  <p>${body}</p>
</div>`;
}
