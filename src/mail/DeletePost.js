import React from 'react'
import "./mailStyle.css"

class DeletePost extends React.Component{
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
        return (<div>
                <button className="mailBtn mailBtn-oper" onClick={() => this.props.onClick(data)}>Delete</button>
            
            </div>
        )
    }
}

export default DeletePost