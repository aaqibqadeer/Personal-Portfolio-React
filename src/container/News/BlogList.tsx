import { BlogItem } from "./BlogItem";

export const BlogList = ({ data, onClick }) => {
  return (
    data && (
      <div className="news_list">
        <ul>
          {data?.map((blog, i) => (
            <BlogItem blog={blog} key={i} onBlogClick={onClick} />
          ))}
        </ul>
      </div>
    )
  );
};
