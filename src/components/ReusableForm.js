import React from "react";
import PropTypes from "prop-types"

function ReusableForm(props) {

  return(
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input 
          type="text"
          name="name"
          defaultValue={props.name ? props.name : "..."} />
        <input
          type="text"
          name="brand"
          defaultValue={props.brand ? props.brand : "..."} />
        <input
          type="number"
          name="price"
          defaultValue={props.price ? props.price : "..."} />
        <input 
          type="hidden"
          name="quantity"
          defaultValue={props.quantity ? props.quantity : "127"} />
        <button type="submit">{props.buttonText}</button>  
      </form>
    </>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;