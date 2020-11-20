import React from "react";
import PropTypes from "prop-types";
import {Form, Button} from "react-bootstrap";
function ReusableForm(props) {

  return(
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <div class="form-group">
          <label for="name">Keg Name</label>
          <input 
            class="form-control"
            type="text"
            name="name"
            defaultValue={props.name ? props.name : ""}
            placeHolder="..." />
        </div>
        <div class="form-group">
          <label for="brand">Keg Brand</label>
          <input
            class="form-control"
            type="text"
            name="brand"
            defaultValue={props.brand ? props.brand : ""}
            placeHolder="..." />
        </div>
        <div class="form-group">
          <label for="flavor">Keg Flavor</label>
          <input
            class="form-control"
            type="text"
            name="flavor"
            defaultValue={props.flavor ? props.flavor : ""}
            placeHolder="..." />
        </div>
        <div class="form-group">
          <label for="price">Keg Price</label>
          <input
            class="form-control"
            type="number"
            name="price"
            defaultValue={props.price ? props.price : ""}
            placeHolder={0} />
        </div>
        <input 
          type="hidden"
          name="quantity"
          defaultValue={props.quantity ? props.quantity : "127"} />
        <button class="btn btn-success" type="submit">{props.buttonText}</button>  
      </form>

      {/* <Form>
        <Form.Group controlId="formName">
          <Form.Label for="name">Name</Form.Label>
          <Form.Control name="name" type="text" defaultValue={props.name ? props.name : ""} placeholder="Enter email" />
        </Form.Group>

        <Button variant="primary" type="submit">
        {props.buttonText}
        </Button>
      </Form> */}

    </>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;