import React, { Component } from "react";
import Button from "./components/Button";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "" };
  }
  onclickhandler = (e) => {
    let val = e.target.textContent;
    if (val === "Reset") {
      document.getElementById("cl").textContent = "";
      return this.setState({ color: "" });
    }
    this.setState({ color: val });
    document.getElementById(
      "cl"
    ).textContent = `Color changed to ${val.toUpperCase()}`;
  };
  render() {
    return (
      <>
        <div className="center">
          <div>
            <p>Click on buttons to change Color</p>
            <p id="cl"></p>
            <div
              className="color"
              style={{ background: `${this.state.color}` }}
            ></div>
          </div>
        </div>
        <div className="row">
          <Button text="Red" className="red" onClick={this.onclickhandler} />
          <Button text="Blue" className="blue" onClick={this.onclickhandler} />
          <Button
            text="Green"
            className="green"
            onClick={this.onclickhandler}
          />
          <Button text="Reset" onClick={this.onclickhandler} />
        </div>
      </>
    );
  }
}
export default App;
