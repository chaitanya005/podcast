import React, { Component } from "react";
import { API } from "../../config";

export default class Check extends Component {
  handleFormSubmit = (event) => {
    fetch(`${API}/check`, {
      method: "GET",
    })
      .then((res) => {
        console.log(JSON.stringify(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container">
        <button onClick={(e) => this.handleFormSubmit(e)}>Click Me!</button>
        <br />
        <br />
        <br />
        <a href="/">Go to Home</a>
      </div>
    );
  }
}

// export default Check;
