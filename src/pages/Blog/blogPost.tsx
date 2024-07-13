// src/components/BlogPost.tsx
import { FC } from 'react';
import { useParams } from 'react-router-dom';

interface Post {
  id: number;
  title: string;
  content: string;
}

interface BlogPostProps {
  posts: Post[];
}

const BlogPost: FC<BlogPostProps> = ({ posts }) => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((post) => post.id.toString() === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
