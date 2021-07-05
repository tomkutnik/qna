import React from 'react'
import chatHistory from "./chatHistory";
import UserMsg from "./UserMsg";
import UserNewMsg from "./UserNewMsg";
import "./chatStyle.css"

class UserChatApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: JSON.parse(chatHistory),
            chatDisplay: "none",
        }
        this.updateChat = this.updateChat.bind(this);
        this.displayCheck = this.displayCheck.bind(this);
    }

    componentDidMount() {

        this.interval = setInterval(() => {
            if (JSON.parse(localStorage.getItem("chatData")) !== null) {
                this.setState({ msg: JSON.parse(localStorage.getItem("chatData")) })
            }
        }, 1000);

    }




    workOnJSON(data) {
        let jsonString = JSON.stringify(data)
        localStorage.setItem("chatData", jsonString)
    }


    updateChat(data) {
        if(data.msg !== ""){
        if (this.state.msg.length - 1 < 0) {
            data.id = 0;
        } else {
            data.id = this.state.msg[this.state.msg.length - 1].id + 1;
        }
        let tempState = this.state.msg;
        let finalState = tempState.concat(data);
        this.workOnJSON(finalState);
        return this.setState({ msg: finalState });
    }}

    displayCheck() {
        this.state.chatDisplay === "block" ? this.setState({ chatDisplay: "none" }) : this.setState({ chatDisplay: "block" });
    }



    render() {
        const msgs = this.state.msg.map((msg, index, user) => <div>
            <UserMsg key={this.state.msg.id} msg={msg} index={index} user={this.state.msg.user}
            /></div>
        );
        let tabDisplay = {
            display: this.state.chatDisplay,

        };


        ;

        return (
            <div>
                <button className="chatIcon rightBottom" onClick={this.displayCheck}>C</button>

                <div className="chatArea rightBottom" style={tabDisplay}>
                    <button className="chatIcon chatIcon-X right" onClick={this.displayCheck}>x</button>
                    <div style={{padding: "20px" }}></div>
                    <div className="chatSpace">
                        {msgs}
                    </div>
                    <UserNewMsg onClick={this.updateChat} />

                </div>
            </div>
        );
    }
}

export default UserChatApp
