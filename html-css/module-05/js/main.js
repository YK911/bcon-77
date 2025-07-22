// console.log(window);

console.log(document.forms.reviews_form);
const reviewsForm = document.forms.reviews_form;

reviewsForm.addEventListener('submit',
  (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    console.log(form.elements);

    const {user_name, user_email } = form.elements;

    console.log(user_name.value, user_email.value);
    // form.reset();
  }
)

const inputSelector = document.querySelector("input[type='range']")
const spanSelector = document.querySelector('.f-size');

inputSelector.addEventListener("input", (event) => {
  const input = event.currentTarget;
  spanSelector.textContent = input.value;
})
