import clas from './main.module.scss'
import React from 'react'
import Header from '../../../container/header//header'
import Footer from '../../../container/footer/footer'
import Image1 from '../../../assets/images/Rectangle100.png'
import Image2 from '../../../assets/images/Rectangle 130.png'
import Image3 from '../../../assets/images/Rectangle 131.png'
import Image4 from '../../../assets/images/Rectangle 132.png'
import Image5 from '../../../assets/images/Rectangle 133.png'

const FigureSingle = ()=>{
    return (
        <React.Fragment>
            <Header/>
                <div className={clas.FigureSingle_wrapper}>
                    <div className="container">
                        <div className={clas.inner}>
                            <div className={clas.intro_single}>
                                <img className={clas.intro_image} src={Image1} alt="" />
                                <h2 className={clas.intro_name}>Аббасов Шухрат Салихович</h2>
                                <p className={clas.intro_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ac sollicitudin cursus velit, faucibus viverra Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                            <div className={clas.holder}>
                                <h1>Биография</h1>
                            </div>
                            <div className={`${clas.info_content} ${clas.first_child}`}>
                                <div className={clas.text}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis sed odio eu eros sollicitudin. Elementum diam quam nisl aliquet amet hendrerit sem sit turpis. Molestie hendrerit pretium tincidunt egestas et facilisis lorem malesuada. Turpis amet ac in odio quis venenatis, interdum ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis sed odio eu eros sollicitudin. Elementum diam quam nisl aliquet amet hendrerit sem sit turpis. Molestie hendrerit pretium tincidunt egestas et facilisis lorem malesuada. Turpis amet ac in odio quis venenatis, interdum ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis sed odio eu  malesuada. Turpis amet ac in odio quis venenatis, interdum ultrices.</p>
                                </div>
                                <div className={clas.image}>
                                    <img className={clas.one} src={Image2} alt="" />
                                    <img className={clas.two} src={Image3} alt="" />
                                </div>
                            </div>
                            <div className={`${clas.info_content} ${clas.second_child}`}>
                                <div className={clas.image}>
                                    <img className={clas.one} src={Image4} alt="" />
                                    <img className={clas.two} src={Image5} alt="" />
                                </div>
                                <div className={clas.text}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis sed odio eu eros sollicitudin. Elementum diam quam nisl aliquet amet hendrerit sem sit turpis. Molestie hendrerit pretium tincidunt egestas et facilisis lorem malesuada. Turpis amet ac in odio quis venenatis, interdum ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis sed odio eu eros sollicitudin. Elementum diam quam nisl aliquet amet hendrerit sem sit turpis. Molestie hendrerit pretium tincidunt egestas et facilisis lorem malesuada. Turpis amet ac in odio quis venenatis, interdum ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis sed odio eu  malesuada. Turpis amet ac in odio quis venenatis, interdum ultrices.</p>
                                </div>
                                
                            </div>
                            <div className={clas.last_content}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis sed odio eu eros sollicitudin. Elementum diam quam nisl aliquet amet hendrerit sem sit turpis. Molestie hendrerit pretium tincidunt egestas et facilisis lorem malesuada. Turpis amet ac in odio quis venenatis, interdum ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis sed odio eu eros sollicitudin. Elementum diam quam nisl aliquet amet hendrerit sem sit turpis. Molestie hendrerit pretium tincidunt egestas et facilisis lorem malesuada. Turpis amet ac in odio quis venenatis, interdum ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis sed odio eu  malesuada. Turpis amet ac in odio quis venenatis, interdum ultrices.</p>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </React.Fragment>
    )
}

export default FigureSingle