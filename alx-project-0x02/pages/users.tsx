import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

const Users = () => {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) =>
        setUsers(
          data.map((user: any) => ({
            name: user.name,
            email: user.email,
            address: {
              street: user.address.street,
              city: user.address.city,
            },
          }))
        )
      );
  }, []);

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

export default Users;
