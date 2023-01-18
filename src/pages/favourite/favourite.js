import Header from '../../container/header/header'
import Footer from '../../container/footer/footer'
import {PaginationCustome} from '../../components'
import clas from './main.module.scss'
import React from 'react'
import Image from '../../assets/images/Rectangle 96.png'

const Favourite = ()=>{
    const arr = [1,1,1,1,11,1,1,1,1,1,1,1,11,]
    return <React.Fragment>
        <Header/>
        <div className={clas.Favourite_wrapper}>
        <div className="container">
            <div className={clas.inner}>
                <h1>Избранное</h1>
                <div className={clas.card_wrapper}>
                    {
                        arr.map(()=>{
                            return <div className={clas.card}><img src={Image} alt="" /></div>
                        })
                    }
                </div>
            </div>
        <div className={clas.pag}>
        <PaginationCustome/>
        </div>
        </div>
    </div>
    <Footer/>
    </React.Fragment>
}

export default Favourite