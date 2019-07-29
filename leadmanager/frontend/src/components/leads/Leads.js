import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLeads, deleteLead } from "../../store/actions/leadsActions";

const Leads = props => {
  useEffect(() => {
    props.getLeads();
  }, []);

  return (
    <Fragment>
      <h1>Leads</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {props.leads.map(lead => (
            <tr key={lead.id}>
              <th>{lead.id}</th>
              <th>{lead.name}</th>
              <th>{lead.email}</th>
              <th>{lead.message}</th>
              <th>
                <button
                  onClick={id => props.deleteLead(lead.id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
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
    getLeads: () => dispatch(getLeads()),
    deleteLead: id => dispatch(deleteLead(id))
  };
};

Leads.propTypes = {
  leads: PropTypes.array.isRequired,
  getLeads: PropTypes.func.isRequired,
  deleteLead: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Leads);
