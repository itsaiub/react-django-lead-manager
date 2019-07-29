import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLeads } from "../../store/actions/leadsActions";

const Leads = props => {
  useEffect(() => {
    props.getLeads();
  }, []);

  return (
    <Fragment>
      <h1>Leads</h1>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    leads: state.leads.leads
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getLeads: () => dispatch(getLeads())
  };
};

Leads.propTypes = {
  leads: PropTypes.array.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Leads);
