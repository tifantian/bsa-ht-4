import { ICreateProperties } from '../interfaces/interfaces';

class View {
  element: HTMLElement;

  createElement({ tagName, className = '', attributes = {} }: ICreateProperties) {
    const element = document.createElement(tagName);
    element.classList.add(className);
    Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));

    return element;
  }
}

export default View;
