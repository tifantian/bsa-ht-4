class Fighter {
  public name: string;
  public health: number;
  public attack: number;
  public defense: number;
  constructor(name?: string, health?: number, attack?: number, defense?: number) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
  }

  getValueDamage(fighter: any): number { // объект с объектом
    this.name = fighter.information.name;
    this.health = fighter.information.health;
    this.attack = fighter.information.attack;
    this.defense = fighter.information.defense;
    return this.getAttack() - this.getDefense();
  }

  getRandomValue(): number {
   return Math.random() * 2;
  }
  
  getAttack(): number {
    const criticalHitChance = this.getRandomValue();
    return this.attack * criticalHitChance;
  }

  getDefense(): number {
    const blockChance = this.getRandomValue();
    return this.defense * blockChance;
  }
}

export default Fighter;
