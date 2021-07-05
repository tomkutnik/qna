import React, { Component } from "react";

class CleanJSON extends Component{    
    
    cleanData() {
        
        localStorage.clear()
        }
    render(){
        return(
            <button onClick={this.cleanData}>CleanLocalStorage</button>
        )
    }
}

export default CleanJSON