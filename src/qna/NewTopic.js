import React from 'react'
import "./qnaStyle.css"

class NewTopic extends React.Component {
constructor() {
    super();
    this.state = {
        question: "",
        answer: "",
        display: "none",

    }
    this.handleChange=this.handleChange.bind(this);
    this.displayCheck=this.displayCheck.bind(this);
    this.cleanInput=this.cleanInput.bind(this);
}

    handleChange(event) {
    this.setState({
            [event.target.name]: event.target.value
        })
}

cleanInput(){
    this.setState({question: "", answer: ""})
}

    displayCheck(){
    this.state.display === "block" ? this.setState({display: "none"}) : this.setState({display: "block"});
}

    render() {
        let data =    {
            id: 0,
            question: this.state.question,
            answer: this.state.answer,
        }

        let tabDisplay = {
            display: this.state.display,
    };

        return (
            <div className={"tab"}>
                <button className="qnaBtn" onClick={this.displayCheck}>Add</button>
            <div className={"change_tab"} style={tabDisplay}>
            <button className="qnaBtn right" onClick={this.displayCheck}>X</button><br/>
            <div className="qnaSheet">
                <input className="qnaInput" type="text" name="question" onChange={this.handleChange} value={this.state.question}/><br/>
            <textarea className="qnaTextArea" name="answer" onChange={this.handleChange} value={this.state.answer}/><br/>
                <button className="qnaBtn right" onClick={() => {this.props.onClick(data); this.cleanInput()}}>Add</button>
            </div>
            </div>
            </div>
        )
    }
}
export default NewTopic