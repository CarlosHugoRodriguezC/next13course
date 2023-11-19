import { Sidebar, TopMenu } from "@/components";

interface Props {
  children: React.ReactNode;
}

export default function ShopLayout({ children }: Props) {
  return (
    <main className="min-h-screen">
      <TopMenu />
      <Sidebar />
      <div className="container mx-auto">{children}</div>
    </main>
  );
}
