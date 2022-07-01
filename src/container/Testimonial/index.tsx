import { Brush, SwiperContainer } from "@components";
import { Testimonial as TestimonialType } from "@constant/type";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { BackgroundImages } from "./BackgroundImages";
import { Heading } from "./Heading";

SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay]);

interface Props {
  testimonialContent: TestimonialType;
}

export const Testimonial: React.FC<Props> = ({ testimonialContent }) => {
  const { title, heading1, heading2, testimonials } = testimonialContent || {};

  return (
    <div className="dizme_tm_section" id="testimonials">
      <div className="dizme_tm_testimonials tw-mb-0">
        <Heading title={title} heading1={heading1} heading2={heading2} />
        <div className="list_wrapper">
          <div className="total">
            <SwiperContainer data={testimonials} />

            <BackgroundImages
              testimonials={testimonials?.slice(0, 4)}
              className="left_details"
              circleColors={["green", "yellow", "border"]}
            />

            <BackgroundImages
              testimonials={testimonials?.slice(4, 7)}
              className="right_details"
              circleColors={["yellow", "purple", "border"]}
            />
          </div>
        </div>

        <Brush
          imagePath="/img/brushes/testimonials/1.png"
          className="brush_1 fadeInRight"
        />
      </div>
    </div>
  );
};
