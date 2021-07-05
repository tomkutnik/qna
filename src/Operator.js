import React from "react";
import CleanJSON from "./CleanJSON";
import OperMailApp from "./mail/OperMailApp"
import TopicsList from "./qna/TopicsList"
import OperChatApp from "./chat/OperChatApp"
import "./style.css"

function OperatorApp() {


    return (
        <div className="box">
                            <div style={{display: "block", margin: "auto", width: "200px"}}>Operator
            <CleanJSON /></div>
            <div className="flex">
                <TopicsList />
                <div><OperMailApp />
                <OperChatApp />
</div>
                
            </div>
        </div>
    )
}
export default OperatorApp;