import React, { Component } from "react";
import Button from "./components/Button";
import "./App.css";
import colors from "./utils";

class Second extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "" };
  }
  onclickhandler = (e) => {
    let val = e.target.textContent;
    if (val === "reset") {
      document.getElementById("cl").textContent = "";
      return this.setState({ color: "" });
    }
    this.setState({ color: val });
    document.getElementById(
      "cl"
    ).textContent = `color changed to ${val.toUpperCase()}`;
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
          {colors.map((item) => {
            return (
              <Button key={item.color}
                text={item.color}
                className={item.color}
                onClick={this.onclickhandler}
              />
            );
          })}
          <Button text="reset" onClick={this.onclickhandler}/>
        </div>
      </>
    );
  }
}
export default Second;
