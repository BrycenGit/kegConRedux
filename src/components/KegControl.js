import React from "react";
import KegDetail from "./KegDetail";
import KegList from "./KegList";

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    let state = {
      formVisible = false,
      masterKegList = [],
      selectedKeg = null,
      editing = false
    };
    this.handleClick = this.handleCLick.bind(this);
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
    const editedMasterKegList = this.state.editedMasterKegList.filter(keg => keg.id !== this.state.selectedKeg).concat(editedKeg);
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
      selectedTicket:null
    });
  }


  handleKegSubmission = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg)
    this.setState({
      masterKegList: newMasterKegList,
      formVisible: false,
    })
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.editing) {
      currentlyVisibleState = <EditKegForm
      keg = {this.state.selectedKeg}
      onClickingEdit = {this.handleKegEdit} />
      buttonText = "Return Home"
    } else if(this.state.selectedKeg !== null) {
      currentlyVisibleState = <KegDetail
      keg = {this.state.selectedKeg}
      onClickingDelete = {this.state.handleDeletingKeg}
      onClickingEdit = {this.state.handleEditClick}
      onClickingPint = {this.state.handlePint} />
      buttonText = "Return Home"
    } else if(this.state.formVisible) {
      currentlyVisibleState = <NewKegForm
      onClickingSubmit = {this.handleKegSubmission} />
      buttonText = "Return Home"
    } else {
      currentlyVisibleState = <KegList
      masterKegList = {this.masterKegList}
      onClickingKeg= {this.handleSelectingKeg} />
      buttonText = "Add New Keg"
    }
    return(
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

export default KegControl;