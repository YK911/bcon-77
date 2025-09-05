export function createImg({ preview, original, description } = {}) {
  return `
 <li class="col">
    <a href="${original}">
      <img src="${preview}" alt="${description}"/>
    </a>
 </li>
  `;
}
