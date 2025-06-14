import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
    
        <Weather defaultCity="London" />
        <footer>
            This project was coded by{""}
            <a
              href="https://Linkedin/natalie-murray"
              target="_blank"
              rel="noopener noreferrer"
              > Natalie Murray </a>{""}
             and is{""}
            <a
              href="https://github.com/Natjam13"
              target="_blank"
              rel="noopener noreferrer"
            >
              {""} open-sourced on GitHub </a>{""}
          and {""}
            <a href="https://react-weather-nm.netlify.app/" target="_blank" rel="noopener noreferrer"
              >{""} hosted on Netlify </a>
          </footer>
      </div>
    </div>
  );
}