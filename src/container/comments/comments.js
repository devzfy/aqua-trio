import clas from "./main.module.scss";
import ReactStars from "react-rating-stars-component";
import User from "../../assets/images/user.png";
import Buttons from "../../components/likeBtn/like";
import { PaginationCustome } from "../../components";
const Comment = () => {
  return (
    <div className={clas.commen_wrapper}>
      <div className={clas.comment_header}>
        <h3>Отзывы</h3>
      </div>
      <div className={clas.comments}>
        <div className={clas.comment_card}>
          <div className={clas.left_side}>
            <img src={User} alt="" />
            <h2>Kathryn Murphy</h2>
            <ReactStars count={5} size={24} rating={3}/>
            
          </div>
          <div className={clas.right_side}>
            <div className={clas.action}>
              <p>
                А ещё тщательные исследования конкурентов, вне зависимости от их
                уровня, должны быть смешаны с не уникальными данными до степени
                совершенной неузнаваемости, из-за чего возрастает их статус
                бесполезности! В своём стремлении улучшить пользовательский.А ещё
                тщательные исследования конкурентов, вне зависимости от их уровня,
                должны быть.
              </p>
              <Buttons/>
            </div>
            <span>19 февраля 2022</span>
          </div>
        </div>
      </div>
      <PaginationCustome/>
    </div>
  );
};

export default Comment;
