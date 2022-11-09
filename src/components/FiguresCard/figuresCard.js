import clas from './main.module.scss'
import Image from '../../assets/images/Rectangle 64.png'
import { Link } from 'react-router-dom'
const FiguresCard = ({link, linkName})=>{
    return (
        <div className={clas.FiguresCard_wrapper}>
            <img src={Image} alt="" />
            <h3>Аббасов Шухрат Салихович</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ac sollicitudin cursus velit, faucibus viverra Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <Link to={link} className={clas.single_link}>{linkName}</Link>
        </div>
    )
}

export default FiguresCard