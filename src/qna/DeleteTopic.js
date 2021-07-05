import React from 'react'
import "./qnaStyle.css"

class DeleteTopic extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            id: props.index,
        }
        
    }

    render() {
        let data =    {
            id: this.state.id,
        }
        return (<div><div>
                <button className="qnaBtn" onClick={() => this.props.onClick(data)}>Delete</button>
            </div>
            </div>
        )
    }
}

export default DeleteTopic