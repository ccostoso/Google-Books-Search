import React, { Component } from "react";
import { SavedBox } from "../../components/SavedComponents/SavedBox";

class Saved extends Component {
    state = {
        results =[]
    }

    handleClick(e) {
        e.preventDefault();
    }

    render() {
        <SavedBox
            results={this.state.results}
            handleClick={this.handleClick}
        />
    }
}

export default Saved;