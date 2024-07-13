// src/components/BlogList.tsx
import { FC } from "react";
import { Link } from "react-router-dom";
import Navbar from "../LandingPage/components/navbar";
import Footer from "@/components/Footer";

interface Post {
  id: number;
  title: string;
  excerpt: string;
}

interface BlogListProps {
  posts: Post[];
}

const BlogList: FC<BlogListProps> = ({ posts }) => {
  return (
    <>
      <Navbar />
      <div className="p-4 w-[400px] mx-auto max-w-[100%] md:w-[1100px]">
        <h1 className="text-2xl font-bold mb-4">Blog</h1>
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="p-4 border rounded">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600">{post.excerpt}</p>
              <Link to={`/posts/${post.id}`} className="text-blue-500">
                Read more
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogList;
