import React from "react";
import PropTypes from "prop-types";

function Keg(props) {

  return(
    <>
      <div onClick={()=>props.onClickingKeg(props.id)}>
        <h3>props.name</h3>
        <p>props.brand</p>
        <p>props.price</p>
        <p>props.quantity</p>
      </div>
    </>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  onClickingKeg: PropTypes.func,
}

export default Keg;