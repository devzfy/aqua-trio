import React from 'react'
import modal from './modal.module.scss'
import ReactDOM from  'react-dom'
const Modal = ({children, open, close})=>{

    let bod = document.querySelector('body')
    if(open){
        bod.classList.add('modal_is_open')
    }else{
        bod.classList.remove('modal_is_open')
    }

    console.log(open);
    if(!open) return null
    
    return ReactDOM.createPortal(
        <div className={modal.modal_scroll}>
              <div className={modal.header_title}>
                <div className="container">
                    <h1>Регистрация </h1>
                </div>
              </div>
            <div className={modal.overlay} onClick={close}></div>
            <div className={modal.modal_wrapper}>
                {children}
            </div>
        </div>,
        document.getElementById('portal')
    )
}
export default Modal