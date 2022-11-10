import clas from "./main.module.scss";
import ReactStars from "react-rating-stars-component";
import Image from '../../assets/images/Recta.png'

const RateCard = ({open}) => {
  return (
    <div className={clas.card_wrapper}>
      <img src={Image} alt="" />
      <h2>Музей прикладного искусства</h2>
      <div className={clas.rating_stars}>
        <ReactStars count={5} size={35} activeColor="#ffd700" />
        <span className={clas.span}>80</span>
      </div>
      <button className={clas.ochenit}>Оценить</button>
      <div className={clas.send_sms}>
        <input placeholder="Оставить комментарий" type="text" name="" id="" />
        <button className={clas.send}>Отправить</button>
      </div>
      <button onClick={open} className={clas.show_comment}>Смотреть все комментарии</button>
    </div>
  );
};

export default RateCard;
