import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserMailApp from "./mail/UserMailApp";
import chatDataJson from "./mail/mailHistory";
import UsersTopicsList from "./qna/UsersTopicsList";
import UserChatApp from "./chat/UserChatApp";
import "./style.css";

class MainPage extends Component{

    constructor(){
        super();
            this.state={
                chatDisplay: "none",    
            }
        
            
    }
    
    componentDidMount() {
        if (localStorage.getItem("mailData") === null){
            localStorage.setItem("mailData", chatDataJson);
        }
    }

  

    render(){


        return(
        
        <div className="box flex">

        <Link className="rightTop" to="/operator" target="_blank"><button className="btn">OpMODE</button></Link>
        <UsersTopicsList/>
        <UserMailApp/>
        <UserChatApp />
        


        </div>
    )
}}

export default MainPage;