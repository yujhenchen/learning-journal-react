import BlogCard from "./BlogCard";

export default function RecentPostsContainer({ blogs }) {
  return (
    <section className="posts-container">
      {blogs.map((blog, index) => (
        <BlogCard key={index} {...blog} />
      ))}
    </section>
  );
}
