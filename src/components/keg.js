import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
function Keg(props) {

  return(
    <>
    <Card>
      <Card.Body>
      <div onClick={()=>props.onClickingKeg(props.id)}>
        <h3>{props.name}</h3>
        <p>{props.brand}</p>
        <p>{props.flavor}</p>
        <p>{props.price}</p>
        <p>{props.quantity}</p>
      </div>
      </Card.Body>
    </Card>
    </>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  flavor: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  onClickingKeg: PropTypes.func,
}

export default Keg;