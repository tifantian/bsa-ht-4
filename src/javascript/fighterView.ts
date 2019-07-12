import View from './view';
import { IFighter } from '../interfaces/interfaces';

type Callback = (event: MouseEvent, fighter: IFighter) => void;

class FighterView extends View {
  constructor(fighter: IFighter, handleClick: Callback) {
    super();
    this.createFighter(fighter, handleClick);
  }

  createFighter(fighter: IFighter, handleClick: Callback) {
    const { name, source } = fighter;
    const nameElement = this.createName(name);
    const imageElement = this.createImage(source);

    this.element = this.createElement({ tagName: 'div', className: 'fighter' });
    this.element.append(imageElement, nameElement);
    this.element.addEventListener('click', event => handleClick(event, fighter), false);
  }

  createName(name: string) {
    const nameElement = this.createElement({ tagName: 'span', className: 'name' });
    nameElement.innerText = name;

    return nameElement;
  }

  createImage(source: string) {
    const attributes = { src: source };
    const imgElement = this.createElement({
      tagName: 'img',
      className: 'fighter-image',
      attributes
    });

    return imgElement;
  }
}

export default FighterView;
