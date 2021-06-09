import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);







let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let extension = ['.com', '.net','.org'];

let dominio1 = Math.floor(Math.random()*pronoun.length);
let dominio2 = Math.floor(Math.random()*adj.length);
let dominio3 = Math.floor(Math.random()*noun.length);
let dominio4 = Math.floor(Math.random()*extension.length);

document.write(pronoun[dominio1]+adj[dominio2]+noun[dominio3]+extension[dominio4]);









// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
