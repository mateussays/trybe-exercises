const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAttack = (dragon) => {
  const minDamage = 15;
  const {strength} = dragon;
  const dragonDamage = Math.floor(Math.random() * (strength - minDamage) + minDamage);
  return dragonDamage;
}

const warriorAttack = (warrior) => {
  const { weaponDmg } = warrior;
  const minDamage = warrior.strength;
  const maxDamage = minDamage * weaponDmg;
  const warriorDamage = Math.floor((Math.random() * (maxDamage - minDamage) + minDamage));
  return warriorDamage;
}

const mageAttack = (mage) => {
  const mageMana = mage.mana;
  const minDmg = mage.intelligence;
  const maxDmg = minDmg * 2;
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana...',
  };

  if (mageMana > 15) {
    const mageDamage = Math.floor((Math.random() * (maxDmg - minDmg)) + minDmg);
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDamage;
    return turnStats;
  }
    return turnStats;
};

