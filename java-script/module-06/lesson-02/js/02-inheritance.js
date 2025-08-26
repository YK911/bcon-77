/**
 * Наслідування класів
 *
 *  - extends
 *  - Конструктор дочірнього класу (super)
 *  - Методи дочірнього класу
 */

class Hero {
  constructor({ name, exp } = {}) {
    this.name = name;
    this.exp = exp;
  }

  gainExp(amount) {
    console.log(`Hero ${this.name} recieved ${amount} experience`);
    this.exp += amount;
  }
}

class Warrior extends Hero {
  constructor({ weapon, ...params } = {}) {
    super(params);

    this.weapon = weapon;
  }

  attack() {
    console.log(`${this.name} attacks with ${this.weapon}`);
  }
}

class Berserk extends Warrior {
  constructor({ superSkill, ...params }) {
    super(params);

    this.superSkill = superSkill;
  }
}
class MidnightKnight extends Warrior {
  constructor() {
    super();
  }
}

class Mage extends Hero {
  constructor(params) {
    super({ name: params.name, exp: params.exp });

    this.spells = params.spells; // []
  }

  attack() {
    const randomNumber = Math.random();

    if (randomNumber > 0.4) {
      console.log('Missed spell');
      return;
    }

    const spellIdx = parseInt(randomNumber * 10);

    console.log(`${this.name} attacks with ${this.spells[spellIdx]}`);
    return true;
  }
}

const goblinParams = {
  name: 'Hercules',
  exp: 100,
  weapon: 'axe',
};
const goblin = new Warrior(goblinParams);
// console.log('🚀 ~ goblin:', goblin);
// goblin.attack();
// goblin.gainExp(1000);
// console.log(goblin.exp);

const mageParams = {
  name: 'Merlin',
  exp: 200,
  spells: ['fireball', 'meteor storm', 'magic missile', 'necromancy'],
};
const mage = new Mage(mageParams);

// if (mage.attack() !== undefined) {
//   mage.gainExp(200);
//   console.log(mage.exp);
// }

const berserkInterface = {
  name: 'Harald',
  exp: 1000,
  weapon: 'sword',
  superSkill: 'rampage',
};
const berserk = new Berserk(berserkInterface);

console.log(berserk);
berserk.attack();
berserk.gainExp(100);
console.log(berserk.exp);
