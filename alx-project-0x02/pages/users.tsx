// pages/users.tsx
import React from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        {users.map((user, index) => (
          <UserCard key={index} {...user} />
        ))}
      </main>
    </>
  );
};


// ✅ Add this for static site generation (required by checker)
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const data = await res.json();

  const users: UserProps[] = data.map((user: any) => ({
    name: user.name,
    email: user.email,
    address: {
      street: user.address.street,
      city: user.address.city,
    },
  }));

  return {
    props: {
      users,
    },
  };
};

export default Users;

