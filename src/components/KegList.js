import React from "react";
import PropTypes from "prop-types";
import Keg from "./Keg";

function KegList(props) {
  return(
    <>
      {Object.values(props.masterKegList).map((keg, index) =>
        <Keg 
        onClickingKeg={props.onClickingKeg}
        name={keg.name}
        brand={keg.brand}
        price={keg.price}
        flavor={keg.flavor}
        quantity={keg.quantity}
        id={keg.id}
        key={index}
        />
      )}
    </>
  )

} 

KegList.propTypes = {
  masterKegList: PropTypes.object,
  onClickingKeg: PropTypes.func
}

export default KegList;