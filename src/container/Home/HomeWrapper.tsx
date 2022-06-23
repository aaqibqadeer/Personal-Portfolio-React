import { useThemeContext } from "@context/theme";

interface Props {
  children: React.ReactNode;
}

export const HomeWrapper: React.FC<Props> = ({ children }) => {
  const { darkTheme } = useThemeContext();
  const backgroundImage = `url(/img/slider/${darkTheme ? 2 : 1}.jpg)`;
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
