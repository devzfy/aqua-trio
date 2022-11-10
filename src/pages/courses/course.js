import React from "react";
import clas from './main.module.scss'
import Header from "../../container/header/header";
import Footer from "../../container/footer/footer";
import Banner from "../../container/banner/banner";
import Image from '../../assets/images/Rec.png'
import { Link } from "react-router-dom";

const Course = ()=>{
    return (
        <React.Fragment>
            <Header/>
            <div className={clas.Course_wrapper}>
                    <Banner name={'Курсы'} image={Image} text={'Lorem ipsum dolor sit amet, consectetur'}/>
                <div className="container">
                    <div className={clas.inner}>
                        <Link to={'/courses/music'} className={clas.course_card}>
                            <img src={Image} alt="" />
                            <span>Музыка</span>
                        </Link>
                        <Link to={'/courses/theatre'} className={clas.course_card}>
                        <img src={Image} alt="" />
                            <span>Театр</span>
                        </Link>
                        <Link to={'/courses/movie'} className={clas.course_card}>
                        <img src={Image} alt="" />
                            <span>Кино</span>
                        </Link>
                        <Link to={'/courses/oratory'} className={clas.course_card}>
                        <img src={Image} alt="" />
                            <span>Ораторское искусство</span>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Course