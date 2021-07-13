import React from 'react'
import './Button.css'

export default props =>{
    let classes = 'button '
    classes += props.operetion ? 'operetion' : ''
    classes += props.fn ? 'fn' : ''
    classes += props.triple ? 'double operetion' : ''


    return(
        <button
            onClick={e=>props.click && props.click(props.label)}
            className={classes}>
            {props.label}
        </button>

    )

}
    
