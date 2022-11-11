import React, {useState} from 'react'
import styles from './header.module.scss'
import { Link } from 'react-router-dom'
import {Search, Logo, Burger} from '../../assets/icons/icons'
import Modal from '../modal/Modal'
import Authorization from '../../auth/auth'
import BurgerModal from '../burger/burger'

const Header = () => {
    const [showModal, setShowModal] = useState(false)
    const [burger, setBurger] = useState(false)
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
                    <li><Link to={'/rate'}>Рейтинги</Link></li>
                </ul>
            </div>
            <div className={styles.terms}>
                <div className={styles.lang_select}>
                    <select name="" id="">
                        <option value="">ЎЗ</option>
                    </select>
                </div>
                <div className={styles.search}>
                    <button className={styles.search_btn}><Search/></button>
                    <div className={styles.search_place}>
                        <input className='Text here ...' type="search" name="" id="" />
                    </div>
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
    {
        burger ? <BurgerModal  setOpen={setBurger}/> : null
    }
    </div>
  )
}

export default Header
