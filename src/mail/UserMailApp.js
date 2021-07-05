import React, { Component } from "react";
import mailDataJson from "./mailHistory"
import NewMail from "./NewMail"
import "./mailStyle.css"

class UserMailApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true,
            msg: JSON.parse(mailDataJson),
        }
        this.updateTopicsList = this.updateTopicsList.bind(this);

    }

    componentDidMount() {
        if (JSON.parse(localStorage.getItem("mailData")) !== null){
            this.setState({msg: JSON.parse(localStorage.getItem("mailData"))})
        }
    }

    updateTopicsList(data) {
        if (this.state.msg.length - 1 < 0) {
            data.id = 0;
        } else {
            data.id = this.state.msg[this.state.msg.length - 1].id + 1;
        }
        let tempState = this.state.msg;
        let finalState = tempState.concat(data);
        let jsonString = JSON.stringify(finalState)
        localStorage.setItem("mailData",jsonString )

        this.setState({show: false})

        return this.setState({msg: finalState});



    }

    render() {
        return (
            <div className="mailArea">
                {this.state.show === true ?(
                    <NewMail onClick={this.updateTopicsList} />)
                    : (<h1>Dziękujemy za maila!</h1>
                )}
                
            </div>
        );
    }
}

export default UserMailApp