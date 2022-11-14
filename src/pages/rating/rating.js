import clas from "./main.module.scss";
import Header from "../../container/header/header";
import Footer from "../../container/footer/footer";
import Banner from "../../container/banner/banner";
import React, { useState } from "react";
import Image from "../../assets/images/Re.png";
import { PaginationCustome, RateCard } from "../../components";
import Modal from "../../container/modal/Modal";
import Comment from "../../container/comments/comments";

const Rate = () => {
    const [show, setShow] = useState(false )
  const page_data = [
    {
      name: "Музеи",
      mini_data: [1, 2, 3],
    },
    {
      name: "Театры",
      mini_data: [1, 2, 3],
    },
    {
      name: "Детская школа музыки и искусства",
      mini_data: [1, 2, 3],
    },
  ];

  const close = ()=>{
    setShow(false)
  }
  const open = ()=>{
    setShow(true)
  }

  return (
    <React.Fragment>
      <Header />
      <Banner
        image={Image}
        name={"Рейтинги"}
        text={"Lorem ipsum dolor sit amet, consectetur"}
      />
      <div className={clas.Rate_wrapper}>
        <div className="container">
            {page_data.map((el) => {
            return <div className={clas.page_cards}>
                <h1 className={clas.holder}>{el.name}</h1>
                <div className={clas.rating_cards}>
                {
                    el.mini_data.map(()=>{
                        return <div className={clas.bruh}>
                            <RateCard open={open}/>
                        </div>
                    })
                }
                </div>
                <PaginationCustome/>
            </div>;
            })}
        </div>
      </div>
      <Footer />
      <Modal open={show} close={close} name={false}>
        <Comment/>
      </Modal>
    </React.Fragment>
  );
};

export default Rate;
