import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
// import {Form, Button} from "react-bootstrap";
function ReusableForm(props) {

  return(
    <>
    <Card>
      <Card.Body>
      <form onSubmit={props.formSubmissionHandler}>
        <div className="form-group">
          <label htmlFor="name">Keg Name</label>
          <input 
            className="form-control"
            type="text"
            name="name"
            defaultValue={props.name ? props.name : ""}
            placeholder="..." />
        </div>
        <div className="form-group">
          <label htmlFor="brand">Keg Brand</label>
          <input
            className="form-control"
            type="text"
            name="brand"
            defaultValue={props.brand ? props.brand : ""}
            placeholder="..." />
        </div>
        <div className="form-group">
          <label htmlFor="flavor">Keg Flavor</label>
          <input
            className="form-control"
            type="text"
            name="flavor"
            defaultValue={props.flavor ? props.flavor : ""}
            placeholder="..." />
        </div>
        <div className="form-group">
          <label htmlFor="price">Keg Price</label>
          <input
            className="form-control"
            type="number"
            name="price"
            defaultValue={props.price ? props.price : ""}
            placeholder={0} />
        </div>
        <input 
          type="hidden"
          name="quantity"
          defaultValue={props.quantity ? props.quantity : "127"} />
        <button className="btn btn-success" type="submit">{props.buttonText}</button>  
      </form>
      </Card.Body>
      
    </Card>
    </>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;