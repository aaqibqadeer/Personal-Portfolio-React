import parse from "html-react-parser";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fatchData } from "../../utilits";
import { ProcessLayout } from "./ProcessLayout";

interface Props {
  dark?: boolean;
}

export const Process: React.FC<Props> = ({ dark }) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    setData(await fatchData("/static/workProcess.json"));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ProcessLayout>
      <ul>
        {data?.map((data, i) => (
          <li className="wow fadeInUp" data-wow-duration="1s" key={i}>
            <div className="list_inner">
              <div className="icon">
                <span>
                  <Image
                    className="brush"
                    layout="fill"
                    src={`/img/brushes/process${dark ? "/dark" : ""}/${
                      i + 1
                    }.png`}
                    alt="image"
                  />
                  {parse(data.icons[dark ? "dark" : "light"])}
                </span>
              </div>

              <div className="title">
                <h3>{data.title}</h3>
              </div>

              <div className="text">
                <p>{data.dec}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </ProcessLayout>
  );
};
