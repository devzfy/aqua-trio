import React from 'react'
import clas from './main.module.scss'
import Header from '../../container/header/header'
import Footer from '../../container/footer/footer'
import Banner from '../../container/banner/banner'
import Image from '../../assets/images/Recta.png'
import Image1 from '../../assets/images/Rectangle 79.png'
import Image2 from '../../assets/images/Rectangle 80.png'
import { Link } from 'react-router-dom'

const VrTour = ()=>{
    return (
        <div className={clas.tour_wrapper}>
            <React.Fragment>
                <Header/>
                <div className={clas.VrTour_wrapper}>
                    <Banner image={Image} name={'Виртуальные туры'} text={'Lorem ipsum dolor sit amet, consectetur'}/>
                    <div className="container">
                        <div className={clas.inner}>
                            <Link to={'/tour/museum'} className={clas.tour_card}>
                                <img src={Image1} alt="" />
                                <h1>Музеи</h1>
                            </Link>
                            <Link to={'/tour/park'} className={clas.tour_card}>
                                <img src={Image2} alt="" />
                                <h1>Парки</h1>
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        </div>
    )
}

export default VrTour