import React from "react"
import PropTypes from "prop-types"

function KegList(props) {
  return(
    <>
      <Keg onClick={()=> onClickingKeg(this.id)}
      />
    </>
  )

} 

KegList.propTypes = {
  masterKegList: PropTypes.array,
  onClickingKeg: PropTypes.func
}