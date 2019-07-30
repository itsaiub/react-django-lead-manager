import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { useAlert } from "react-alert";
import PropTypes from "prop-types";

const Alerts = props => {
  const { error, message } = props;
  useEffect(() => {
    if (error.msg.name) {
      alert.error(`Name: ${error.msg.name.join()}`);
    }
    if (error.msg.email) {
      alert.error(`Email: ${error.msg.email.join()}`);
    }
    if (error.msg.message) {
      alert.error(`Message: ${error.msg.message.join()}`);
    }
    if (message.deleteLead) {
      alert.success(message.deleteLead);
    }
    if (message.addLead) {
      alert.success(message.addLead);
    }
    if (error.msg.non_field_errors) {
      alert.error(error.msg.non_field_errors.join());
    }
  }, [error, message]);

  const alert = useAlert();

  return <Fragment />;
};

const mapStateToProps = state => {
  return {
    error: state.errors,
    message: state.messages
  };
};

Alerts.propTypes = {
  error: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  null
)(Alerts);
