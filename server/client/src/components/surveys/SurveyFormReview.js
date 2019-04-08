import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions';

const surveyFormReview = ({
  onCancel, formValues, submitSurvey, history,
}) => {
  const reviewFields = formFields.map(({ name, label }) => (
    <div key={name}>
      <label>{label}</label>
      <div>
        {formValues[name]}
      </div>
    </div>
  ));

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        className="green btn-flat right white-text"
        onClick={() => submitSurvey(formValues, history)}
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

export default connect(state => ({
  formValues: state.form.surveyForm.values,
}), actions)(withRouter(surveyFormReview));
