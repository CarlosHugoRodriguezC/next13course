import { SimpleWidget } from "@/components";

export default function MainPage() {
  return (
    <div className="text-black">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">General Information</span>

      <div className="flex flex-wrap justify-center items-center gap-2 p-2">
        <SimpleWidget />
      </div>
    </div>
  );
}
