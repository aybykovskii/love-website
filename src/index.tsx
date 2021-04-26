import React from "react";
import ReactDom from "react-dom";

import { App } from "./App";
import { ContextsProvider } from "./contexts";

ReactDom.render(
  <ContextsProvider>
    <App />
  </ContextsProvider>,
  document.getElementById("app")
);
