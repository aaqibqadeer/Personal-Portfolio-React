import { SwiperContainer } from "@components";
import { fatchData } from "@utility/utilits";
import { useEffect, useState } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { BackgroundImages } from "./BackgroundImages";
import { Heading } from "./Heading";

SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay]);

export interface TestimonialItem {
  name: string;
  img: string;
  profession: string;
  details: string;
  className: string;
}

export interface Testimonials {
  title: string;
  heading1: string;
  heading2: string;
  testimonials: TestimonialItem[];
}

export const Testimonial = () => {
  const [data, setData] = useState<Testimonials>(null);

  const getData = async () => {
    setData(await fatchData("/static/testimonial.json"));
  };

  useEffect(() => {
    getData();
  }, []);

  const { title, heading1, heading2 } = data || {};

  return (
    <div className="dizme_tm_section" id="testimonials">
      <div className="dizme_tm_testimonials tw-mb-0">
        <Heading title={title} heading1={heading1} heading2={heading2} />
        <div className="list_wrapper">
          <div className="total">
            <SwiperContainer data={data} />

            <BackgroundImages
              testimonials={data?.testimonials?.slice(0, 4)}
              className="left_details"
              circleColors={["green", "yellow", "border"]}
            />

            <BackgroundImages
              testimonials={data?.testimonials?.slice(4, 7)}
              className="right_details"
              circleColors={["yellow", "purple", "border"]}
            />
          </div>
        </div>

        <div className="brush_1 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/testimonials/1.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
