import { createRoot } from "react-dom/client";

import QrGenerator from "./QrGenerator";
import "./index.css";

const App = () => (
  <div className="container">
    <QrGenerator />
  </div>
);

const root = createRoot(document.getElementById("app"));
root.render(<App />);
