import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/dashboard");
  return (
    <div>
      <h1 className="text-5xl">Hello Page Home</h1>
    </div>
  );
}
