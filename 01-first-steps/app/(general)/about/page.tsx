import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Title",
  description: "SEO Title",
  keywords: ["About page", "Carlos Rodriguez", "Information"],
};

export default function AboutPage() {
  return <h1 className="text-7xl text-center">About Page</h1>;
}
