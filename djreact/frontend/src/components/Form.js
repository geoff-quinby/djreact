import React from "react";
import PropTypes from "prop-types";

class Form extends React.Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired
  };

  state = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const lead = Object.assign({}, this.state);
    const config = {
      method: "POST",
      body: JSON.stringify(lead),
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch(this.props.endpoint, config)
      .then(
        response => console.log(response)
      )
  };

  handleReset = () => {
    this.setState({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  render() {
    return (
      <div className="column">
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">First Name</label>
            <div className="form-control">
              <input
                className="input"
                type="text"
                name="first_name"
                onChange={this.handleChange}
                value={this.state.first_name}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Last Name</label>
            <div className="form-control">
              <input
                className="input"
                type="text"
                name="last_name"
                onChange={this.handleChange}
                value={this.state.last_name}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="form-control">
              <input
                className="input"
                type="text"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Phone Number</label>
            <div className="form-control">
              <input
                className="input"
                type="text"
                name="phone"
                onChange={this.handleChange}
                value={this.state.phone}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Message</label>
            <div className="form-control">
              <input
                className="input"
                type="text"
                name="message"
                onChange={this.handleChange}
                value={this.state.message}
                required
              />
            </div>
          </div>
          <div className="form-actions btn-group">
            <button type="submit" className="button is-info">
              Send Message
            </button>
            <button type="button" className="button" onClick={this.handleReset}>
              Reset Form
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;