import { Brushes } from "@components";
import { DetailsPopup } from "@components/popup/DetailsPopup";
import { Portfolio as PortfolioType } from "@constant/type";
import { dataImage, portfolioHover } from "@utility/utilits";
import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import { config, DELAY_TIME, PORTFOLIO_CATEGORIES } from "./constant";
import { PortfolioCategories } from "./PortfolioCategories";
import { PortfolioList } from "./PortfolioList";

interface Props {
  portfolioContent: PortfolioType;
}

export const Heading = ({ heading, tagline, description }) => {
  return (
    <div className="dizme_tm_main_title" data-align="center">
      <span>{heading}</span>
      <h3>{tagline}</h3>
      <p>{description}</p>
    </div>
  );
};

const Portfolio: React.FC<Props> = ({ portfolioContent }) => {
  const { heading, tagline, description, projectList } = portfolioContent || {};
  const [filterKey, setFilterKey] = useState("*");
  const [popup, setPopup] = useState(0);
  const isotope = useRef(null);

  const brushList = [
    { num: 1, className: "brush_1 zoomIn" },
    { num: 2, className: "brush_2 fadeInRight" },
  ];

  useEffect(() => {
    dataImage();
    portfolioHover();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery_zoom", config);
    }, DELAY_TIME);
    return () => isotope?.current?.destroy();
  }, []);

  useEffect(() => {
    if (isotope.current) {
      const filter = filterKey === "*" ? "" : `.${filterKey}`;
      isotope.current.arrange({ filter });
    }
  }, [filterKey]);

  return (
    <div className="dizme_tm_section" id="portfolio">
      <DetailsPopup
        open={popup}
        close={() => setPopup(0)}
        id={popup}
        projectList={projectList}
      />
      <div className="dizme_tm_portfolio">
        <div className="container">
          <Heading
            heading={heading}
            tagline={tagline}
            description={description}
          />
          <PortfolioCategories
            filterKey={filterKey}
            portfolioCategories={PORTFOLIO_CATEGORIES}
            handleFilterKeyChange={setFilterKey}
          />
          <div className="dizme_tm_portfolio_titles" />
          <PortfolioList
            projectList={projectList}
            onClick={(id: number) => setPopup(id)}
          />
        </div>
        <Brushes imagePath="portfolio" brushList={brushList} />
      </div>
    </div>
  );
};

export default Portfolio;
