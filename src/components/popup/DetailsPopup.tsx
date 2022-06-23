export const CloseButton = ({ close }) => {
  return (
    <div className="close">
      <a href={null} onClick={() => close()}>
        <i className="icon-cancel" />
      </a>
    </div>
  );
};

export const Info = ({ title, description }) => {
  return (
    <li>
      <span className="first">{title}</span>
      <span>{description}</span>
    </li>
  );
};

export const ImageItem = ({ image }) => {
  const imagePath = `img/portfolio/${image}`;
  return (
    <li>
      <div className="list_inner tw-drop-shadow-lg">
        <div className="my_image">
          <img src="img/thumbs/4-2.jpg" alt="image" />
          <div
            className="main"
            data-img-url={imagePath}
            style={{ backgroundImage: `url("${imagePath}")` }}
          />
        </div>
      </div>
    </li>
  );
};

const DetailsPopupLayout = ({ children, closeButton, open }) => {
  return (
    <div className={`dizme_tm_modalbox ${open ? "opened" : ""}`}>
      <div className="box_inner">
        {closeButton}
        <div className="description_wrap">
          <div className="popup_details">{children}</div>
        </div>
      </div>
    </div>
  );
};

const TopImage = ({ imagePath }) => {
  return (
    <div className="top_image">
      <img src="img/thumbs/4-2.jpg" alt="image" />
      <div
        className="main"
        data-img-url={imagePath}
        style={{ backgroundImage: `url("${imagePath}")` }}
      />
    </div>
  );
};

const Heading = ({ title, href, category }) => {
  return (
    <div className="portfolio_main_title">
      <h3>{title}</h3>
      <span>{category}</span> |
      <span className="tw-ml-2">
        <a
          href={href}
          target="_blank"
          className="tw-font-bold !tw-text-blue-600"
          rel="noreferrer"
        >
          Live Preview
        </a>
      </span>
      <div />
    </div>
  );
};

const MainDetail = ({
  shortDesc,
  longDesc,
  client,
  date,
  category,
  totalTime,
  techStack,
}) => {
  return (
    <div className="main_details">
      <div className="textbox">
        {shortDesc && <p>{shortDesc}</p>}
        {longDesc && <p>{longDesc}</p>}
        {techStack && (
          <p>
            <span className="tw-font-bold">Tech Stack:</span> {techStack}
          </p>
        )}
      </div>
      <div className="detailbox">
        <ul>
          {client && <Info title="Client" description={client} />}
          <Info title="Category" description={<a href={null}>{category}</a>} />
          {date && <Info title="Date" description={date} />}
          {totalTime && <Info title="Worked" description={totalTime} />}
        </ul>
      </div>
    </div>
  );
};

const AdditionImages = ({ images }) => {
  return images ? (
    <div className="additional_images">
      <ul>
        {images?.map((image) => (
          <ImageItem image={image} key={image} />
        ))}
      </ul>
    </div>
  ) : null;
};

export const DetailsPopup = ({ open, close, id, projectList }) => {
  const selectedProject = projectList.find((project) => project.id === id);
  const {
    image,
    images,
    href,
    title,
    category,
    shortDesc,
    longDesc,
    client,
    date,
    totalTime,
    techStack,
  } = selectedProject || {};
  const imagePath = `img/portfolio/${image}`;
  const closeButtonComponent = <CloseButton close={close} />;

  return (
    <DetailsPopupLayout closeButton={closeButtonComponent} open={open}>
      <TopImage imagePath={imagePath} />
      <Heading title={title} href={href} category={category} />
      <MainDetail
        shortDesc={shortDesc}
        longDesc={longDesc}
        client={client}
        date={date}
        category={category}
        totalTime={totalTime}
        techStack={techStack}
      />
      <AdditionImages images={images} />
    </DetailsPopupLayout>
  );
};
