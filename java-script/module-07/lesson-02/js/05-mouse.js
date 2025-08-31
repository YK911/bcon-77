/**
 * Події миші
 * - mouseenter і mouseleave (це ховер)
 * - mouseover і mouseout
 * - mousemove (chatty event - балакуча подія)
 */

const boxRef = document.querySelector('.js-box');
const pargrRef = document.querySelector('.js-paragraph');

// boxRef.addEventListener('mouseenter', handleMouseEnter);
// boxRef.addEventListener('mouseleave', handleMouseLeave);

function handleMouseEnter(event) {
  console.log('Enter under box');

  console.log(event);
  console.log(event.target);
}

function handleMouseLeave(event) {
  console.log('Leave  box');

  // event.target;
}

// boxRef.addEventListener('mouseover', handleMouseOver);
// boxRef.addEventListener('mouseout', handleMouseOut);

function handleMouseOver(event) {
  console.log('Over the element');
  console.log(event.target);
}
function handleMouseOut(event) {
  console.log('Over the element');
  console.log(event.target);
}

// boxRef.addEventListener('mousemove', handleMouseMove);

function handleMouseMove(event) {
  // console.log('Moving mouse');
  console.log('Coords:', event.x, event.y);
}

pargrRef.addEventListener('contextmenu', event => {
  event.preventDefault();
});
