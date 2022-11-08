import burger from "./main.module.scss";
import { Link } from "react-router-dom";
import { Close } from "../../assets/icons/icons";
import { useState } from "react";

const BurgerModal = ({ setOpen }) => {
  const [drop1, setDrop1] = useState(true);
  const [drop2, setDrop2] = useState(false);
  const [drop3, setDrop3] = useState(false);

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
      <div className={burger.owerlay}></div>
      <div className={burger.content}>
        <button onClick={()=>setOpen(false)} className={burger.close_btn}>
          <Close />
        </button>
        <ul className={burger.burger_ul}>
          <li>
            <Link className={burger.links}>О проекте</Link>
          </li>
          <li>
            <Link className={burger.links}>Новости культуры</Link>
          </li>
          <li>
            <Link className={burger.links}>Деятели культуры</Link>
          </li>
          <li>
            <Link className={burger.links}>Издания</Link>
          </li>
        </ul>
        <ul className={burger.dropdawn}>
          <li>
            <button
              onClick={() => open1()}
              className={`${burger.links}`}
            >
              Виртуальные туры
            </button>
          </li>
          <div
            className={`${burger.opened} ${burger.one} ${
                drop1 ? burger.active : null
            }`}
          >
            <li>
              <Link className={burger.mini_link}>Музеи</Link>
            </li>
            <li>
              <Link className={burger.mini_link}>Парки</Link>
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
            <button onClick={() => open2()} className={burger.links}>
              Курсы туры
            </button>
          </li>
          <div
            className={`${burger.opened} ${burger.two} ${
                drop2 ? burger.active : null
            }`}
          >
            <li>
              <Link className={burger.mini_link}>Музыка</Link>
            </li>
            <li>
              <Link className={burger.mini_link}>Театр</Link>
            </li>
            <li>
              <Link className={burger.mini_link}>Кино</Link>
            </li>
            <li>
              <Link className={burger.mini_link}>Ораторское искусство</Link>
            </li>
          </div>
        </ul>
        <ul className={burger.burger_ul}>
          <li>
            <Link className={burger.links}>Музыка</Link>
          </li>
        </ul>
        <ul className={burger.dropdawn}>
          <li>
            <button onClick={() => open3()} className={`${burger.links}`}>
              Курсы туры
            </button>
          </li>
          <div
            className={`${burger.opened} ${burger.three} ${
                drop3 ? burger.active : null
            }`}
          >
            <li>
              <Link className={burger.mini_link}>Национальная музыка</Link>
            </li>
            <li>
              <Link className={burger.mini_link}>Классическая музыка</Link>
            </li>
            <li>
              <Link className={burger.mini_link}>Мировая классика</Link>
            </li>
          </div>
        </ul>
        <ul className={burger.burger_ul}>
          <li>
            <Link className={burger.links}>Игры</Link>
          </li>
          <li>
            <Link className={burger.links}>Избранное</Link>
          </li>
          <li>
            <Link className={burger.links}>Личный кабинет</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerModal;
