import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLeads, deleteLead } from "../../store/actions/leadsActions";
import { deleteErrors } from "../../store/actions/messagesAction";

const Leads = props => {
  useEffect(() => {
    if (props.user) {
      props.getLeads();
      props.emptyError({});
    }
    return () => props.getLeads();
  }, [props.user]);

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
              <td>{lead.id}</td>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.message}</td>
              <td>
                <button
                  onClick={id => props.deleteLead(lead.id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    leads: state.leads.leads,
    user: state.auth.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getLeads: () => dispatch(getLeads()),
    deleteLead: id => dispatch(deleteLead(id)),
    emptyError: err => dispatch(deleteErrors(err))
  };
};

Leads.propTypes = {
  leads: PropTypes.array.isRequired,
  getLeads: PropTypes.func.isRequired,
  deleteLead: PropTypes.func.isRequired,
  emptyError: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Leads);
