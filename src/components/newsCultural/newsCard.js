import style from './main.module.scss'
import { Link } from 'react-router-dom'

const CulturalCard = ({image, name, text})=>{
    return(
        <div className={style.card_wrapper}>
            <div className={style.left_side}>
                <img src={image} alt="" />
            </div>
            <div className={style.right_side}>
                <h2>{name}</h2>
                <p>{text}</p>
                <Link className={style.single_link} to={'/news/10'}>Читать подробнее</Link>
            </div>
        </div>
    )
}

export default CulturalCard