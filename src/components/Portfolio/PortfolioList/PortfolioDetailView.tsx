interface Props {
  className: string;
  href: string;
  portfolioImage: string;
  hoverImage: string;
}

export const PortfolioDetailView: React.FC<Props> = ({
  className,
  href,
  portfolioImage,
  hoverImage,
}) => {
  return (
    <a className={className} href={href}>
      <img src={`img/thumbs/${hoverImage}`} alt="image" />
      <div className="main" data-img-url={`img/portfolio/${portfolioImage}`} />
    </a>
  );
};
