import React from 'react'
import './Button.css'
import { BiCaretLeft,
        BiCaretRight,
        BiDotsVerticalRounded,
        BiMoon,
        BiSun,
        BiVolumeMute,
        BiVolumeFull
} from "react-icons/bi";




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
    
