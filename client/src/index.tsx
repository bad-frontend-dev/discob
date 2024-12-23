import { render } from "preact";
import { useState, useEffect } from "preact/hooks";
import { socket } from "./socket";

import "./style.scss";

export function App() {
    return <div></div>;
}

render(<App />, document.getElementById("app"));
