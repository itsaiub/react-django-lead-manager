import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { useAlert } from "react-alert";
import PropTypes from "prop-types";

const Alerts = props => {
  const { error } = props;
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
  }, [error]);

  const alert = useAlert();

  return <Fragment />;
};

const mapStateToProps = state => {
  return {
    error: state.errors
  };
};

Alerts.propTypes = {
  error: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  null
)(Alerts);
