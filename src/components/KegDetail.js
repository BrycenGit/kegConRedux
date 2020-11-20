import React from "react";
import PropTypes from "prop-types";
import { Card, ButtonGroup, Button, ButtonToolbar } from "react-bootstrap"

function KegDetail(props) {
  const {keg, onClickingPint, onClickingDelete} = props;

  return(
    <>
    <Card>
      <Card.Body>
      <h1>Keg Detail</h1>
      <h3>{keg.name}</h3>
      <p>{keg.brand}</p>
      <p>{keg.price}</p>
      <p>{keg.quantity}</p>
      {/* <button onClick={props.onClickingEdit}>Update</button>
      <button onClick={()=> onClickingDelete(keg.id)}>Delete</button>
      <button onClick={()=> onClickingPint(keg.id)}>Pint</button> */}
      <ButtonToolbar aria-label="Toolbar with button groups">  
        <ButtonGroup className="mr-2" aria-label="First Group">
          <Button onClick={props.onClickingEdit} variant="secondary">Update</Button>
          <Button onClick={()=> onClickingDelete(keg.id)} variant="secondary">Delete</Button>
        </ButtonGroup>  
        <ButtonGroup className="mr-2" aria-label="First Group">
          <Button onClick={()=> {onClickingPint(keg.id)}} variant="success">Pint</Button>
        </ButtonGroup>
      </ButtonToolbar>
      </Card.Body>
    </Card>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingPint: PropTypes.func,
};

export default KegDetail;

