/**
 * Об'єкти
 *
 * - Короткі властивості
 * - Обчислювальні властивості
 */

const username = 'Mango';
const email = 'mango@mail.com';
const password = 'qwery+123';

const credentials = {
  username,
  email,
  password,
};

// console.log(credentials);
// console.log(credentials.username);
// console.log(credentials.email);

/**
 * -------------------------
 */

// console.dir(color.name);

const inputName = color.name;
const inputValue = color.value;

const colorPickerData = {
  [inputName]: inputValue,
};

// console.log(colorPickerData);

function getColorPickerData(event) {
  // element = undefined
  // arguments = []

  const element = event.target;

  const name = element.name;
  const value = element.value;

  const data = {
    [name]: value,
  };

  console.log('🚀 ~ getColorPickerData:', data);

  return data;

  // return undefined
}

console.dir(color);
color.onchange = getColorPickerData;
colorPicker.onchange = getColorPickerData;

// colorPicker.onclose = getColorPickerData;

// const data = getColorPickerData(color);
// console.log('🚀 ~ data:', data);
