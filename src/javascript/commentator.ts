import App from "./app";
import { IFighterProperties } from '../interfaces/interfaces';

export default class Commentator {
  public textField: HTMLElement;
  public firstFighter: IFighterProperties;
  public secondFighter: IFighterProperties;
  constructor(firstFighter: IFighterProperties, secondFighter: IFighterProperties) {
    this.firstFighter = firstFighter;
    this.secondFighter = secondFighter;
    this.textField = App.rootElement.querySelector('#information-element');
  }

  newGame() {
    this.textField.innerHTML = `Началась новая игра между ${this.firstFighter.name} и ${this.secondFighter.name}`;
  }

  fighterMiss(fighterNumber: number) {
    if(fighterNumber === 1) {
      this.textField.innerHTML = `${this.firstFighter.name} промахнулся!`;
    }
    if(fighterNumber === 2) {
      this.textField.innerHTML = `${this.secondFighter.name} промахнулся!`
    }
  }

  fighterHit(name: string, damage: number, health: number) {
    this.textField.innerHTML = `${name} получил ${damage.toFixed(2)} урона, у него остается ${health.toFixed(2)} здоровья!`;
  }

  finishedGame(name: string) {
    this.textField.innerHTML = `Результаты:  Побеждает ${name}`;
  }
}