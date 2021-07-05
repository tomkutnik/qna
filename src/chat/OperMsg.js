import React from 'react'

function OperMsg(props){

    return(
        <div>
            <p className={props.msg.user}>{props.msg.msg}</p>


        </div>
    )
}

export default OperMsg

