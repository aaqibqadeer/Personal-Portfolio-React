import { Swiper, SwiperSlide } from "swiper/react";

export const TestimonialSwiper = ({ data }) => {
  const props = {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".owl-dots",
      clickable: true,
    },
  };

  return (
    <div className="in">
      <Swiper {...props} className="">
        {data &&
          data.testimonials?.map((item, i) =>
            !item.show ? (
              <SwiperSlide key={i}>
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Layer_1"
                    x="0px"
                    y="0px"
                    width="200px"
                    height="200px"
                    viewBox="796 698 200 200"
                    enableBackground="new 796 698 200 200"
                    xmlSpace="preserve"
                    className="svg replaced-svg"
                  >
                    <g>
                      <path d="M885.208,749.739v-40.948C836.019,708.791,796,748.81,796,798v89.209h89.208V798h-48.26   C836.948,771.39,858.598,749.739,885.208,749.739z" />
                      <path d="M996,749.739v-40.948c-49.19,0-89.209,40.019-89.209,89.209v89.209H996V798h-48.26   C947.74,771.39,969.39,749.739,996,749.739z" />
                    </g>
                  </svg>
                </div>

                <div className="text">
                  <p>{item.details}</p>
                </div>

                <div className="short">
                  <div className="image">
                    <div className="main" data-img-url={item.img} />
                  </div>

                  <div className="detail">
                    <h3>{item.name}</h3>
                    <span>{item.profession}</span>
                  </div>
                </div>
              </SwiperSlide>
            ) : null
          )}
      </Swiper>
      <div className="owl-dots"></div>
    </div>
  );
};
