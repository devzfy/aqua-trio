import { Play, Favourite, Download } from "../../assets/icons/icons";
import Image from "../../assets/images/Ellipse 4.png";
import clas from "./main.module.scss";
const MusicPlayer = () => {
  return (
    <div className={clas.MusicPlayer_wrapper}>
      <div className={clas.image_text}>
        <img src={Image} alt="" />
        <div className={clas.name}>
          <span>Маком</span>
          <span>Содыкбек Солиев</span>
        </div>
      </div>
      <div className={clas.music_terms}>
        <button>
          <Play />
        </button>
        <button>
          <Download />
        </button>
        <button>
          <Favourite />
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
