import {useState} from 'react'
import Mole from "./Mole"
import EmptySlot from "./EmptySlot"

function MoleContainer (props) {
    const [displayMole, setDisplayMole] = useState(false)
    let handleClick = ()=> {
        props.setScore(props.score+1)
        setDisplayMole(false)
    }

    return (
    
        <div className = "col ">
            {
             displayMole 
             ? <Mole handleClick={handleClick} setDisplayMole={setDisplayMole}/> 
             : <EmptySlot setDisplayMole={setDisplayMole} />
            }
        </div>
    
    )
}

export default MoleContainer