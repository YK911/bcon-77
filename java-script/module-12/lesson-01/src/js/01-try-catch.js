import "../common.css";

/**
 * Обробка помилок з try...catch
 *
 * - Синтаксис
 * - Які помилки ловить
 *  - ❌ помилки парсингу (parsing errors)
 *  - ✅ помилки виконання (runtime errors)
 * - Об'єкт помилки
 *  - name
 *  - message
 *  - stack
 * - Блок catch без об'єкта помилки
 */

try {
  const name = "Mango";
  // console.log(name);
  console.log(nome);

  let counter = 1;
  console.log("🚀 ~ counter:", counter);
} catch (error) {
  console.dir(error);
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}
