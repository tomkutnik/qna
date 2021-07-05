import React from 'react'
import questionList from "./dataBase";
import Topic from "./Topic";
import NewTopic from "./NewTopic";
import DeleteTopic from "./DeleteTopic";
import EditTopic from "./EditTopic";
import "./qnaStyle.css";

class TopicsList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            questions: JSON.parse(questionList),
        }
        this.updateTopicsList = this.updateTopicsList.bind(this);
        this.removeTopicFromList = this.removeTopicFromList.bind(this);
        this.editTopic = this.editTopic.bind(this);

    }

    componentDidMount() {
        if (JSON.parse(localStorage.getItem("qnaData")) !== null){
            this.setState({questions: JSON.parse(localStorage.getItem("qnaData"))})
        }
    }


    workOnJSON(data){
        let jsonString = JSON.stringify(data)
        localStorage.setItem("qnaData",jsonString )
    }
    

    updateTopicsList(data) {
        if(this.state.questions.length-1 < 0){
            data.id = 0;
        } else {
            data.id = this.state.questions[this.state.questions.length-1].id +1;
        }
        let tempState = this.state.questions;
        let finalState = tempState.concat(data);
        this.workOnJSON(finalState);
        return this.setState({questions: finalState});
    }

    removeTopicFromList(id){
        let stateArr = this.state.questions;
        stateArr.splice(id.id, 1);
this.workOnJSON(stateArr);
        return this.setState({questions: stateArr});

    }

    editTopic(data){
        let id = data.id;
        let arr = this.state.questions;
        let obj = arr[id];
        obj.question = data.question;
        obj.answer = data.answer;
        arr.splice(data.id,1,obj);
        this.workOnJSON(arr);
        return this.setState({questions: arr});

    }


    render() {
        const topics = this.state.questions.map((topic, index) => <div><div className="right" style={{display: "flex"}}>
        <DeleteTopic index={index} onClick={this.removeTopicFromList} />
        <EditTopic index={index} topic={topic} onClick={this.editTopic} /></div>
        <Topic key={this.state.questions.id} topic={topic} index={index}
        /> </div>
            )

        return (
            <div className="qnaArea-Oper">        
            <NewTopic onClick={this.updateTopicsList} />
                {topics}

            </div>
        );
    }
}

export default TopicsList