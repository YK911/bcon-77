const refs = {
  balanceEl: document.querySelector('[data-balance]'),
  depositInputEl: document.querySelector('[data-deposit]'),
  withdrawInputEl: document.querySelector('[data-withdraw]'),
  depositBtnEl: document.querySelector('[data-btn-deposit]'),
  withdrawBtnEl: document.querySelector('[data-btn-withdraw]'),
  selectTransactionTypeEl: document.querySelector('[data-transaction-type]'),
  balanceTypeEl: document.querySelector('[data-transaction-type-amount]'),
  transactionDetailsEl: document.querySelector('[data-transaction-id]'),
};

/**
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/**
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /**
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  createTransaction(amount, type) {
    return {
      id: this.transactions.length + 1,
      // Shorthand properties
      amount,
      type,
    };
  },

  /**
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
   */
  deposit(amount) {
    this.balance += amount;

    const currentTransaction = this.createTransaction(
      amount,
      Transaction.DEPOSIT
    );

    this.transactions.push(currentTransaction);
  },

  /**
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      console.warn('Not enough money');
      return null;
    }

    this.balance -= amount;

    const currentTransaction = this.createTransaction(
      amount,
      Transaction.WITHDRAW
    );

    this.transactions.push(currentTransaction);
  },

  /**
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },

  /**
   * Метод шукає та повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }

    return 'Transaction is not find';
  },

  /**
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let total = 0;

    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }

    return total;
  },
};

// account.deposit(1000);
// account.withdraw(500);
// account.deposit(100);
// account.deposit(400);
// account.withdraw(500);
// account.deposit(200);

// console.log(account.getBalance());
// console.log(account.getTransactionDetails(2));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));

refs.depositBtnEl.onclick = depositBtnHandler;
refs.withdrawBtnEl.onclick = withdrawBtnHandler;
refs.selectTransactionTypeEl.onchange = selectTransactionTypeHandler;

function depositBtnHandler() {
  const depositValue = Number(refs.depositInputEl.value);
  account.deposit(depositValue);
  refs.balanceEl.textContent = account.getBalance();
  refs.depositInputEl.value = 0;
}

function withdrawBtnHandler() {
  const withdrawValue = Number(refs.withdrawInputEl.value);
  const result = account.withdraw(withdrawValue);

  if (result === null) {
    return;
  }

  refs.balanceEl.textContent = account.getBalance();
  refs.withdrawInputEl.value = 0;
}

function selectTransactionTypeHandler(event) {
  const transactionType = event.target.selectedOptions[0].value;

  const totalAmount = account.getTransactionTotal(transactionType);

  // console.log(totalAmount);

  refs.balanceTypeEl.textContent = totalAmount;
}
