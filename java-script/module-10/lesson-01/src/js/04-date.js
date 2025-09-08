import '../common.css';

/**
 - Створення
 - Unix-час
 - Методи
 - Різниця часу
 - Date.now()
*/

const date = new Date();
// console.log('🚀 ~ date:', date.getTime());

const year = date.getFullYear();
// console.log('🚀 ~ year:', year);
const day = date.getDay();
// console.log('🚀 ~ day:', day);
const hours = date.getHours();
// console.log('🚀 ~ hours:', hours);
const hoursUTC = date.getUTCHours();
// console.log('🚀 ~ hoursUTC:', hoursUTC);

const date1 = new Date('2030-02-15');

date1.setHours(12);
// console.log('🚀 ~ date1:', date1);

const res = date1.toLocaleTimeString();
// console.log('🚀 ~ res:', res);

// setTimeout(() => {
//   const currentDate = new Date();

//   const deltaTime = currentDate - date;
//   console.log('🚀 ~ deltaTime:', deltaTime);
// }, 2000);

// setInterval(() => {
//   const currentDate = new Date();

//   console.log(currentDate - date);
// }, 1000);

const meetingDate = new Date('March 16, 2030 13:45:00');
// console.log('🚀 ~ meetingDate:', meetingDate);

const timestamp = '2030-03-16T13:45:00';

const birthdayDate = new Date(timestamp);
// console.log('🚀 ~ birthdayDate:', birthdayDate);

const futureDate = new Date(2030, 2, 16);
// console.log('🚀 ~ futureDate:', futureDate);

const saleDate = new Date('2025-09-10');
const currentDate = Date.now();
// console.log('🚀 ~ currentDate:', currentDate);
setInterval(() => {
  const currentDate = Date.now();

  const timeToSale = saleDate - currentDate;
  // console.log('🚀 ~ timeToSale:', timeToSale);
}, 1000);
