import React from 'react'
import questionList from "./dataBase";
import UsersTopic from "./UsersTopic";

class UsersTopicsList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            questions: JSON.parse(questionList),
        }
    }

    componentDidMount() {
        if (JSON.parse(localStorage.getItem("qnaData")) !== null){
            this.setState({questions: JSON.parse(localStorage.getItem("qnaData"))})
        }
    }


    render() {
        const topics = this.state.questions.map((topic, index) => <UsersTopic key={this.state.questions.id} topic={topic} index={index}/>
            )

        return (
            <div className="qnaArea"> 
                {topics}

            </div>
        );
    }
}

export default UsersTopicsList