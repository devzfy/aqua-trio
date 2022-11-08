import styles from "./main.module.scss";
import React, { useState } from "react";
import { OpenEye } from "../assets/icons/icons";

const Authorization = () => {
  const [openEye, setOpenEye] = useState(true);
  const [log, setLog] = useState(null);

  return (
    <React.Fragment>
      <div className={styles.page_wrapper}>
        {log === null ? (
          <div className={styles.modal_content_wrapper}>
            <div className={styles.choose_auth}>
              <button onClick={()=> setLog(true)} className={styles.btn_one}>Вход</button>
              <button onClick={()=> setLog(false)} className={styles.btn_two}>Регистрация</button>
            </div>
          </div>
        ) : log === true ? (
          <form className={styles.login_page}>
            <div className={styles.log}>
              <div className={styles.field}>
                <label htmlFor="">Логин или почта</label>
                <input type="email" required={true} name="" id="" />
              </div>
              <div className={styles.field}>
                <label htmlFor="">Пароль</label>
                <input
                  type={openEye ? "password" : "text"}
                  required={true}
                  name=""
                  id=""
                />
                <span
                  className={styles.show_pass}
                  onClick={() => setOpenEye(!openEye)}
                >
                  <OpenEye />
                </span>

                <button>Забыли пароль?</button>
              </div>
              <div className={styles.btn}>
                <button className="univ_btn">Войти</button>
              </div>
            </div>
          </form>
        ) : log === false ? (
          <form className={styles.register_page}>
            <div className={styles.inner}>
              <div className={styles.form_input}>
                <label htmlFor="">Ваше имя</label>
                <input required={true} type="text" name="" id="" />
              </div>
              <div className={styles.form_input}>
                <label htmlFor="">Дата рождения</label>
                <input required={true} type="text" name="" id="" />
              </div>
              <div className={styles.form_input}>
                <label htmlFor="">Ваш E-mail</label>
                <input required={true} type="text" name="" id="" />
              </div>
              <div className={styles.form_input}>
                <label htmlFor="">Ваша фамилия</label>
                <input required={true} type="text" name="" id="" />
              </div>
              <div className={styles.form_input}>
                <label htmlFor="">Пол</label>
                <div className={styles.gender_btn}>
                  <button>Мужской</button>
                  <button>Женский</button>
                </div>
              </div>
              <div className={styles.form_input}>
                <label htmlFor="">Ваш номер телефона</label>
                <input required={true} type="text" name="" id="" />
              </div>
            </div>
            <button className="univ_btn">Зарегестрироваться</button>
          </form>
        ) : null}

        {/* <form className={styles.create_password} action="">
            <div className={styles.input_pass}>
                <label htmlFor="">Логин или почта</label>
                <input required={true} type="text" name="" id="" />
            </div>

            <div className={styles.input_pass}>
                <label htmlFor="">Пароль</label>
                <input required={true} type={openEye ? 'password' : 'text'} name="" id="" />
                <span onClick={()=> setOpenEye(!openEye)}><OpenEye/></span>
            </div>

            <div className={styles.input_pass}>
                <label htmlFor="">Повторите пароль</label>
                <input required={true} type={openEye ? 'password' : 'text'} name="" id="" />
                <span onClick={()=> setOpenEye(!openEye)}><OpenEye/></span>
            </div>
            <div className={styles.submit_btn}>
                <button className="univ_btn">Войти</button>
            </div>
        </form> */}
      </div>
    </React.Fragment>
  );
};

export default Authorization;
