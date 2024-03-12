import { useState } from "react"
import './Accordion.css'

export default function Accordion ({title, content}){
    const[isActive, setIsActive] = useState(false)
    return(
        <div className="accordion-content">
            <div className="container">
                <div className="accordion_item">
                    <div className="accordion_title" onClick={()=>setIsActive(!isActive)}>
                        <div>{title}</div>
                        <div>{isActive ? '-' : '+'}</div>
                    </div>
                    {isActive &&
                        <div className="accordion_body">{content}</div>
                    }
                </div>
            </div>
        </div>
    )
}