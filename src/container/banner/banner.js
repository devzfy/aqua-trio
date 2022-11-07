import style from './banner.module.scss'


const Banner = ({name, text, image}) => {
  return (
    <div className={style.news_banner} style={{
        backgroundImage: `url(${image})`
    }}>
      <div className={style.liner_text}>
        <h1>{name}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Banner