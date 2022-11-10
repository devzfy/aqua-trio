import React from "react";
import Header from '../../../container/header/header'
import Footer from '../../../container/footer/footer'
import clas from './main.module.scss'
import Banner from '../../../container/banner/banner'
import Image from '../../../assets/images/Recta.png'
import { Pagination } from "antd";
import {settings2} from '../../../helpers/settings'
import Slider from 'react-slick'
import { Link } from "react-router-dom";
import {SliderFiveCard, FiguresCard} from '../../../components'
import {data_five} from '../../../data/collection'


const CourseCategories = ()=>{
    const fakeArr = [1,2,3]

    return (
        <React.Fragment>
            <Header/>
            <Banner image={Image} text={'Lorem ipsum dolor sit amet, consectetur'} name={'Курсы'}/>
                <div className={clas.CourseSingle_wrapper}>
                    <div className="container">
                        <div className={clas.inner}>
                            <div className={clas.holder}>
                                <h1>Музыка</h1>
                            </div>
                            <div className={clas.up_cards_wrapper}>
                                {
                                    fakeArr.map((el)=>{
                                        return <div className={clas.up_card}>
                                            <FiguresCard linkName={'Читать подробнее'} link={'/courses/1'}/>
                                        </div>
                                    })
                                }
                            </div>
                            <div className={clas.mid_card_wrapper}>
                                <div className={clas.left}>
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
                                            <FiguresCard linkName={'Читать подробнее'} link={'/course/1'}/>
                                        </div>
                                    })
                                }
                            </div>
                            <div className={clas.pagination}>
                                <Pagination size="small" total={50} />
                            </div>
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



