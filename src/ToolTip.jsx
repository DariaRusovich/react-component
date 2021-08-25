import './ToolTip.css'
import { useState } from 'react'

export default function ToolTip({children, position, text}) {
const [open, setOpen] = useState(false)
const positionClass = position || ''    

return(
    <div className="tool-tip">
    <button onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className="tool-tip-btn">{children}</button>
   {open && <div className={`tool-tip-body ${positionClass}`}><p className="tool-tip-text">{text}</p></div>}
    </div>
)
}