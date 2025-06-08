import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => (
  <div className="bg-white shadow-md rounded-lg p-4 mb-4">
    <h2 className="text-xl font-semibold">{name}</h2>
    <p>Email: {email}</p>
    <p>Address: {address.street}, {address.city}</p>
  </div>
);

export default UserCard;
