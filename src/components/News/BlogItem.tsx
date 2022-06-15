export const BlogItem = ({ blog, onBlogClick }) => {
  return (
    <li className="wow fadeInUp" data-wow-duration="1s">
      <div className="list_inner">
        <div className="image">
          <img src="img/thumbs/42-29.jpg" alt="image" />
          <div
            className="main"
            data-img-url={blog && blog.img}
            style={{
              backgroundImage: `url(${blog && blog.img})`,
            }}
          />
          <div className="date">
            <h3>{blog && blog.date && blog.date.date}</h3>
            <span>{blog && blog.date && blog.date.month}</span>
          </div>
          <a
            className="dizme_tm_full_link"
            href={blog.url}
            target="_blank"
            // onClick={() => onBlogClick(blog)}
            rel="noreferrer"
          />
        </div>
        <div className="details">
          <span className="category">
            <a href="#">{blog.category}</a>
          </span>
          <h3 className="title">
            <a href="#">{blog.title}</a>
          </h3>
        </div>
        <div className="news_hidden_details">
          <div className="news_popup_informations">
            <div className="text">
              {blog.details &&
                blog.details?.map((details, i) => <p key={i}>{details}</p>)}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
