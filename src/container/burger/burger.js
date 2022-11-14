import burger from "./main.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { Close } from "../../assets/icons/icons";
import { useState } from "react";
import Arrow from '../../assets/images/free-icon-arrow-point-to-right-32213.png'

const BurgerModal = ({ setOpen }) => {
  const [drop1, setDrop1] = useState(false);
  const [drop2, setDrop2] = useState(false);
  const [drop3, setDrop3] = useState(false);
  const navigate = useNavigate()

  const open1 = ()=>{
    setDrop1(!drop1)
    setDrop2(false)
    setDrop3(false)
  }
  const open2 = ()=>{
    setDrop1(false)
    setDrop2(!drop2)
    setDrop3(false)
  }
  const open3 = ()=>{
    setDrop1(false)
    setDrop2(false)
    setDrop3(!drop3)
  }

  return (
    <div className={burger.drawer_wrapper}>
      <div className={burger.owerlay} onClick={()=> setOpen(false)}></div>
      <div className={burger.content}>
        <button onClick={()=>setOpen(false)} className={burger.close_btn}>
          <Close />
        </button>
        <ul className={burger.burger_ul}>
          <li>
            <Link to={'/'} className={burger.links}>О проекте</Link>
          </li>
          <li>
            <Link to={'/news'} className={burger.links}>Новости культуры</Link>
          </li>
          <li>
            <Link to={'/culturalFigures'} className={burger.links}>Деятели культуры</Link>
          </li>
          <li>
            <Link to={'/edition'} className={burger.links}>Издания</Link>
          </li>
        </ul>
        <ul className={burger.dropdawn}>
          <li>
            <button
              onClick={() =>{
                navigate('/tour')
              }}
              className={`${burger.links}`}
            >
              Виртуальные туры
            </button>
            <button onClick={()=> open1()}>
              <img src={Arrow} alt="" />
            </button>
          </li>
          <div
            className={`${burger.opened} ${burger.one} ${
                drop1 ? burger.active : null
            }`}
          >
            <li>
              <Link onClick={()=> setOpen(false)} to={'/tour/museum'} className={burger.mini_link}>Музеи</Link>
            </li>
            <li>
              <Link  onClick={()=> setOpen(false)} to={'/tour/park'} className={burger.mini_link}>Парки</Link>
            </li>
          </div>
        </ul>
        <ul className={burger.burger_ul}>
          <li>
            <Link className={burger.links}>Клубы</Link>
          </li>
        </ul>
        <ul className={burger.dropdawn}>
          <li>
            <button onClick={()=> navigate('/courses')} className={burger.links}>
              Курсы
            </button>
            <button onClick={()=> open2()}><img src={Arrow} alt="" /></button>
          </li>
          <div
            className={`${burger.opened} ${burger.two} ${
                drop2 ? burger.active : null
            }`}
          >
            <li>
              <Link  onClick={()=> setOpen(false)} to={'/courses/music'} className={burger.mini_link}>Музыка</Link>
            </li>
            <li>
              <Link  onClick={()=> setOpen(false)} to={'/courses/theatre'} className={burger.mini_link}>Театр</Link>
            </li>
            <li>
              <Link  onClick={()=> setOpen(false)} to={'/courses/movie'} className={burger.mini_link}>Кино</Link>
            </li>
            <li>
              <Link  onClick={()=> setOpen(false)} to={'/courses/oratory'} className={burger.mini_link}>Ораторское искусство</Link>
            </li>
          </div>
        </ul>
        
        <ul className={burger.dropdawn}>
          <li>
            <Link to={'/music'} onClick={() => open3()} className={`${burger.links}`}>
              Музыка
            </Link>
          </li>
          <div
            className={`${burger.opened} ${burger.three} ${
                drop3 ? burger.active : null
            }`}
          >
            <li>
              <Link to={'/music/national'} className={burger.mini_link}>Национальная музыка</Link>
            </li>
            <li>
              <Link to={'/music/classic'} className={burger.mini_link}>Классическая музыка</Link>
            </li>
            <li>
              <Link to={'/music/worldClassic'} className={burger.mini_link}>Мировая классика</Link>
            </li>
          </div>
        </ul>
        <ul className={burger.burger_ul}>
          <li>
            <Link to={'/game'} className={burger.links}>Игры</Link>
          </li>
          <li>
            <Link to={'/favourite'} className={burger.links}>Избранное</Link>
          </li>
          <li>
            <Link to={'/profile'} className={burger.links}>Личный кабинет</Link>
          </li>
          <li>
            <Link to={'/rate'} className={burger.links}>Рейтинги</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerModal;
