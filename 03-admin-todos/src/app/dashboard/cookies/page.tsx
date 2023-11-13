import { TabBar } from "@/components";
import { Metadata } from "next";
import { cookies } from "next/dist/client/components/headers";

export const metadata: Metadata = {
  title: "Cookies Page",
  description: "Cookies Page",
};

export default function CookiesPage() {
  const cookiesStore = cookies();
  const cookieTab = cookiesStore.get("selectedTab")?.value ?? "1";
  return (
    <div>
      <span className="text-3xl">Tabs</span>
      <TabBar currentTab={+cookieTab} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-5">
        <div className="bg-gray-200 p-2">1</div>
        <div className="bg-gray-200 p-2">2</div>
        <div className="bg-gray-200 p-2">3</div>
        <div className="bg-gray-200 p-2">4</div>
      </div>
    </div>
  );
}
