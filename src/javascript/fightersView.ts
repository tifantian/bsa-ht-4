import View from './view';
import FighterView from './fighterView';
import { fighterService } from './services/fightersService';
import { IFighter, IFighterProperties } from '../interfaces/interfaces';
import Fight from "./fight";

class FightersView extends View {
  constructor(fighters: IFighter[]) {
    super();
    this.createFighters(fighters);
  }

  fightersDetailsMap = new Map();
  fighters = new Array();

  createFighters(fighters: IFighter[]) {
    const fighterElements = fighters.map((fighter: any) => {
      const fighterView = new FighterView(fighter, this.handleClick);
      return fighterView.element;
    });

    this.element = this.createElement({ tagName: 'div', className: 'fighters' });
    this.element.append(...fighterElements);
  }

  handleFighterClick(event: MouseEvent, fighter: IFighterProperties) {
    if (!this.fightersDetailsMap.has(fighter._id)) {
      fighterService.getFighterDetails(fighter._id)
        .then(detailsOfOneFighter => {
          detailsOfOneFighter.health = prompt(`Введите здоровье игроку ${detailsOfOneFighter.name} (стандартное значение - ${detailsOfOneFighter.health}): `, `${detailsOfOneFighter.health}`);
          detailsOfOneFighter.attack = prompt(`Введите атаку игроку ${detailsOfOneFighter.name} (стандартное значение - ${detailsOfOneFighter.attack}): `, `${detailsOfOneFighter.attack}`);
          detailsOfOneFighter.defense = prompt(`Введите защиту игроку ${detailsOfOneFighter.name} (стандартное значение - ${detailsOfOneFighter.defense  }): `, `${detailsOfOneFighter.defense}`);
          fighter.information = detailsOfOneFighter;
          this.fighters.push(fighter);
          if (this.fighters.length === 2) {
            new Fight(...this.fighters);
            this.fighters.length = 0;
          }
        });
    }
  }

  private handleClick = this.handleFighterClick.bind(this);
}

export default FightersView;
