import React from 'react'

class EditTopic extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            id:props.index,
            question: props.topic.question,
            answer: props.topic.answer,
            display: "none",
        }
        this.handleChange=this.handleChange.bind(this);
        this.displayCheck=this.displayCheck.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    displayCheck(){
        this.state.display === "block" ? this.setState({display: "none"}) : this.setState({display: "block"});
    }

    render() {
        let data =    {
            id: this.state.id,
            question: this.state.question,
            answer: this.state.answer
        }


        return ( <div className={"tab"}>
                <button className = "qnaBtn" onClick={this.displayCheck}>Edit</button>
                <div className={"change_tab"} style={{display: this.state.display, possition: "fixed", top: "100px", right: "0"}}>
                <button className="qnaBtn right" onClick={this.displayCheck}>X</button><br/>
                <div class="qnaSheet">
                <input className="qnaInput" type="text" name="question" onChange={this.handleChange} value={this.state.question}/><br/>
                <textarea className="qnaTextArea" type="text" name="answer" onChange={this.handleChange} value={this.state.answer}/><br/>
                <button className="qnaBtn right" onClick={() => this.props.onClick(data)}>Change</button>
                </div>
                </div>
            </div>
        )
    }
}
export default EditTopic