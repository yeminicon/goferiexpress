// src/data/posts.ts
interface Post {
    id: number;
    title: string;
    excerpt: string;
    content: string;
  }
  
  export const posts: Post[] = [
    {
      id: 1,
      title: 'First Blog Post',
      excerpt: 'This is the first blog post.',
      content: 'This is the detailed content of the first blog post.',
    },
    {
      id: 2,
      title: 'Second Blog Post',
      excerpt: 'This is the second blog post.',
      content: 'This is the detailed content of the second blog post.',
    },
    // Add more posts as needed
  ];
  