import React from "react";
import KegDetail from "./KegDetail";
import KegList from "./KegList";
import EditKegForm from "./EditKegForm";
import NewKegForm from "./NewKegForm"
import {Button} from "react-bootstrap"
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from  './../actions';

class KegControl extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  handleSelectingKeg = (id) => {
    const { dispatch } = this.props;
    const selectedKeg = this.props.masterKegList[id]
    const action = a.selectKeg(selectedKeg)
    dispatch(action);
  }

  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = a.editing();
    dispatch(action);
  }

  handleKegEdit = (editedKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(editedKeg);
    dispatch(action);
    const action2 = a.editing();
    dispatch(action2);
  }


  handleClick = () => {
    if(this.state.selectedKeg != null) {
      const { dispatch } = this.props;
      const action = a.editing();
      const action2 = a.unselectKeg();
      dispatch(action);
      dispatch(action2);
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id);
    const action2 = a.unselectKeg();
    dispatch(action);
    dispatch(action2)
  }

  handlePint = (id) => {
    
  }

  handleKegSubmission = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.props.editing) {
      currentlyVisibleState = <EditKegForm
      keg = {this.props.selectedKeg}
      onClickingEdit = {this.handleKegEdit} />
      buttonText = "Return Home"
    } else if(this.props.selectedKeg != null) {
      currentlyVisibleState = <KegDetail
      keg = {this.props.selectedKeg}
      onClickingDelete = {this.handleDeletingKeg}
      onClickingEdit = {this.handleEditClick}
      onClickingPint = {this.handlePint} />
      buttonText = "Return Home"
    
    } else if(this.props.formVisible) {
      currentlyVisibleState = <NewKegForm
      onClickingSubmit = {this.handleKegSubmission} />
      buttonText = "Return Home"
    } else {
      currentlyVisibleState = <KegList
      masterKegList = {this.props.masterKegList}
      onClickingKeg= {this.handleSelectingKeg} />
      buttonText = "Add New Keg"
    }
    return(
      <>
        <br />
        {currentlyVisibleState}
        <br />  
        <Button onClick={this.handleClick}>{buttonText}</Button>
      </>
    );
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object,
  formVisible: PropTypes.bool,
  editing: PropTypes.bool,
  selectedKeg: PropTypes.object,
}

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisible: state.formVisible,
    editing: state.editing,
    selectedKeg: state.selectedKeg
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;