import React from "react";
import clas from './main.module.scss'
import Header from '../../container/header/header'
import Footer from '../../container/footer/footer'
import { Pen, Sms, ChangePhoto, Achievement } from "../../assets/icons/icons";
import Ivan from '../../assets/images/ivan.png'

const Profile = () => {
    const fake = [1,1,1,1,1,1,1]
    return <React.Fragment>
        <Header/>
            <div className={clas.Profile_wrapper}>
                <div className={clas.page_wrapper}>
                    <div className="container">
                        <h1>Личный кабинет</h1>
                    </div>
                </div>
                <div className="container">
                    <div className={clas.profile_info}>
                        <div className={clas.image}>
                            <img src={Ivan} alt="" />
                            <button>
                                <span>Изменить фотографию</span>
                                <ChangePhoto/>
                            </button>
                        </div>
                        <div className={clas.information}>
                            <ul>
                                <li>Имя</li>
                                <li>Иван</li>
                            </ul>
                            <ul>
                                <li>Фамилия</li>
                                <li>Иванов</li>
                            </ul>
                            <ul>
                                <li>Дата рождения</li>
                                <li>09.09.1999</li>
                            </ul>
                            <ul>
                                <li>Пол</li>
                                <li>Мужской</li>
                            </ul>

                            <ul>
                                <li>Номер телефона</li>
                                <li>+998 99 999 99 99 </li>
                            </ul>
                            <ul>
                                <li>E-mail</li>
                                <li>ivan@gmail.com</li>
                            </ul>
                        </div>
                        <div className={clas.edit_profile}>
                            <button><Sms/></button>
                            <button><Pen/>Изменить</button>
                        </div>
                    </div>

                    <div className={clas.my_achievements}>
                        {
                            fake.map(()=>{
                                return <div className={clas.achievement_card}>
                                            <img src="" alt="" />
                                            <div className={clas.award}>
                                                <Achievement/>
                                                <span>80</span>
                                            </div>
                                        </div>
                            })
                        }
                    </div>
                </div>
            </div>
        <Footer/>
    </React.Fragment>
}

export default Profile
