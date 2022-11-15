import "./App.css";
import React, { Component } from "react";
import Screen from "./components/Screen";
import Button from "./components/Button";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      answer : "",
    };
  }
  getButtonContent = (e) => {
     console.log(e.target.textContent, 'Clicked')
     this.setState(prevContent => {
      if(e.target.textContent === "=") {
        return {...this.state,
           answer : 111}

      }
     return (
      {...this.state, content : this.state.content+e.target.textContent}
     )
    })
  }

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
        <Button textContent={button} 
        handleClick={this.getButtonContent} 
        key={index}/>
      );
    });
    return (
      <div className="App">
        <h1>Calculator</h1>
        <div className="caculator-structure">
          <Screen values={this.state}/>
          <div className="button-wrapper">{buttons}</div>
        </div>
      </div>
    );
  }
}
export default App;
