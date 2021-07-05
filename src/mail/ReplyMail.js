import React from "react"

class ReplyMail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            reply: "\n\n===================\nOryginal Msg:\n" + props.name +"\n"+ props.mail +"\n\n"+ props.msg,
            display: "none"
        }
        this.handleChange=this.handleChange.bind(this);
        this.displayCheck = this.displayCheck.bind(this);
        this.cleanInput=this.cleanInput.bind(this);
    }

    cleanInput(){
        this.setState({reply:"\n\n===================\n Oryginal Msg:\n" + this.props.name +"\n"+ this.props.mail +"\n\n"+ this.props.msg,
    })
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    displayCheck() {
        this.state.display === "block" ? this.setState({ display: "none" }) : this.setState({ display: "block" });
    }



    render(){

        let tabDisplay = {
            display: this.state.display,

        };

        let mailTo= "mailto:"+ this.props.mail;

        return(
            <div>
                <button className="mailBtn mailBtn-oper left" onClick={this.displayCheck}>Reply</button>

                <div className="mailReplyArea" style={tabDisplay}>
                    <button className="mailBtn mailBtn-oper right" onClick={this.displayCheck}>x</button>
                    <div style={{padding: "20px" }}></div>
                    <form action={mailTo}>
                        <p>Name: {this.props.name}</p>
                        <p>Mail: {this.props.mail}</p>
                        <div style={{padding: "20px" }}></div>
                        <textarea className="mailTextArea mailTextArea-reply" type="text" name="reply" onChange={this.handleChange} value={
                    this.state.reply}
    /><br/>
   
                        <input class ="mailBtn" type="submit" value="Send" onClick={this.displayCheck}></input>
                
                    </form>
                

                </div>
            </div>
        )
    }
}

export default ReplyMail