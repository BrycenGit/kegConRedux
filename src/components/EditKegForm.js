import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewKegForm(props) {
  const {keg} = props

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onClickingEdit({
      name: event.target.name.value,
      brand: event.target.brand.value,
      flavor: event.target.flavor.value,
      price: parseInt(event.target.price.value),
      quantity: parseInt(event.target.quantity.value),
      id: keg.id,
    })
  }

  return(
    <>
      <ReusableForm
      name={keg.name}
      brand={keg.brand}
      flavor={keg.flavor}
      price={keg.price}
      quantity={keg.quantity}
      formSubmissionHandler={handleEditKegFormSubmission}
      buttonText="Update"/>
    </>
  );
}

NewKegForm.propTypes = {
  onClickingEdit: PropTypes.func,
}

export default NewKegForm;