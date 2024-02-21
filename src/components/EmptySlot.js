import hillImage from '../molehill.png'
import { useEffect } from 'react'

function EmptySlot (props) {
    useEffect(()=>{
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(()=>{
            props.setDisplayMole(true)
        }, randSeconds)
        return ()=> clearTimeout(timer)
    })

    return (
        <div >
        <img src={hillImage} alt="mole hill" style={{height:20 + 'vh'}}/>
        </div>
    )
}

export default EmptySlot