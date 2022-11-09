import Header from "../../../container/header/header";
import Footer from "../../../container/footer/footer";
import clas from './main.module.scss'
import React from "react";

const TourSingle = ()=>{
    return (
        <React.Fragment>
            <Header/>
            <div className={clas.TourSingle_wrapper}>
                <div className="container">
                    <div className={clas.inner}>
                        <h1>single</h1>
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )   
}

export default TourSingle