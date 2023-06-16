import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "This is the contact page of the website",
};

export default function ContactPage() {
  return (
    <>
      <h1 className="text-7xl text-center">Contact Page</h1>
    </>
  );
}
