import style from "./main.module.scss";
import Header from "../../../container/header/header";
import Footer from "../../../container/footer/footer";
import Image from "../../../assets/images/Rectangle 45 (1).png";

const SingleNew = () => {
  return (
    <>
      <Header />
      <div className={style.news_single_wrapper}>
        <div className="container">
          <div className={style.up_block}>
            <div className={style.up_block_image}><img src={Image} alt="" /></div>
            <h3 className={style.up_block_name}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ac
              sollicitudin cursus velit
            </h3>
            <p className={style.up_block_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ac
              sollicitudin cursus velit, faucibus viverra Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Est ac sollicitudin cursus velit,
              faucibus viverra Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Est ac sollicitudin cursus velit, faucibus
              viverra Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div className={style.down_block}>
            <div className={style.mini_images}>
                <img src={Image} alt="" />
                <img src={Image} alt="" />
                <img src={Image} alt="" />
            </div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ac sollicitudin cursus velit, faucibus viverra Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ac sollicitudin cursus velit, faucibus viverra Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ac sollicitudin cursus velit, faucibus viverra Lorem ipsum dolor sit amet, consectetur adipiscing elit
           </p>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ac sollicitudin cursus velit, faucibus viverra Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ac sollicitudin cursus velit, faucibus viverra Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ac sollicitudin cursus velit, faucibus viverra Lorem ipsum dolor sit amet, consectetur adipiscing elit
           </p>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ac sollicitudin cursus velit, faucibus viverra Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Est ac sollicitudin cursus velit, faucibus viverra Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ac sollicitudin cursus velit, faucibus viverra Lorem ipsum dolor sit amet, consectetur adipiscing elit
           </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleNew;
