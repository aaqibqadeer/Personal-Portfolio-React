interface Props {
  title: string;
  category: string;
}

export const MobileTitle: React.FC<Props> = ({ title, category }) => {
  return (
    <div className="mobile_title">
      <h3>{title}</h3>
      <span>{category}</span>
    </div>
  );
};
