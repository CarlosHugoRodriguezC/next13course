import { Metadata } from "next";
import NextLink from "next/link";

export const metadata: Metadata = {
  title: "Home Page",
  description: "Created by Carlos",
};

export default function Home() {
  return (
    <main className="flex  flex-col items-center  p-24">
      <span className="text-4xl">Hello World</span>
      <NextLink href="/about">About Page</NextLink>
    </main>
  );
}
