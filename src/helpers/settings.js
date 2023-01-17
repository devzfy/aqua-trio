import { ArrowNext, ArrowPrev } from "../assets/icons/icons";

const SampleNextArrow = (props)=> {
    const { className, onClick } = props;
    return (
      <button
        className={className}
        onClick={onClick}
      ><ArrowNext/></button>
    );
  }

  const SamplePrevArrow = (props)=> {
    const { className, onClick } = props;
    return (
      <button
        className={className}
        onClick={onClick}
      ><ArrowPrev/></button>
    );
  }

export const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
};

export const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive:[
        {
            breakpoint: 600,
            settings:{
                slidesToShow:2,
                slidesToScroll: 1
            }
        }
    ]
};