import React from 'react'

const char = (props) =>{
    const charStyle = {
        display : 'inline-block',
        padding : '16px',
        margin : '16px',
        textAlign : 'center',
        border : '1px solid black',
        cursor:'pointer'
    }
    return(
        <div style={charStyle} onClick={props.clicked}>
            {props.character}
        </div>
    )
}

export default char