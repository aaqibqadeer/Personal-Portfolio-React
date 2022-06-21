const ImageBadge = ({ imagePath, className }) => {
  return (
    <div
      className={`det_image wow fadeIn ${className}`}
      data-wow-duration="1s"
      data-img-url={imagePath}
    />
  );
};

export const BackgroundImages = ({ testimonials, className, circleColors }) => {
  return (
    <div className={className}>
      {testimonials?.map((item, i) => (
        <ImageBadge imagePath={item.img} className={item.className} key={i} />
      ))}

      <span className={`circle ${circleColors[0]} animPulse`} />
      <span className={`circle ${circleColors[1]} animPulse`} />
      <span className={`circle ${circleColors[2]} animPulse`} />
    </div>
  );
};
