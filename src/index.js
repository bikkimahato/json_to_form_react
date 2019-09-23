import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Flexi from "./Flexi/index";

class App extends React.Component {
  state = {};

  flexiConfig = {
    items: [
      {
        key: 1,
        name: "person_name",
        label: "Person's Name",
        type: "TextField"
      },
      {
        key: 2,
        name: "email",
        label: "Email",
        type: "TextField"
      },
      {
        key: 3,
        name: "country",
        label: "Country",
        type: "DropDown",
        values: ["India", "US"]
      },
      {
        key: 4,
        name: "states",
        label: "Person's State",
        type: "DropDown",
        values: ["Maharashtra", "Kerala", "Tamil Nadu"]
      }
    ]
  };

  onFlexiSubmit = config => {
    console.log(config);
    this.setState({
      config
    });
  };

  render() {
    let { flexiConfig, onFlexiSubmit } = this;

    return (
      <Flexi onSubmit={config => onFlexiSubmit(config)} config={flexiConfig} />
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
