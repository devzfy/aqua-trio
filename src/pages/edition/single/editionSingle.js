import clas from './main.module.scss'
import Image1 from '../../../assets/images/Rectan.png'
import Image2 from '../../../assets/images/Rectangle 129.png'
import React from 'react'
import Header from '../../../container/header/header'
import Footer from '../../../container/footer/footer'
import { useNavigate } from 'react-router-dom'


const EditionSingle = ()=>{
    const navigate = useNavigate()
    return (
        <div className={clas.EditionSingle_wrapper}>
            <React.Fragment>
                <Header/>
            <div className="container">
                <div className={clas.top_image}>
                    <img src={Image1} alt="" />
                </div>
                <div className={clas.content}>
                    <h2>Саид Ахмад. Горизонт</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu mauris varius non feugiat facilisis amet sit. Vestibulum, massa magnis arcu ut diam diam. Dictum ligula mattis nisi, quam nibh porttitor vel dignissim pellentesque. Neque et quisque orci cursus tincidunt felis, lorem hendrerit.</p>
                </div>
                <div className={clas.bottom_image}>
                    <img src={Image2} alt="" />
                </div>
                <div className={clas.btn}>
                    <button onClick={()=> navigate('/edition/10/readbook')}>Читать книгу</button>
                </div>
            </div>
            <Footer/>
            </React.Fragment>
        </div>
    )
}

export default EditionSingle