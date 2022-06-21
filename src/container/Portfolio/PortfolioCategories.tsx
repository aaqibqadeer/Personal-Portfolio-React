import React from "react";

interface Props {
  portfolioCategories: string[];
  filterKey: string;
  handleFilterKeyChange: (key: string) => void;
}

export const PortfolioCategories: React.FC<Props> = ({
  filterKey,
  portfolioCategories,
  handleFilterKeyChange,
}) => {
  const activeBtn = (value) => (value === filterKey ? "current" : "");

  return (
    <div className="portfolio_filter">
      <ul>
        {portfolioCategories.map((category) => (
          <li key={category}>
            <a
              className={`c-pointer ${activeBtn(category)}`}
              onClick={() => handleFilterKeyChange(category)}
            >
              {category === "*" ? "All" : category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
