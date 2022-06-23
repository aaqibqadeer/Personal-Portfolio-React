import { MobileTitle } from "./MobileTitle";

interface Props {
  id: number;
  title: string;
  category: string;
  children: React.ReactNode;
  className: string;
  onClick?: (id: number) => void;
}

export const PortfolioItemWraper: React.FC<Props> = ({
  id,
  title,
  category,
  children,
  className,
  onClick,
}) => {
  return (
    <li className={`grid-item ${className}`} onClick={() => onClick?.(id)}>
      <div className="inner tw-border-2 tw-border-solid tw-border-slate-100">
        <div
          className="entry dizme_tm_portfolio_animation_wrap"
          data-title={title}
          data-category={category}
        >
          {children}
        </div>
        <MobileTitle title={title} category={category} />
      </div>
    </li>
  );
};
