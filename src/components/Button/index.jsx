import React from 'react'
import './index.css'
 function Button({className,onClick,text}) {
    return (
        <div >
            <button className={className} onClick={onClick}>{text}</button>
        </div>
    )
}

export default Button;