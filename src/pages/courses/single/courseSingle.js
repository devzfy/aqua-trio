import clas from "./main.module.scss";
import Header from "../../../container/header/header";
import Footer from "../../../container/footer/footer";
import React from "react";
import Image from "../../../assets/images/Rec.png";
import ReactStars from "react-rating-stars-component";
import Image1 from "../../../assets/images/Group 32.png";
const CourseSingle = () => {
  return (
    <React.Fragment>
      <Header />
      <div className={clas.CourseSingle_wrapper}>
        <div className="container">
          <div className={clas.inner}>
            <div className={clas.intro_place}>
              <img src={Image} alt="" />
              <h3>Курс по обучению на инструменте “Дутар”</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ac
                sollicitudin cursus{" "}
              </p>
            </div>
            <div className={clas.course_information}>
              <ul>
                <li className={clas.bold_text}>Предмет обучения:</li>
                <li>игра на музыкальном инструменте “Дутар”</li>
              </ul>
              <ul>
                <li className={clas.bold_text}>Стоимость обучения:</li>
                <li>300 000 сум/мес</li>
              </ul>
              <ul>
                <li className={clas.bold_text}>Сроки обучения:</li>
                <li>6 месяцев</li>
              </ul>
              <ul>
                <li className={clas.bold_text}>Контакты:</li>
                <li>+998 99 999 99 99</li>
              </ul>

              <div className={clas.rating_stars}>
                <ReactStars
                  count={5}
                  size={36}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
              </div>
            </div>
            <div className={clas.description}>
              <h1>Описание</h1>

              <div className={clas.image_text}>
                <img src={Image1} alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                  diam enim, vestibulum proin. Sapien hendrerit felis faucibus
                  pharetra duis in vel. Senectus tortor facilisi sapien metus
                  ultricies. Quis donec scelerisque mi a purus ullamcorper.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                  diam enim, vestibulum proin. Sapien hendrerit felis faucibus
                  pharetra duis in vel. Senectus tortor facilisi sapien metus
                  ultricies. Quis donec scelerisque mi a purus ullamcorper.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                  diam enim, vestibulum proin. Sapien hendrerit felis faucibus
                  pharetra duis in vel. Senectus tortor facilisi sapien metus
                  ultricies. Quis donec scelerisque mi a purus ullamcorper.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                  diam enim, vestibulum proin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default CourseSingle;
