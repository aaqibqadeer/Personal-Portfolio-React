import { portfolioProps, portfolioType } from "../constant";
import { PortfolioDetailView } from "./PortfolioDetailView";
import { PortfolioItemWraper } from "./PortfolioItemWraper";

interface PortfolioList {
  id: number;
  title: string;
  type: string;
  category: string;
  image: string;
  href?: string;
  images?: string[];
  shortDesc?: string;
  longDesc?: string;
  client?: string;
  date?: string;
}

interface Props {
  portfolioList: PortfolioList[];
  onClick: (id: number) => void;
}

export const PortfolioList: React.FC<Props> = ({ portfolioList, onClick }) => {
  return portfolioList ? (
    <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
      <ul className="gallery_zoom grid">
        {portfolioList?.map((portfolio) => {
          const { title, href, image, type, id } = portfolio || {};
          const { className, hoverImage } = portfolioProps[type] || {};

          return (
            <PortfolioItemWraper
              id={id}
              key={id}
              title={title}
              category="Click to view detail"
              className={portfolio.category}
              onClick={type === portfolioType.DETAIL ? onClick : null}
            >
              <PortfolioDetailView
                className={className}
                href={null}
                portfolioImage={image}
                hoverImage={hoverImage}
              />
            </PortfolioItemWraper>
          );
        })}
      </ul>
    </div>
  ) : null;
};
