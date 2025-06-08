import React, { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";

const Posts = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((data) =>
        setPosts(
          data.map((post: any) => ({
            title: post.title,
            content: post.body,
            userId: post.userId,
          }))
        )
      );
  }, []);

  return (
    <>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </main>
    </>
  );
};

export default Posts;
