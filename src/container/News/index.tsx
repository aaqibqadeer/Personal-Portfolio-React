import { useEffect, useState } from "react";
import { BlogPopUp } from "../../components";
import { aTagClick, fatchData } from "../../utilits";
import { BlogList } from "./BlogList";

export const News = () => {
  const [data, setData] = useState([]);
  const [popupData, setPopupData] = useState({});
  const [popup, setPopup] = useState(false);

  const getData = async () => {
    setData(await fatchData("/static/blog.json"));
    aTagClick();
  };

  useEffect(() => {
    getData();
  }, []);

  const onClick = (blog) => {
    setPopupData(blog);
    setPopup(true);
  };

  return (
    <div className="dizme_tm_section" id="blog">
      <BlogPopUp open={popup} data={popupData} close={() => setPopup(false)} />
      <div className="dizme_tm_news">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>From My Blog</span>
            <h3>{`Our Recent Updates, Blog, Tips, Tricks & More`}</h3>
          </div>
          <BlogList data={data} onClick={onClick} />
        </div>

        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/news/1.png" alt="image" />
        </div>

        <div className="brush_2 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/news/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
