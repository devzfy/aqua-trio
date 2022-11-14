import React, {useState} from 'react'
import styles from './header.module.scss'
import { Link } from 'react-router-dom'
import {Search, Logo, Burger} from '../../assets/icons/icons'
import Modal from '../modal/Modal'
import Authorization from '../../auth/auth'
import BurgerModal from '../burger/burger'
import SearchIcons from '../../assets/icons/sear.png'
import Close from '../../assets/icons/close.png'

const Header = () => {
    const bod = document.querySelector('body')
    const [showModal, setShowModal] = useState(false)
    const [burger, setBurger] = useState(false)
    const [ active, setActive ] = useState(false)
    const [lang, setLang] = useState(true)
    if(active || burger){
        bod.classList.add('is_modal_open')
    }else{
        bod.classList.remove('is_modal_open')
    }
    const close = ()=>{
        setShowModal(false)
    }
    const openModal = ()=>{
        setShowModal(true)
    }
    
  return (
    <div className={styles.Header_wrapper}>
      <div className='container'>
        <div className={styles.inner}>
            <div className={styles.logo}> 
                <Logo/>
                <button onClick={()=> setBurger(true)} className={styles.burger_btn}>
                    <Burger/>
                </button>
            </div>
            <div className={styles.links}>
                <ul className={styles.header_ul}>
                    <li><Link to={'/'}>O проекте</Link></li>
                    <li><Link to={"/news"}>Новости культуры</Link></li>
                    <li><Link to={"/courses"}>Курсы</Link></li>
                    <li><Link to={'/favourite'}>Избранное</Link></li>
                </ul>
            </div>
            <div className={styles.terms}>
                <div className={styles.lang_select}>
                   {
                    lang ? <button onClick={()=> setLang(!lang)}>ЎЗ</button> : <button onClick={()=> setLang(!lang)}>
                    Рус</button>
                   }
                </div>
                <div className={styles.search}>
                    <button className={styles.search_btn} onClick={()=> setActive(true)}><Search/></button>
                </div>
                <div className={styles.sign}>
                    <button className='univ_btn' onClick={openModal}>Войти</button>
                </div>
            </div>
        </div>
      </div>
    <Modal open={showModal} close={close} name={true}>
        <Authorization/>
    </Modal> 

    <div className={`${styles.overlay} ${active ? styles.active : null}`}></div>
    <div className={`${styles.search_place} ${active ? styles.active : null}`}>
        <div className={styles.search_inout}>
            <input placeholder='Text here ... ' type="search" name="" id="" />
            <button><img src={SearchIcons} alt="" /></button>
            <button onClick={()=> setActive(false)}><img src={Close} alt="" /></button>
        </div>
    </div>

    {
        burger ? <BurgerModal  setOpen={setBurger}/> : null
    }
    </div>
  )
}

export default Header
