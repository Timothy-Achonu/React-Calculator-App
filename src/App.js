import "./App.css";
import React, { Component } from "react";
import Screen from "./components/Screen";
import Button from "./components/Button";
import nightMode from './assets/night-mode.png'
import sun from './assets/sun.png'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "0",
      answer: "",
      darkMode: false
    };
  }
  calculateAnswer() {
    let numsArray = this.state.content.split(" ");
    let result;
    result = Number(numsArray[0]);
    numsArray.forEach((item, index) => {
      if (!Number(item)) {
        if (item === "+") {
          result = result + Number(numsArray[index + 1]);
        }
        if (item === "-") {
          result = result - Number(numsArray[index + 1]);
        }
        if (item === "*") {
          result = result * Number(numsArray[index + 1]);
        }
        if (item === "/") {
          result = result / Number(numsArray[index + 1]);
        }
      }
    });
    return result;
  }
  getButtonContent = (e) => {
    this.setState((prevContent) => {
      if (e.target.textContent === "C") {
        return { content: "0", answer: "" };
      }
      if (e.target.textContent === "=") {
        let result = this.calculateAnswer();
        return { ...prevContent, answer: result };
      }
      if (this.state.content === "0") {
        return { ...this.state, content: e.target.textContent };
      }
      if (!Number(e.target.textContent) && e.target.textContent !== "x") {
        if (e.target.textContent !== "0" && e.target.textContent !== ".") {
          if(this.state.content.split(" ").length >= 3) {
            let result = this.calculateAnswer();
            return {
              content: result + " " + e.target.textContent + " ",
              answer : result
            };
          }
          return {
            ...this.state,
            content: this.state.content + " " + e.target.textContent + " ",
          };
        }
      }
      if(e.target.textContent === "x") {
        let newContentLength = this.state.content.length - 1
        let newContent = this.state.content.substring(0, newContentLength);
        return {
          ...this.state,
          content: newContent,
        };
      }
      return {
        ...this.state,
        content: this.state.content + e.target.textContent,
      };
    });
  };
  handleDarkMode = () => {
      this.setState(prev => {
        return {
          ...this.state, darkMode: !prev.darkMode
        }
      })
  }

  render() {
    const buttonValues = [
      "C",
      ".",
      "x",
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "+",
      "-",
      "*",
      "/",
      "=",

    ];

    const buttons = buttonValues.map((button, index) => {
      return (
        <Button
          textContent={button}
          handleClick={this.getButtonContent}
          key={index}
        />
      );
    });
    return (
      <div className={`App ${this.state.darkMode ? "bgDark" : ""}`}>
        <div className="darkmode" onClick={this.handleDarkMode}>
         { !this.state.darkMode && <img src={nightMode} alt="dark-mode-icon"/>}  
         { this.state.darkMode && <img src={sun} alt="dark-mode-icon" className="img"/>}  
        </div>
        <h1>Calculator</h1>
        <div className="caculator-structure">
          <Screen values={this.state} />
          <div className="button-wrapper">{buttons}</div>
        </div>
      </div>
    );
  }
}
export default App;
