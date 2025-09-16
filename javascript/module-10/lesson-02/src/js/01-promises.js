import '../common.css';

/**
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */

// const isSuccess = Math.random() > 0.5; // true
// console.log('🚀 ~ isSuccess:', isSuccess);

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // if (isSuccess) {
    //   resolve(5);
    // } else {
    //   reject('Error');
    // }
  }, 2000);
});
// console.log('🚀 ~ promise:', promise);

const promise1 = new Promise((resolve, reject) => {
  // {Status: fullfield, Result: ""}
  setTimeout(() => {
    // if (isSuccess) {
    //   resolve(
    //     'Проміс виконався успішно, із результатом (виконаний, fulfilled)'
    //   );
    // } else {
    //   reject('Проміс виконався з помилкою (відхилений, rejected)');
    // }
  }, 2000);
});
// console.log('🚀 ~ promise1:', promise1);

promise1
  .then(resolve => {
    // console.log(resolve);
  })
  .catch(reject => {
    // console.log(reject);
  })
  .finally(() => {
    // console.log('Finally');
  });
// promise1.then(onResolve).catch(onReject).finally(onFinally);

// function onResolve(result) {
//   console.log(result);
// }
// function onReject(result) {
//   console.log(result);
// }
// function onFinally() {
//   console.log('Inside in finally method');
// }

// console.log('After promise');

// "Проміс виконався успішно, із результатом (виконаний, fulfilled)";
// "Проміс виконався з помилкою (відхилений, rejected)"

/**
 * Ланцюги промісів
 * - декілька послідовних then
 * - then повертає проміс
 */

const loaderEl = document.querySelector('.backdrop');

loaderEl.classList.remove('hide');

const response = new Promise((resolve, reject) => {
  const serverResponse = true;

  const fetchData = {
    data: [],
    status: 200,
    ok: true,
  };

  setTimeout(() => {
    if (serverResponse) {
      fetchData.data = [
        'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8',
        'https://images.unsplash.com/photo-1552053831-71594a27632d',
        'https://images.unsplash.com/photo-1625316708582-7c38734be31d',
      ];
      resolve(fetchData);
    } else {
      fetchData.status = 500;
      fetchData.ok = false;
      fetchData.message = '❌ An erorr occurs';

      reject(fetchData);
    }
  }, 2000);
});

response
  .then(response => {
    if (response.ok) {
      return response.data;
    }
  })
  .then(images => {
    return createMarkup(images);
    // render(createMarkup(images), document.querySelector('.js-gallery'));
  })
  .then(markup => {
    const selector = document.querySelector('.js-gallery');
    render(markup, selector);
  })
  .catch(error => {
    console.log(error.message);
    render(`<h2>${error.message}</h2>`, document.querySelector('body'));
  })
  .finally(() => {
    loaderEl.classList.add('hide');
  });

function createMarkup(data = []) {
  return data
    .map((imgData = '') => {
      return `<div class="col">
        <img
          class="img-fluid"
          src="${imgData}"
          alt="Some text"
        />
      </div>`;
    })
    .join('');
}

function render(markup, selector) {
  selector.insertAdjacentHTML('beforeend', markup);
}
