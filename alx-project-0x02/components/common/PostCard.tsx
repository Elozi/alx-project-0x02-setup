import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => (
  <div className="bg-white shadow-md rounded-lg p-4 mb-4">
    <h2 className="text-xl font-bold mb-1">{title}</h2>
    <p className="text-gray-700 mb-2">{content}</p>
    <span className="text-sm text-gray-500">Posted by User {userId}</span>
  </div>
);

export default PostCard;
