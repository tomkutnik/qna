import React from 'react'

class OperNewMsg extends React.Component {
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
            user: "operMsg",
            msg: this.state.msg
        }

        return (
            <div style={{display: "flex"}}>

            <textarea className="chatTextArea chatTextArea-oper" name="msg" onChange={this.handleChange} value={this.state.msg}/><br/>
                <button className="chatBtn chatBtn-oper" onClick={() => {this.props.onClick(data); this.cleanInput()}}>Enter</button>
            </div>

        
        )
    }
}
export default OperNewMsg