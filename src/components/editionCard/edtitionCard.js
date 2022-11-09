import clas from './main.module.scss'
import {Link} from 'react-router-dom'
import Image from '../../assets/images/Rectang.png'

const EditionCard = ()=>{
    return (
        <div className={clas.card_wrapper}>
            <div className={clas.left_side}>
                <img src={Image} alt="" />
            </div>
            <div className={clas.right_side}>
                <h3>Саид Ахмад. Горизонт</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ac sollicitudin cursus </p>
                <Link className={clas.EditionCard_link} to={'/edition/9'}>Читать</Link>
            </div>
        </div>
    )
}

export default EditionCard