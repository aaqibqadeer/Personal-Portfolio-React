import { BlogPopUp } from "@components";
import { Blog } from "@constant/type";
import { aTagClick } from "@utility/utilits";
import { useEffect, useState } from "react";
import { BlogList } from "./BlogList";

interface Props {
  blogContent: Blog[];
}

export const News: React.FC<Props> = ({ blogContent }) => {
  const [popupData, setPopupData] = useState({});
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    aTagClick();
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
          <BlogList data={blogContent} onClick={onClick} />
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
