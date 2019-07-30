import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLead } from "../../store/actions/leadsActions";

const Form = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    const lead = { name, email, message };

    props.addLead(lead);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="card card-body mt-4 mb-4">
      <h2>Add form</h2>
      <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            name="name"
            onChange={e => setName(e.target.value)}
            type="text"
            value={name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            name="email"
            onChange={e => setEmail(e.target.value)}
            type="email"
            value={email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <input
            className="form-control"
            name="message"
            onChange={e => setMessage(e.target.value)}
            type="text"
            value={message}
          />
        </div>
        <div className="form-">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addLead: lead => dispatch(addLead(lead))
  };
};

Form.propTypes = {
  addLead: PropTypes.func.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(Form);
