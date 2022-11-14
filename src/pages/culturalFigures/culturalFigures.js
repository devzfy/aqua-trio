import clas from './main.module.scss'
import Header from '../../container/header/header'
import Footer from '../../container/footer/footer'
import React from 'react'
import Banner from '../../container/banner/banner'
import Image from '../../assets/images/Rectangle2.png'
import FiguresCard from '../../components/FiguresCard/figuresCard'
import  Slider from 'react-slick'
import { settings2 } from '../../helpers/settings'
import { SliderFiveCard } from '../../components'
import { data_five } from '../../data/collection'
import {PaginationCustome} from '../../components'
 

const CulturalFigures = ()=>{
    const fakeArr = [1,2,3,4,5,6]
    return (
        <React.Fragment>
            <Header/>
            <div className={clas.CulturalFigures_wrapper}>
                <Banner image={Image} name={'Деятели культуры'} text={'Lorem ipsum dolor sit amet, consectetur'}/>
                <div className="container">
                    <div className={clas.inner}>
                        <div className={clas.famous_cards}>
                            {
                                fakeArr?.map((index)=>{
                                    return <div className={clas.card} key={index}>
                                        <FiguresCard linkName={'Читать подробнее'} link={'/culturalFigures/9'}/>
                                    </div>
                                })
                            }
                        </div>
                        <PaginationCustome/>

                        <div className={clas.slider_wrapper}>
                            <h1>Рекомендуем вам</h1>
                            <Slider {...settings2}>
                                {
                                    data_five?.map(el =>{
                                        return <div className={clas.slider_card}>
                                            <SliderFiveCard image={el.image} text={el.label}/>
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

export default CulturalFigures