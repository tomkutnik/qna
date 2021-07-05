import React from 'react'
import "./mailStyle.css"

class NewMail extends React.Component {
constructor() {
    super();
    this.state = {
        name: "",
        mail:"",
        msg: "",

    }
    this.handleChange=this.handleChange.bind(this);
}

    handleChange(event) {
    this.setState({
            [event.target.name]: event.target.value
        })
}


    render() {
        let data =    {
            name: this.state.name,
            mail: this.state.mail,
            msg: this.state.msg

        };

        return (
            <div>
                <input type="text" name="name" className="mailInputBar" onChange={this.handleChange} placeholder="Your Name"/><br/>
                 <input type="text" name="mail" className="mailInputBar" onChange={this.handleChange} placeholder="Your Email"/><br/>
            <textarea name="msg" className="mailTextArea" onChange={this.handleChange} placeholder="Your Message"/><br/>
                <button className="mailBtn" onClick={() => this.props.onClick(data)}>Send</button>

            </div>
        )
    }
}
export default NewMail