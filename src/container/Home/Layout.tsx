interface Props {
  dark?: boolean;
  children: React.ReactNode;
}

export const HomeLayout: React.FC<Props> = ({ dark, children }) => {
  const backgroundImage = `url(/img/slider/${dark ? 2 : 1}.jpg)`;
  return (
    <div className="dizme_tm_section" id="home">
      <div className="dizme_tm_hero">
        <div
          className="background"
          // data-img-url={backgroundImage}
          style={{ backgroundImage: backgroundImage }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
