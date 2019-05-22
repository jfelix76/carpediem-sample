

export class GreetingElement extends HTMLElement {
    public static observedAttributes = ['title'];
  
    attributeChangedCallback() {
        this.innerHTML = `<span><b>CD</b>&nbsp;<span>${this.title}</span></span>`;
    }
  }
  
  customElements.define('test-greeting', GreetingElement);
