interface Props {
  title: string;
  url: string;
  setToggle?: () => void;
}

export const HeaderItem: React.FC<Props> = ({ title, url, setToggle }) => {
  return (
    <li className="">
      <a href={url} onClick={setToggle ? setToggle : null}>
        {title}
      </a>
    </li>
  );
};
