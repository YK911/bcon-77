import { createPost } from './create';

export function initPosts(resource) {
  const containerEl = document.body;

  const postsMarkup = resource.map(createPost).join('');

  containerEl.insertAdjacentHTML('beforeend', postsMarkup);
}
