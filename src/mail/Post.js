import React from 'react'
import ReplyMail from "./ReplyMail"
import "./mailStyle.css"

class Post extends React.Component{
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
            <button className="mailHeader" onClick={this.displayCheck}><span style={{float: "left"}}>Id: {this.props.post.id+1}</span> {this.props.post.name}<span style={{float: "right"}}>{this.props.post.mail}</span> </button>
            <p className="mailMsg" style={tabDisplay}> <ReplyMail key={this.props.post.id} mail={this.props.post.mail} name={this.props.post.name} msg={this.props.post.msg} />
       
       {this.props.post.msg}</p>
             </div>
    )
}


}

export default Post