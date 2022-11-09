import clas from './main.module.scss'
import React from 'react'
import Header from '../../container/header/header'
import Footer from '../../container/footer/footer'
import Image from '../../assets/images/Rectangl.png'
import Banner from '../../container/banner/banner'
import { EditionCard, SliderFiveCard } from '../../components'
import { Pagination } from 'antd'
import Slider from 'react-slick'
import { settings2 } from '../../helpers/settings'
import { data_five } from '../../data/collection'

const Edition = ()=>{
    const fakeArr = [1,2,3,4,5,6,7,8]
    return (
        <React.Fragment>
            <Header/>
                <div className={clas.Edition_wrapper}>
                        <div className={clas.inner}>
                            <Banner image={Image} name={"Издания"} text={"Lorem ipsum dolor sit amet, consectetur"}/>
                            <div className="container">
                                <h1 className={clas.cards_holder}>Книги</h1>
                                <div className={clas.edition_cards}>
                                    {
                                        fakeArr.map(el => {
                                            return <div key={el} className={clas.card}>
                                                <EditionCard/>
                                            </div>
                                        })
                                    }
                                </div>
                                <div className={clas.pagination}>
                                    <Pagination size="small" total={50} />
                                </div>

                                <h1 className={clas.slider_holder}>
                                    Рекомендуем вам
                                </h1>
                                <div className={clas.Edition_slider}>
                                    <Slider {...settings2}>
                                        {
                                            data_five.map(el =>{
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

export default Edition