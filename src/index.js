import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';//El servidor puede continuar offline?


//Componentes usan JSX
//1:
ReactDOM.render(//Ejecuta la aplicación hecha en js, pinta el componente llamado 
  <React.StrictMode>
    <App />
  </React.StrictMode>,//pinta el componente llamado App..
  document.getElementById('root')//en el elemento html llamado root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
//
//DESCARGAS VIDEOS DE YOUTUBE
//https://es.savefrom.net/1-youtube-video-downloader-4.html
