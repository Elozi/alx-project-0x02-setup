import React from "react";
import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";


export default function Page() {
  return (
    <>
    <Header />
        <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">About Page</h1>
      <div className="space-x-4">
        <Button size="small" shape="rounded-sm" label="Small Button" />
        <Button size="medium" shape="rounded-md" label="Medium Button" />
        <Button size="large" shape="rounded-full" label="Large Button" />
      </div>
      </main>
    </>
  );
};

