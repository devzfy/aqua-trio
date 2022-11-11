import clas from './main.module.scss'
import Image from '../../assets/images/Rec.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const FiguresCard = ({link, linkName, likeBtn})=>{
    const [active, setActive] = useState(false)
    return (
        <div className={clas.FiguresCard_wrapper}>
            <div className={clas.before}>
            {likeBtn ? <button onClick={()=> setActive(!active)}>
                <div class={`${clas.heart} ${active ? clas.animate : null}`}></div>
            </button> : null}
                <div className={clas.overlay}></div>
                <img src={Image} alt="" />
            </div>
            <h3>Аббасов Шухрат Салихович</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ac sollicitudin cursus velit, faucibus viverra Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <Link to={link} className={clas.single_link}>{linkName}</Link>
        </div>
    )
}

export default FiguresCard