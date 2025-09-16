/**
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress - не працюють meta-кнопки
 * - Властивості key та code
 */
// document.addEventListener('keypress', handleKeyboardPress);
document.addEventListener('keydown', handleKeyboardPress);

function handleKeyboardPress(event) {
  if (event.shiftKey && event.code === 'KeyE') {
    console.log('🚀 ~ handleKeyboardPress:', event);
  }

  // console.log(event.code);
  // console.log(event.key);
}
/**
 * Обробка комбінацій клавіш
 */
document.addEventListener('keydown', handleComboKeyPress);

function handleComboKeyPress(event) {
  if (event.metaKey && event.code === 'KeyC') {
    console.log('Cancel copy');
    event.preventDefault();
  }
  if (event.metaKey && event.code === 'KeyV') {
    console.log('Cancel paste');
    event.preventDefault();
  }
}
