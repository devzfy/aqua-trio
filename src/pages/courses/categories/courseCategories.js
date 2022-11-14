import React from "react";
import Header from '../../../container/header/header'
import Footer from '../../../container/footer/footer'
import clas from './main.module.scss'
import Banner from '../../../container/banner/banner'
import Image from '../../../assets/images/Recta.png'
import {settings2} from '../../../helpers/settings'
import Slider from 'react-slick'
import { Link, useLocation } from "react-router-dom";
import {SliderFiveCard, FiguresCard, PaginationCustome} from '../../../components'
import {data_five} from '../../../data/collection'
import { Favourite } from "../../../assets/icons/icons";


const CourseCategories = ()=>{
    const fakeArr = [1,2,3]

    const location = useLocation()

    return (
        <React.Fragment>
            <Header/>
            <Banner image={Image} text={'Lorem ipsum dolor sit amet, consectetur'} name={'Курсы'}/>
                <div className={clas.CourseSingle_wrapper}>
                    <div className="container">
                        <div className={clas.inner}>
                            <div className={clas.holder}>
                                {
                                    location.pathname === '/courses/music' ? <h1>Музыка</h1>:
                                    location.pathname === '/courses/theatre' ? <h1>Театр</h1> : 
                                    location.pathname === '/courses/movie' ? <h1>Кино</h1>:
                                    location.pathname === '/courses/oratory' ? <h1>Ораторское искусство</h1> : null
                                }
                            </div>
                            <div className={clas.up_cards_wrapper}>
                                {
                                    fakeArr.map((el)=>{
                                        return <div className={clas.up_card}>
                                            <FiguresCard likeBtn={true} linkName={'Читать подробнее'} link={'/courses/1'}/>
                                        </div>
                                    })
                                }
                            </div>
                            <div className={clas.mid_card_wrapper}>
                                <div className={clas.left}>
                                    <button>{<Favourite/>}</button>
                                    <img src={Image} alt="" />
                                </div>
                                <div className={clas.right}>
                                    <h3>Курс по обучению на инструменте “Дойра”</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ac sollicitudin cursus velit, faucibus viverra Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                    <Link to={'/courses/1'} className={clas.link}>Читать подробнее</Link>
                                </div>
                            </div>
                            <div className={clas.up_cards_wrapper}>
                                {
                                    fakeArr.map((el)=>{
                                        return <div className={clas.up_card}>
                                            <FiguresCard likeBtn={true} linkName={'Читать подробнее'} link={'/course/1'}/>
                                        </div>
                                    })
                                }
                            </div>
                            <PaginationCustome/>
                            <div className={clas.rec_slider}>
                                <h1>Рекомендуем вам</h1>
                                <Slider {...settings2}>
                                    {
                                        data_five.map((el)=>{
                                            return <div className={clas.rec_card}>
                                                <SliderFiveCard text={el.label} image={el.image} />
                                            </div>
                                        })
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </React.Fragment>
    )
}


export default CourseCategories



