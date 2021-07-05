import React from 'react'
import "./qnaStyle.css"

class UsersTopic extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: "none"
        }
        this.displayCheck = this.displayCheck.bind(this);
    }

    displayCheck() {
        this.state.display === "block" ? this.setState({ display: "none" }) : this.setState({ display: "block" });
    }

render(){

    let tabDisplay = {
        display: this.state.display,

    };
    return (
        <div>

            <button className="qnaQuestion" onClick={this.displayCheck}>{this.props.topic.question}</button>
            <p className="qnaAnswer" style={tabDisplay}>{this.props.topic.answer}</p>

        </div>
    )
}
}

export default UsersTopic

