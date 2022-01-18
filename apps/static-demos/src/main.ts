// import './app/app.element.ts';
import { test } from "@nx-configuration/static"

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    this.innerHTML = test();
  }
}

customElements.define('nx-configuration-root', AppElement);
