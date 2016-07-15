import * as React from "react";
import * as ReactDOM from "react-dom";

import * as firebaseRef from "./util/firebase-ref";
import { Hello } from "./components/Hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("app")
);
