import "./App.css";
import React, { Component } from "react";
import Screen from "./components/Screen";
import Button from "./components/Button";
import nightMode from "./assets/night-mode.png";
import sun from "./assets/sun.png";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "0",
      answer: "",
      darkMode: false,
    };
  }
  calculateAnswer() {
    let numsArray = this.state.content.split(" ");
    let result;
    //BODMAS
    numsArray.forEach((item, index) => {
      if (!Number(item)) {
        if (item === "/") {
          console.log("in divide", result)
          if (result || result === 0) {
            result = result / Number(numsArray[index + 1]);
            console.log("in divide 1", result)
          } else {
            result =
              Number(numsArray[index - 1]) / Number(numsArray[index + 1]);
              console.log("in divide 2", result)
          }
        }
      }
    });
    numsArray.forEach((item, index) => {
      if (!Number(item)) {
        if (item === "*") {
          console.log("in multiply", result)
          if (result || result === 0) {
            result = Number(numsArray[index - 1]) * result;
            console.log("in multiply 1", result, Number(numsArray[index + 1]))
          } else {
            result =
              Number(numsArray[index - 1]) * Number(numsArray[index + 1]);
              console.log("in multiply 2", result)
          }
        }
      }
    });
    numsArray.forEach((item, index) => {
      if (!Number(item)) {
        if (item === "+") {
          console.log("in add", result)
          if (result || result === 0) {
            result = Number(numsArray[index - 1]) + result;
            console.log("in add 1", result)
          } else {
            result =
              Number(numsArray[index - 1]) + Number(numsArray[index + 1]);
              console.log("in add 2", result)
          }
        }
      }
    });
    numsArray.forEach((item, index) => {
      if (!Number(item)) {
        if (item === "-") {
          console.log("in subtract", result)
          if (result || result === 0) {
            result = Number(numsArray[index - 1]) - result;
            console.log("in subtract 1", result)
          } else {
            result =
              Number(numsArray[index - 1]) - Number(numsArray[index + 1]);
              console.log("in subtract 2", result)
          }
        }
      }
    });

    console.log(numsArray, result);
    return result;
  }
  getButtonContent = (e) => {
    this.setState((prevContent) => {
      if (e.target.textContent === "C") {
        return { content: "0", answer: "" };
      }
      if (e.target.textContent === "=") {
        let result = this.calculateAnswer();
        return { ...this.state, answer: result };
      }
      if (this.state.content === "0") {
        return { ...this.state, content: e.target.textContent };
      }
      if (!Number(e.target.textContent)) {
        if (e.target.textContent !== "0") {
          return {
            ...this.state,
            content: this.state.content + " " + e.target.textContent + " ",
          };
        }
      }
      return {
        ...this.state,
        content: this.state.content + e.target.textContent,
      };
    });
  };
  handleDarkMode = () => {
    this.setState((prev) => {
      return {
        ...this.state,
        darkMode: !prev.darkMode,
      };
    });
  };

  render() {
    const buttonValues = [
      "C",
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
          {!this.state.darkMode && <img src={nightMode} alt="dark-mode-icon" />}
          {this.state.darkMode && (
            <img src={sun} alt="dark-mode-icon" className="sun" />
          )}
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
