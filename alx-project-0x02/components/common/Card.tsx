import React from "react";
import { CardProps } from "@/interfaces";

const Card: React.FC <CardProps> = ({ title, content }) => (
  <div className="bg-white shadow-lg rounded-lg p-4 m-2">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p>{content}</p>
  </div>
);

export default Card;
