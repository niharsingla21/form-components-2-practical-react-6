import React, { Component } from "react";

export default class Myform extends Component {
  state = {
    name: "",
    rememberMe: false,
    title: "Mr.",
  };

  handleChange = (event) => {
    console.log(event.target.name);
    this.setState({
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          name="rememberMe"
          type="checkbox"
          checked={this.state.rememberMe}
          onChange={this.handleChange}
        />
        <textarea
          value={
            this.state.title +
            " " +
            this.state.name +
            "   " +
            this.state.rememberMe
          }
          readOnly
        />
        <div>
          <select
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          >
            <option>Mr.</option>
            <option>Ms.</option>
            <option>Miss.</option>
            <option>Mrs.</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
