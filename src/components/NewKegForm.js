import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { v4 } from 'uuid';
function NewKegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onClickingSubmit({
      name: event.target.name.value,
      brand: event.target.brand.value,
      flavor: event.target.flavor.value,
      price: parseInt(event.target.price.value),
      quantity: parseInt(event.target.quantity.value),
      id: v4(),
    })
  }

  return(
    <>
      <ReusableForm
      formSubmissionHandler={handleNewKegFormSubmission}
      buttonText="Add Keg"/>
    </>
  );
}

NewKegForm.PropTypes = {
  onClickingSubmit: PropTypes.func,
}

export default NewKegForm;