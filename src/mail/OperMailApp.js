import React, { Component } from "react";
import mailDataJson from "./mailHistory";
import Post from "./Post";
import DeletePost from "./DeletePost";

class OperMailApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            msg: JSON.parse(mailDataJson),
        }
        this.removeTopicFromList = this.removeTopicFromList.bind(this);

    }

    componentDidMount() {
        if (JSON.parse(localStorage.getItem("mailData")) !== null){
            this.setState({msg: JSON.parse(localStorage.getItem("mailData"))})
        }
    }

    workOnJSON(data){
        let jsonString = JSON.stringify(data)
        localStorage.setItem("mailData",jsonString )
    }

    removeTopicFromList(id){
        let stateArr = this.state.msg;
        stateArr.splice(id.id, 1);
        this.workOnJSON(stateArr);
        return this.setState({msg: stateArr});

    }




    render() {
        const posts = this.state.msg.map((post, index) => <div style={{display: "flex"}}> 
        <DeletePost index={index} onClick={this.removeTopicFromList} />

        <Post key={this.state.msg.id} post={post} index={index}/>
       
        </div>    
        )

        return (
            <div className="mailArea-oper">               
                                {posts}
                                
            </div>
        );
    }
}

export default OperMailApp