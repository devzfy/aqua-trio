import style from './main.module.scss'
import Header from '../../container/header/header'
import Footer from '../../container/footer/footer'
import Banner from '../../container/banner/banner'
import Image from '../../assets/images/Rectangle.png'
import Image1 from '../../assets/images/Rectangle 45.png'
import Image2 from '../../assets/images/Rectangle 56.png'
import {  data_one, data_five } from '../../data/collection'
import { CulturalCard } from '../../components'
import 'antd/dist/antd.css';
import {SliderFiveCard} from '../../components'
import Slider from 'react-slick'
import { settings2 } from '../../helpers/settings'
import {PaginationCustome} from '../../components'
const News = ()=>{
    
    

    return (
        <>
        <Header/>
            <div className={style.new_culture_wrapper}>
                <Banner
                    name={'Новости культуры'}
                    text={'Lorem ipsum dolor sit amet, consectetur'}
                    image={Image}
                />
                <div className="container">
                    <div className={style.Culture_Uzbekistan}>
                        <div className={style.left_side}>
                            <img src={Image1} alt="" />
                            <img src={Image2} alt="" />
                        </div>
                        <div className={style.right_side}>
                            <h3 className={style.side_name}>Культура Узбекистана</h3>
                            <p className={style.side_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam quam morbi donec nibh dapibus auctor proin semper. Sit a rhoncus ultricies malesuada. Felis dictum enim adipiscing euismod imperdiet. Cras convallis habitasse imperdiet posuere morbi pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. donec nibh dapibus auctor proin semper. Sit a rhoncus ultricies malesuada. Cras convallis habitasse imperdiet posuere morbi pharetra. Sit a rhoncus ultricies malesuada. Cras convallis habitasse imperdiet posuere morbi pharetra.Sit a rhoncus ultricies malesuada. Cras convallis habitasse imperdiet posuere morbi pharetra.</p>
                        </div>
                    </div>

                    <div className={style.culture_cards_wrapper}>
                        {
                            data_one?.map((el,index)=>{
                                return <div key={index} className={style.culture_cards}>
                                    <CulturalCard image={el.image1} name={el.text} text={el.text}/>
                                </div>
                            })
                        }
                        <PaginationCustome/>
                    </div>

                    <div className={style.culture_cards_wrapper}>
                        <h1>Последние новости</h1>
                        {
                            data_one?.slice(0,3).map((el,index)=>{
                                return <div key={index} className={style.culture_cards}>
                                    <CulturalCard image={el.image1} name={el.text} text={el.text}/>
                                </div>
                            })
                        }
                        <PaginationCustome/>
                    </div>



                    <div className={style.culture_slider_wrapper}>
                        <h1>Последние новости</h1>
                        <Slider {...settings2}>
                            {
                                data_five?.map((el,index)=>{
                                    return <div key={index} className={style.culture_cards}>
                                        <SliderFiveCard image={el.image}  text={el.label}/>
                                    </div>
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        <Footer/>    
        </>
    )
}

export default News