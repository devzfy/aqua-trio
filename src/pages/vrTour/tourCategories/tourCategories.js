import Header from "../../../container/header/header";
import Footer from "../../../container/footer/footer";
import Banner from "../../../container/banner/banner";
import {useLocation} from 'react-router-dom'
import clas from './main.module.scss'
import React, { useEffect, useState } from "react";
import Image from '../../../assets/images/Recta.png'
import FiguresCard from "../../../components/FiguresCard/figuresCard";
import Slider from "react-slick";
import { PaginationCustome, SliderFiveCard } from "../../../components";
import { settings2 } from "../../../helpers/settings";
import { data_five } from "../../../data/collection";

const TourCategories = ()=>{
    const location = useLocation()
    const [loc, setLoc] = useState()

    const locaFunc = line =>{
        if(line === '/tour/museum'){
            setLoc('Музеи')
        }else{
            setLoc('Парки')
        }
    }
    useEffect(()=>{
        locaFunc(location.pathname)
    },[location.pathname])
    const fakeArr = [1,2,3,4,5,6]
    return (
        <React.Fragment>
            <Header/>
            <div className={clas.TourCategories_wrapper}>
                <Banner image={Image} name={'Виртуальные туры'} text={'Lorem ipsum dolor sit amet, consectetur'}/>
                <div className="container">
                    <div className={clas.inner}>
                        <div className={clas.holder}>
                            <h1 className={clas.holder}>{loc}</h1>
                        </div>
                        <div className={clas.tour_cards}>
                            {
                                fakeArr.map(el =>{
                                    return <div className={clas.card}>
                                        <FiguresCard linkName={'Смотреть'} link={'/tour/10'}/>
                                    </div>
                                })
                            }
                        </div>

                            <PaginationCustome />

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

export default TourCategories