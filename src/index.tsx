import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";

import App from "./App";

import { store } from "./redux/store";

const Global = createGlobalStyle`
* {
  margin: 0;
  padding 0;
  box-sizing: border-box;
  list-style: none;
  font-family: "Kurale", serif;
}
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Global />
      <App />
    </Provider>
  </BrowserRouter>
);
