import React from "react";
import DropDown from "./components/DropDown/index";
import TextField from "./components/TextField/index";

class Flexi extends React.Component {
  state = {};

  onSubmit = e => {
    e.preventDefault();
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state);
    }
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    let config = this.props.config.items;

    return (
      <form
        onSubmit={e => {
          this.onSubmit(e);
        }}
      >
        {config.map((el, index) => {
          if (el.type === "TextField") {
            return (
              <TextField
                key={index}
                label={el.label}
                name={el.name}
                val={el.value}
                handleChange={this.handleChange}
              />
            );
          }

          if (el.type === "DropDown") {
            return (
              <DropDown
                key={index}
                label={el.label}
                name={el.name}
                val={el.values}
                handleChange={this.handleChange}
              />
            );
          }
          return null;
        })}

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Flexi;
