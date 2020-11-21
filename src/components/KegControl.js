import React from "react";
import KegDetail from "./KegDetail";
import KegList from "./KegList";
import EditKegForm from "./EditKegForm";
import NewKegForm from "./NewKegForm"
import {Button, Alert} from "react-bootstrap"

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      masterKegList: [],
      selectedKeg: null,
      editing: false,
      alert: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleSelectingKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(k => k.id === id)[0];
    this.setState({
      selectedKeg: selectedKeg
    })
  }

  handleEditClick = () => {
    this.setState({editing: true})
  }

  handleKegEdit = (editedKeg) => {
    const editedMasterKegList = this.state.masterKegList.filter(keg => keg.id !== this.state.selectedKeg).concat(editedKeg);
    this.setState({
      masterKegList: editedMasterKegList,
      editing: false,
      selectedItem: null,
    })
  }


  handleClick = () => {
    if(this.state.selectedKeg != null) {
      this.setState({
        formVisible: false,
        selectedKeg: null,
        editing: false,
      })
    } else {
      this.setState(prevState => ({
        formVisible: !prevState.formVisible,
      }));
    }
  }

  handleDeletingKeg = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(k => k.id !== id);
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg:null
    });
  }

  handlePint = (id) => {
    const selectedKeg = this.state.masterKegList.filter(k => k.id === id)[0];
    selectedKeg.quantity -= 1
    const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== this.state.selectedKeg.id).concat(selectedKeg);
    this.setState({
      masterKegList: newMasterKegList,
      selectedItem: selectedKeg,
    });
    this.notifyPint()
  }

  handleKegSubmission = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg)
    this.setState({
      masterKegList: newMasterKegList,
      formVisible: false,
    });
  }

  notifyPint = () => {
    this.setState({alert: true})
    // this.setState({alert: false})
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    let alert = null;
    if(this.state.editing) {
      currentlyVisibleState = <EditKegForm
      keg = {this.state.selectedKeg}
      onClickingEdit = {this.handleKegEdit} />
      buttonText = "Return Home"
    } else if(this.state.selectedKeg !== null) {
      currentlyVisibleState = <KegDetail
      keg = {this.state.selectedKeg}
      onClickingDelete = {this.handleDeletingKeg}
      onClickingEdit = {this.handleEditClick}
      onClickingPint = {this.handlePint} />
      buttonText = "Return Home"
    
    } else if(this.state.formVisible) {
      currentlyVisibleState = <NewKegForm
      onClickingSubmit = {this.handleKegSubmission} />
      buttonText = "Return Home"
    } else {
      currentlyVisibleState = <KegList
      masterKegList = {this.state.masterKegList}
      onClickingKeg= {this.handleSelectingKeg} />
      buttonText = "Add New Keg"
    }
    return(
      <>
        <br />
        {this.state.alert ? <h1>hello</h1> : <h1>false</h1>}
        {currentlyVisibleState}
        <br />  
        <Button onClick={this.handleClick}>{buttonText}</Button>
      </>
    );
  }
}

export default KegControl;