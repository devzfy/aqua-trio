import { PaginationCustome } from "../../../components";
import clas from "./main.module.scss";
import Image from '../../../assets/images/Rectangle 129.png'
import Header from "../../../container/header/header";
import Footer from "../../../container/footer/footer";

const ReadBook = () => {
  return (
    <div className={clas.read_book_wrapper}>
        <Header/>
      <div className="container">
        <div className={clas.inner}>
        <img src={Image} alt="" />
        <h2>Саид Ахмад. Горизонт</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu
          mauris varius non feugiat facilisis amet sit. Vestibulum, massa magnis
          arcu ut diam diam. Dictum ligula mattis nisi, quam nibh porttitor vel
          dignissim pellentesque. Neque et quisque orci cursus tincidunt felis,
          lorem hendrerit. <br /> Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nulla eu mauris varius non feugiat facilisis amet sit.
          Vestibulum, massa magnis arcu ut diam diam. Dictum ligula mattis nisi,
          quam nibh porttitor vel dignissim pellentesque. Neque et quisque orci
          cursus tincidunt felis, lorem hendrerit. <br /> Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nulla eu mauris varius non feugiat
          facilisis amet sit. <br /> Vestibulum, massa magnis arcu ut diam diam. Dictum
          ligula mattis nisi, quam nibh porttitor vel dignissim pellentesque.
          Neque et quisque orci cursus tincidunt felis, lorem hendrerit.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu mauris
          varius non feugiat facilisis amet sit. Vestibulum, massa magnis arcu
          ut diam diam. Dictum ligula mattis nisi, quam nibh porttitor vel
          dignissim pellentesque. Neque et quisque orci cursus tincidunt felis,
          lorem hendrerit.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nulla eu mauris varius non feugiat facilisis amet sit. <br /><br />
          Vestibulum, massa magnis arcu ut diam diam. Dictum ligula mattis nisi,
          quam nibh porttitor vel dignissim pellentesque. Neque et quisque orci
          cursus tincidunt felis, lorem hendrerit.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nulla eu mauris varius non feugiat
          facilisis amet sit. Vestibulum, massa magnis arcu ut diam diam. Dictum
          ligula mattis nisi, quam nibh porttitor vel dignissim pellentesque.
          Neque et quisque orci cursus tincidunt felis, lorem hendrerit.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu mauris
          varius non feugiat facilisis amet sit. <br /> Vestibulum, massa magnis arcu
          ut diam diam. Dictum ligula mattis nisi, quam nibh porttitor vel
          dignissim pellentesque. <br /> Neque et quisque orci cursus tincidunt felis,
          lorem hendrerit.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nulla eu mauris varius non feugiat facilisis amet sit.
          Vestibulum, massa magnis arcu ut diam diam. Dictum ligula mattis nisi,
          quam nibh porttitor vel dignissim pellentesque. Neque et quisque orci
          cursus tincidunt felis, lorem hendrerit.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nulla eu mauris varius non feugiat
          facilisis amet sit. Vestibulum, massa magnis arcu ut diam diam. Dictum
          ligula mattis nisi, quam nibh porttitor vel dignissim pellentesque.
          Neque et quisque orci cursus tincidunt felis, lorem hendrerit.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu mauris
          varius non feugiat facilisis amet sit. <br /> Vestibulum, massa magnis arcu
          ut diam diam. Dictum ligula mattis nisi, quam nibh porttitor vel
          dignissim pellentesque. Neque et quisque orci cursus tincidunt felis,
          lorem hendrerit.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nulla eu mauris varius non feugiat facilisis amet sit.
          Vestibulum, massa magnis arcu ut diam diam. Dictum ligula mattis nisi,
          quam nibh porttitor amet sit. Vestibulum, massa magnis arcu ut diam
          diam. Dictum ligula mattis nisi, quam nibh porttitoligula mattis nisi,
          quam Neque et quisque orci cursus tincidunt felis, lorem hendrerit.
        </p>
        <PaginationCustome/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ReadBook;
