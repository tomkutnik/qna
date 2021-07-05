import React from 'react'
import "./chatStyle.css"

class UserNewMsg extends React.Component {
constructor() {
    super();
    this.state = {
        msg: "",

    }
    this.handleChange=this.handleChange.bind(this);
    this.cleanInput=this.cleanInput.bind(this);

}

    handleChange(event) {
    this.setState({
            [event.target.name]: event.target.value
        })
}
cleanInput(){
    this.setState({msg: ""})
}

    render() {
        let data =    {
            id: 0,
            user: "userMsg",
            msg: this.state.msg
        }

      

        return (
            <div style={{display: "flex"}}>

            <textarea className="chatTextArea" name="msg" onChange={this.handleChange} value={this.state.msg}/><br/>
                <button className="chatBtn" onClick={() => {this.props.onClick(data); this.cleanInput()}}>Enter</button>
            </div>

        
        )
    }
}
export default UserNewMsg