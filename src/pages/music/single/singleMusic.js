import Banner from "../../../container/banner/banner";
import Header from "../../../container/header/header";
import Footer from "../../../container/footer/footer";
import clas from './main.module.scss'
import {MusicPlayer, SliderFiveCard} from "../../../components";
import React from "react";
import Image from '../../../assets/images/Recta.png'
import Slider from "react-slick";
import { settings2 } from "../../../helpers/settings";
import { data_five } from "../../../data/collection";
import { PaginationCustome } from "../../../components";

const SingleMusic = ()=>{
    const fake = [1,1,1,1,1,1]
    return <React.Fragment>
        <Header/>
        <Banner image={Image} name={'Музыка'} text={'Lorem ipsum dolor sit amet, consectetur'}/>
        <div className={clas.SingleMusic_wrapper}>
            <div className="container">
                <div className={clas.page_holder}>
                    <h1>Национальная музыка</h1>
                </div>
                <div className={clas.music_list}>
                    {
                        fake.map(()=>{
                            return <div className={clas.music}>
                                <MusicPlayer/>
                            </div>
                        })
                    }
                </div>
                    <PaginationCustome />
                <div className={clas.rec_card}>
                    <Slider {...settings2}>
                        {
                            data_five.map((el)=>{
                                return <div className={clas.card}>
                                    <SliderFiveCard image={el.image} text={el.label}/>
                                </div>
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
        <Footer/>
    </React.Fragment>
}

export default SingleMusic
