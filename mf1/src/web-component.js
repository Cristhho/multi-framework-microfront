import { createRoot } from "react-dom/client";
import QrGenerator from "./QrGenerator";

class QrGeneratorElement extends HTMLElement {
  connectedCallback() {
    createRoot(this).render(<QrGenerator />);
  }
}

customElements.define("qr-generator", QrGeneratorElement);
