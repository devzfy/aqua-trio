import clas from './main.module.scss'
import React from 'react'
import Header from '../../../container/header//header'
import Footer from '../../../container/footer/footer'

const FigureSingle = ()=>{
    return (
        <React.Fragment>
            <Header/>
                <div className={clas.FigureSingle_wrapper}>
                    <h1>Salom single</h1>
                </div>
            <Footer/>
        </React.Fragment>
    )
}

export default FigureSingle