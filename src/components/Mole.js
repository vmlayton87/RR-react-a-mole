import moleImage from '../mole.png'
import { useEffect } from 'react'

function Mole (props) {
    useEffect(()=>{
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(()=>{
            props.setDisplayMole(false)
        }, randSeconds)
        return ()=> clearTimeout(timer)
    })

    return (
        <div >
        <img src={moleImage} alt="mole" onClick={props.handleClick} style={{height:20 + 'vh'}}/>
        </div>
    )
}

export default Mole