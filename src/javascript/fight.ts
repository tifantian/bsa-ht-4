import Fighter from "./fighter";
import { IFighterProperties } from '../interfaces/interfaces';
import Commentator from './commentator';
 
export default class Fight {
  public firstFighter: IFighterProperties;
  public secondFighter: IFighterProperties;
  public commentator: Commentator; // инстанс комментатор
  public countOfTurns: number;
  public fighter: Fighter;
  constructor(firstFighter?: IFighterProperties, secondFighter?: IFighterProperties) {
    this.firstFighter = firstFighter;
    this.secondFighter = secondFighter;
    this.startGame();
    this.commentator = new Commentator(this.firstFighter, this.secondFighter);
    this.commentator.newGame();
    this.countOfTurns = 0;
    this.fighter = new Fighter();
  }

  startGame(): void {
    const timerID = setInterval( (): void => {
      if (this.countOfTurns === 0) {
        let gotDamage: number = this.fighter.getValueDamage(this.firstFighter);
        gotDamage = (gotDamage < 0) ? -gotDamage : gotDamage;
        this.secondFighter.information.health = (this.secondFighter.information.health as number) - gotDamage;
        (gotDamage === 0) ? this.commentator.fighterMiss(1) : this.commentator.fighterHit(this.secondFighter.information.name, gotDamage, this.secondFighter.information.health)
        if (this.secondFighter.information.health <= 0) {
          clearInterval(timerID);
          this.commentator.finishedGame(this.firstFighter.information.name);
        }
        this.countOfTurns++;
      } else {
        let gotDamage: number = this.fighter.getValueDamage(this.secondFighter);
        gotDamage = (gotDamage < 0) ? -gotDamage : gotDamage;
        this.firstFighter.information.health = (this.firstFighter.information.health as number) - gotDamage;
        (gotDamage === 0) ? this.commentator.fighterMiss(2) : this.commentator.fighterHit(this.firstFighter.information.name, gotDamage, this.firstFighter.information.health);
        if (this.firstFighter.information.health <= 0) {
          clearInterval(timerID);
          this.commentator.finishedGame(this.firstFighter.information.name);
        }
        this.countOfTurns = 0;
      }
    }, 1200);
  }
}
