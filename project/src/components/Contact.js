import React, { Component } from 'react';

function SubmissionSuccess(props) {
  return (
    <div className="contact-card success-card">
      <h3>Thank you, {props.data.name}!</h3>
      <p>Your message has been sent successfully.</p>
      <div className="submitted-info">
        <p><strong>Email:</strong> {props.data.email}</p>
        <p><strong>Message:</strong> {props.data.message}</p>
      </div>
      <button className="back-btn" onClick={function() { window.location.reload() }}>
        Send Another
      </button>
    </div>
  );
}

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      submitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });
  }

  render() {
    if (this.state.submitted) {
      return <SubmissionSuccess data={this.state} />;
    }

    return (
      <div className="contact-card">
        <h2>Contact Me</h2>
        <p className="card-subtitle">Feel free to reach out!</p>
        <form onSubmit={this.handleSubmit} className="card-form">
          <div className="input-group">
            <label>Name</label>
            <input 
              type="text" 
              name="name" 
              value={this.state.name} 
              onChange={this.handleChange} 
              placeholder="Enter your name"
              required 
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              name="email" 
              value={this.state.email} 
              onChange={this.handleChange} 
              placeholder="Email address"
              required 
            />
          </div>
          <div className="input-group">
            <label>Message</label>
            <textarea 
              name="message" 
              value={this.state.message} 
              onChange={this.handleChange} 
              placeholder="How can I help you?"
              required 
            />
          </div>
          <button type="submit" className="submit-card-btn">Send Message</button>
        </form>
      </div>
    );
  }
}

export default Contact;