import React, { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/postModal";
import Header from "@/components/layout/Header";


export default function Home() {
  const [posts, setPosts] = useState([
    { title: "Card 1", content: "This is the content for card 1." },
    { title: "Card 2", content: "This is the content for card 2." }
  ]);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddPost = (post: { title: string; content: string }) => {
    setPosts((prev) => [...prev, post]);
  };

  return (
    <>
    <Header />
      <main className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Home Page</h1>
        <button onClick={() => setModalOpen(true)} className="px-4 py-2 bg-blue-500 text-white rounded">New Post</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </main>
    </>
  );
};


