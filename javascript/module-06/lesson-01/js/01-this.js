// 'use strict';
/**
 * Контекст виконання функції
 *
 * - Ключове слово this
 * - Глобальний контекст
 * - Контекст методу об'єкта
 */

/**
 * Глобальний контекст
 */
function foo(a, b) {
  // a = undefined
  // b = undefined
  // arguments = []
  // this = undefined

  console.log('foo -> this', this);

  // return undefined
}

// foo()
// console.dir(foo);

/**
 * Контекст методу об'єкта
 */

const user = {
  tag: 'Mango',

  showTag() {
    console.log('showTag -> this', this);
    console.log('User name', this.tag);
  },
};

// user.showTag();

/**
 * Контекст методу об'єкта, але оголошена як зовнішня функція.
 */

function showTag() {
  console.log('showTag -> this', this);
  console.log('showTag -> this.tag', this?.tag);
}

// showTag();

const mango = {
  tag: 'Mango',

  // showUserTag: function showTag() {
  //   console.log('showTag -> this', this);
  //   console.log('showTag -> this.tag', this?.tag);
  // },
};

mango.showUserTag = showTag;
// console.log('mango', mango);

// mango.showUserTag();

// mango.showTag(); // undefined -> undefined()

/**
 * Виклик без контексту, але оголошена як метод об'єкта.
 */

const poly = {
  tag: 'Poly',

  showTag() {
    console.log('showTag -> this', this);
    console.log('showTag -> this.tag', this.tag);
  },
};

// poly.showTag();

const outerShowTag = poly.showTag;

// outerShowTag();

/**
 * Контекст у callback-функціях
 */
const jacob = {
  tag: 'Jacob',

  showTag() {
    console.log('showTag -> this', this);
    console.log('showTag -> this.tag', this.tag);
  },
};

function invokeAction(callback) {
  // this = undefined
  console.log(callback);
  callback();
}

invokeAction(jacob.showTag);
