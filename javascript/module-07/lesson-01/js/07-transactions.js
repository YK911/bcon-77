const transactionHistory = [
  {
    id: '758d5283-358e-4fbb-b222-a17fd04e8916',
    amount: '179.07',
    date: '2012-02-01T22:00:00.000Z',
    business: 'Bogan - DuBuque',
    type: 'deposit',
    name: 'Auto Loan Account 7313',
    account: '19808943',
  },
  {
    id: 'f0463ec4-7104-4adb-a41c-b1c7549055f8',
    amount: '930.87',
    date: '2012-02-01T22:00:00.000Z',
    business: 'Legros, Weimann and Treutel',
    type: 'invoice',
    name: 'Auto Loan Account 0721',
    account: '38277848',
  },
  {
    id: '6c0e5a78-ad9f-46af-8299-44b77f5099d5',
    amount: '704.53',
    date: '2012-02-01T22:00:00.000Z',
    business: 'Beatty, Wisozk and Koch',
    type: 'withdrawal',
    name: 'Savings Account 1894',
    account: '76727204',
  },
  {
    id: '16bd2a9d-7b0e-418f-a75c-7076e8ab6175',
    amount: '656.81',
    date: '2012-02-01T22:00:00.000Z',
    business: 'Hane - Bode',
    type: 'withdrawal',
    name: 'Personal Loan Account 2316',
    account: '27462350',
  },
  {
    id: 'd328680d-4aa5-40ee-912b-9b5149b602e6',
    amount: '280.21',
    date: '2012-02-01T22:00:00.000Z',
    business: 'Schulist - Waelchi',
    type: 'payment',
    name: 'Savings Account 9032',
    account: '99923313',
  },
  {
    id: 'e51fb348-8523-4e39-915f-39687ca4eebf',
    amount: '303.06',
    date: '2012-02-01T22:00:00.000Z',
    business: 'Swaniawski - Hayes',
    type: 'invoice',
    name: 'Checking Account 0573',
    account: '75028346',
  },
  {
    id: 'cd727197-5ffb-45a7-9bf5-9d08092a1cce',
    amount: '462.59',
    date: '2012-02-01T22:00:00.000Z',
    business: 'Berge - Reinger',
    type: 'invoice',
    name: 'Personal Loan Account 8173',
    account: '93437240',
  },
  {
    id: '247e150a-71ba-4df7-9836-5bb400e012bb',
    amount: '242.49',
    date: '2012-02-01T22:00:00.000Z',
    business: 'Stroman Inc',
    type: 'withdrawal',
    name: 'Savings Account 1383',
    account: '18476423',
  },
  {
    id: '6224c740-ff23-429d-854a-c7b310f7653b',
    amount: '770.94',
    date: '2012-02-01T22:00:00.000Z',
    business: 'Johns - Pagac',
    type: 'invoice',
    name: 'Auto Loan Account 1392',
    account: '07680863',
  },
  {
    id: '79ccb1dd-6544-47cc-9a40-ea453985a748',
    amount: '788.40',
    date: '2012-02-01T22:00:00.000Z',
    business: 'Ullrich, Shields and Koelpin',
    type: 'invoice',
    name: 'Personal Loan Account 8318',
    account: '07081761',
  },
];

const tableEl = document.querySelector('.js-transaction-table');

// Create html table markup

// const tableBodyMarkup = transactionHistory.map((transaction, idx) => {
//   const trEl = document.createElement('tr');
//   const tableData = Object.values(transaction);
//   // console.log('🚀 ~ tableData:', tableData);

//   const tdMarkup = tableData.map(data => {
//     const tdEl = document.createElement('td');
//     tdEl.textContent = data;
//     return tdEl;
//   });
//   tdMarkup[0].textContent = idx + 1;
//   tdMarkup[0].setAttribute('id', tableData[0]);
//   trEl.append(...tdMarkup);

//   return trEl;
// });

// console.log('🚀 ~ tableBodyMarkup:', tableBodyMarkup);
// tableEl.append(...tableBodyMarkup);

function makeRowMarkup(transaction = {}, idx) {
  return `
    <tr id="${transaction.id}">
      <td>${idx}</td>
      <td>${transaction.amount}</td>
      <td>${transaction.date}</td>
      <td>${transaction.business}</td>
      <td>${transaction.type}</td>
      <td>${transaction.name}</td>
      <td>${transaction.account}</td>
    </tr>
  `;
}

const transactionsRowMarkup = transactionHistory
  .map((item, idx) => {
    return makeRowMarkup(item, idx + 1);
  })
  .join('');

// console.log('🚀 ~ transactionsRowMarkup:', transactionsRowMarkup);
tableEl.insertAdjacentHTML(
  'beforeend',
  transactionsRowMarkup
  // transactionsRowMarkup + `<script>${window.alert('Block page')}</script>`
);
// tableEl.innerHTML += transactionsRowMarkup; // для одиничної операції вставки даних на сторінку
