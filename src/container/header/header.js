import React from 'react'
import styles from './header.module.scss'
import { Link } from 'react-router-dom'
import {Search, Logo, Burger} from '../../assets/icons/icons'

const Header = () => {
  return (
    <div className={styles.Header_wrapper}>
      <div className='container'>
        <div className={styles.inner}>
            <div className={styles.logo}> 
                <Logo/>
                <Burger/>
            </div>
            <div className={styles.links}>
                <ul className={styles.header_ul}>
                    <li><Link to={'/'}>O проекте</Link></li>
                    <li><Link to={"/news"}>Новости культуры</Link></li>
                    <li><Link to={"/course"}>Курсы</Link></li>
                    <li><Link to={'/favourites'}>Избранное</Link></li>
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
                    <button className='univ_btn'>Войти</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
