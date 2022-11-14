import Header from '../../container/header/header'
import Footer from '../../container/footer/footer'
import Banner from '../../container/banner/banner'
import clas from './main.module.scss'
import Image from '../../assets/images/R.png'
import React from 'react'

const Game = ()=>{
    return <React.Fragment>
        <Header/>
        <Banner name={'Игры'} image={Image} text={'Lorem ipsum dolor sit amet, consectetur'}/>    
        <div className={clas.Game_wrapper}>
            <div className="container">
                <div className={clas.inner}>
                    <h1 className={clas.holder}>Cкоро будут игры</h1>
                </div>
            </div>
        </div>
        <Footer/>
    </React.Fragment>
}

export default Game