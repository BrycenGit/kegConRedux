import React from "react";
import PropTypes from "prop-types"

function ReusableForm(props) {

  return(
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <label for="name">Keg Name</label>
        <input 
          type="text"
          name="name"
          defaultValue={props.name ? props.name : ""}
          placeHolder="..." />
        <br/>
        <label for="brand">Keg Brand</label>
        <input
          type="text"
          name="brand"
          defaultValue={props.brand ? props.brand : ""}
          placeHolder="..." />
        <br/>
        <label for="flavor">Keg Flavor</label>
        <input
          type="text"
          name="flavor"
          defaultValue={props.flavor ? props.flavor : ""}
          placeHolder="..." />
        <br/>
        <label for="price">Keg Price</label>
        <input
          type="number"
          name="price"
          defaultValue={props.price ? props.price : ""}
          placeHolder={0} />
        <br/>
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