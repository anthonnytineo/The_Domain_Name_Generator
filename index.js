import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extension = [".com", ".cl"];

for (let i = 0; i <= pronoun.length; i++) {
  for (let j = 0; j <= adj.length; j++) {
    for (let k = 0; k <= noun.length; k++) {
      for (let l = 0; l <= extension.length; l++) {
        console.log(pronoun[i] + adj[j] + noun[k] + extension[l]);
      }
    }
  }
}
