import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/dashboard/counter");

  // return (
  //   <>
  //     <h1 className="text-xl">Hola mundo</h1>
  //   </>
  // );
}
