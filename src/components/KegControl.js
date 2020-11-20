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
    selectedKeg = this.state.masterKegList.filter(k => k.id === id)[0]
    this.setState({selectedKeg: selectedKeg})
  }

  handleClick = () => {

  }

  handleKegEdit = (editedKeg) => {

  }

  handleKegSubmission = (newKeg) => {
    
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.editing) {
      currentlyVisibleState = <EditKegForm
      onClickingEdit = {this.handleKegEdit} />
      buttonText = "Return Home"
    } else if(this.state.selectedKeg !== null) {
      currentlyVisibleState = <KegDetail

       />
      buttonText = "Return Home"
    } else if(this.state.formVisible) {
      currentlyVisibleState = <NewKegForm
      onClickingSubmit = {this.handleKegSubmission} />
      buttonText = "Return Home"
    } else {
      currentlyVisibleState = <KegList
      masterKegList = {this.masterKegList} />
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