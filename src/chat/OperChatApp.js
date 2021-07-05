import React from 'react'
import chatHistory from "./chatHistory";
import OperMsg from "./OperMsg";
import OperNewMsg from "./OperNewMsg";

class UserChatApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: JSON.parse(chatHistory),
        }
        this.updateChat = this.updateChat.bind(this);

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
        if (this.state.msg.length - 1 < 0) {
            data.id = 0;
        } else {
            data.id = this.state.msg[this.state.msg.length - 1].id + 1;
        }
        let tempState = this.state.msg;
        let finalState = tempState.concat(data);
        this.workOnJSON(finalState);
        return this.setState({ msg: finalState });
    }




    render() {
        const msgs = this.state.msg.map((msg, index, user) => <div>
            <OperMsg key={this.state.msg.id} msg={msg} index={index} user={this.state.msg.user}
            />
        </div>
        )



        return (
            <div>
                                 <div style={{padding: "20px" }}></div>
                <div className="chatSpace chatSpace-oper">
                    {msgs}
                </div>
                <OperNewMsg onClick={this.updateChat} />
            </div>
        );
    }
}

export default UserChatApp
