import React from "react"
import PropTypes from "prop-types"

function KegList(props) {
  return(
    <>
      {props.masterKegList.map((keg, index) =>
        <Keg 
        whenKegClicked={props.onClickingKeg}
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
  masterKegList: PropTypes.array,
  onClickingKeg: PropTypes.func
}

export default KegList;