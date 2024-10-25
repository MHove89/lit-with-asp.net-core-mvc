import {html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { LitElement, unsafeCSS } from 'lit';
import bootstrap from "bootstrap/dist/css/bootstrap.css?inline"

@customElement("my-counter")
export class Counter extends LitElement {
    static styles = unsafeCSS(bootstrap);
    constructor() {
        super();
        this.count = 0;
    }

    @property({ type: Number })
    count = 0;
    increment() {
        this.count++;
    }
    render() {
        return html`
            <h2>Counter</h2>
            <p role="status">Current count: ${this.count}</p>
            <button class="btn btn-primary" @click="${this.increment}">Click me</button>
        `
    }
}