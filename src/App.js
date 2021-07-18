import React, { Component } from "react";
import Button from "./components/Button";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  onclickhandler = (e) => {
    const { dispatch } = this.props;
    let val = e.target.textContent;
    dispatch({ type: "CHANGECOLOR", payload: { val } });
  };
  render() {
    const { color } = this.props;
    return (
      <>
        <div className="center">
          <div>
            <p>Click on buttons to change Color</p>
            <p id="cl">Color changed to {color}</p>
            <div className="color" style={{ background: `${color}` }}></div>
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

const mapStateToProps = (store) => {
  console.log(store);
  return { color: store.color };
};
export default connect(mapStateToProps, null)(App);
