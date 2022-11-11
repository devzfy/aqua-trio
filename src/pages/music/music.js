import React from "react";
import Header from '../../container/header/header'
import Footer from '../../container/footer/footer'
import Banner from '../../container/banner/banner'
import clas from './main.module.scss'
import Image from '../../assets/images/Recta.png'
import { Link } from "react-router-dom";

const Music = ()=>{
    return <React.Fragment>
        <Header/>
        <Banner image={Image} name={'Музыка'} text={'Lorem ipsum dolor sit amet, consectetur'}/>
            <div className={clas.Music_wrapper}>
                <div className="container">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam justo, velit accumsan pharetra. Sagittis accumsan, enim pretium arcu cursus aliquet integer eleifend. Dignissim felis, turpis id etiam aenean ut amet. Lacus convallis mattis dignissim convallis.</p>
                    <div className={clas.cate_card}>
                        <Link to={'/music/national'} className={clas.music_card}>
                            <img src={Image} alt="" />
                            <span>Национальная музыка</span>
                        </Link>
                        <Link to={'/music/classic'} className={clas.music_card}>
                            <img src={Image} alt="" />
                            <span>Классическая музыка</span>
                        </Link>
                        <Link to={'/music/worldClassic'} className={clas.music_card}>
                            <img src={Image} alt="" />
                            <span>Мировая классика</span>
                        </Link>
                    </div>
                </div>
            </div>
        <Footer/>
    </React.Fragment>
}

export default Music