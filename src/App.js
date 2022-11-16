import "./App.css";
import React, { Component } from "react";
import Screen from "./components/Screen";
import Button from "./components/Button";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "0",
      answer: "",
    };
  }
  calculateAnswer() {
    let numsArray = this.state.content.split(" ");
    let result;
    numsArray.forEach((item, index) => {
      if (!Number(item)) {
       result = numsArray[index - 1] + numsArray[index + 1];
      }
    });
    console.log(numsArray);
  }
  getButtonContent = (e) => {
    this.setState((prevContent) => {
      if (e.target.textContent === "C") {
        return { content: "0", answer: "" };
      }
      if (e.target.textContent === "=") {
        this.calculateAnswer();
        return { ...this.state, answer: 111 };
      }
      if (this.state.content === "0") {
        return { ...this.state, content: e.target.textContent };
      }
      if (!Number(e.target.textContent)) {
        if (e.target.textContent === "+") {
        }
        return {
          ...this.state,
          content: this.state.content + " " + e.target.textContent + " ",
        };
      }
      return {
        ...this.state,
        content: this.state.content + e.target.textContent,
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
      <div className="App">
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
