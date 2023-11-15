import { WidgetItem } from "@/components/WidgetItem";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div className="flex flex-col">
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
        <WidgetItem title="Usuario conectado SSide">
          <div className="flex flex-col">
            <span>{session.user?.name}</span>
            <span>{session.user?.email}</span>
            <span>{session.user?.image}</span>
            <pre>{JSON.stringify(session, null, 2)}</pre>
          </div>
        </WidgetItem>
      </div>
    </div>
  );
}
