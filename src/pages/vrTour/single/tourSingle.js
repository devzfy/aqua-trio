import Header from "../../../container/header/header";
import Footer from "../../../container/footer/footer";
import clas from './main.module.scss'
import React from "react";
import Image from '../../../assets/images/Rectangle 2 (5).png'
import {data_four} from '../../../data/collection'
import { SliderFourCard } from "../../../components";


const TourSingle = ()=>{
    return (
        <React.Fragment>
            <Header/>
            <div className={clas.TourSingle_wrapper}>
                <div className="container">
                    <div className={clas.inner}>
                        <div className={clas.into_content}>
                            <img src={Image} alt="" />
                            <h2>Музей прикладного искусства</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu mauris varius non feugiat facilisis amet sit. Vestibulum, massa magnis arcu ut diam diam. Dictum ligula mattis nisi, quam nibh porttitor vel dignissim pellentesque. Neque et quisque orci cursus tincidunt felis, lorem hendrerit.</p>
                        </div>

                        <div className={clas.info_cards}>
                            {
                                data_four.map(el =>{
                                    return <div className={clas.card}>
                                        <SliderFourCard image={el.image} text={el.label}/>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )   
}

export default TourSingle