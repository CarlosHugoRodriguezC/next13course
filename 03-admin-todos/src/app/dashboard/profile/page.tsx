"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session } = useSession();

  useEffect(() => {
    console.log("ProfilePage");
  }, []);

  return (
    <div>
      <h1>Page profile</h1>
      <hr />

      <div className="flex flex-col">
        <span>{session?.user?.id ?? "No id"}</span>
        <span>{session?.user?.name ?? "No name"}</span>
        <span>{session?.user?.email ?? "No email"}</span>
        <span>{session?.user?.image ?? "No image"}</span>
        <span>{session?.user?.roles?.join(", ") ?? "No roles"}</span>
      </div>
    </div>
  );
}
