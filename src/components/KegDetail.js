import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const {keg, onClickingPint, onClickingDelete} = props;

  return(
    <>
      <h1>Keg Detail</h1>
      <h3>keg.name</h3>
      <p>keg.brand</p>
      <p>keg.price</p>
      <p>keg.quantity</p>
      <button onClick={props.onClickingEdit}>Update</button>
      <button onClick={()=> onClickingDelete(keg.id)}>Delete</button>
      <button onClick={()=> onClickingPint(keg.id)}>Pint</button>
      <hr />
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingPint: PropTypes.func,
};

export default KegDetail;

