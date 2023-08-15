import Link from "next/link";
import { getAllPosts } from "../../lib/cms";

const Blog = async () => {
  const posts = await getAllPosts();

  return (
    <div>
      {posts.map(({ slug, title }) => (
        <Link href={`/blog/${slug}`} key={slug}>
          <div>
            <h1>{title}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
