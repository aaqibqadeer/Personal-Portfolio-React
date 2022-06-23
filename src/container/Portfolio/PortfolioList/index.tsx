import { ProjectList } from "@constant/type";
import { portfolioProps, portfolioType } from "../constant";
import { PortfolioDetailView } from "./PortfolioDetailView";
import { PortfolioItemWraper } from "./PortfolioItemWraper";

interface Props {
  projectList: ProjectList[];
  onClick?: (id: number) => void;
}

export const PortfolioList: React.FC<Props> = ({ projectList, onClick }) => {
  return projectList ? (
    <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
      <ul className="gallery_zoom grid">
        {projectList?.map((project) => {
          const { title, type, id, thumbnail } = project || {};
          const { className, hoverImage } = portfolioProps[type] || {};

          return (
            <PortfolioItemWraper
              id={id}
              key={id}
              title={title}
              category="Click to view detail"
              className={project.category}
              onClick={type === portfolioType.DETAIL ? onClick : null}
            >
              <PortfolioDetailView
                className={className}
                href={null}
                portfolioImage={thumbnail}
                hoverImage={hoverImage}
              />
            </PortfolioItemWraper>
          );
        })}
      </ul>
    </div>
  ) : null;
};
