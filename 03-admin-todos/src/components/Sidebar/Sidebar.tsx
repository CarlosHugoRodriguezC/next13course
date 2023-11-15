import Link from "next/link";
import Image from "next/image";
import {
  IoBasketOutline,
  IoCalendarOutline,
  IoCheckboxOutline,
  IoCodeWorkingOutline,
  IoListOutline,
  IoLogOutOutline,
  IoPersonCircleOutline,
} from "react-icons/io5";
import { type MenuItemProps, SidebarItem } from "./SidebarItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { LogoutButton } from "./LogoutButton";

const menuItems: MenuItemProps[] = [
  {
    title: "Dashboard",
    icon: <IoCalendarOutline size={25} />,
    path: "/dashboard",
  },
  {
    title: "Todos",
    icon: <IoCheckboxOutline size={25} />,
    path: "/dashboard/rest-todos",
  },
  {
    title: "Server Actions",
    icon: <IoListOutline size={25} />,
    path: "/dashboard/server-todos",
  },
  {
    title: "Cookies",
    icon: <IoCodeWorkingOutline size={25} />,
    path: "/dashboard/cookies",
  },
  {
    title: "Productos",
    icon: <IoBasketOutline size={25} />,
    path: "/dashboard/products",
  },
  {
    title: "Profile",
    icon: <IoPersonCircleOutline size={25} />,
    path: "/dashboard/profile",
  },
];

export const Sidebar = async () => {
  const session = await getServerSession(authOptions);

  const userName = session?.user?.name ?? "User not found";
  const userImage =
    session?.user?.image ??
    "https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp";

  const userRoles = (session?.user?.roles ?? ["No role"]).map((role) =>
    role.toUpperCase()
  );

  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] overflow-auto">
      <div>
        <div className="-mx-6 px-6 py-4">
          <Link href="/dashboard" title="home">
            {/* Next/Image */}
            <Image
              src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
              width={200}
              height={200}
              className="w-32"
              alt="tailus logo"
            />
          </Link>
        </div>

        <div className="mt-8 text-center">
          <Image
            src={userImage}
            alt=""
            width={500}
            height={500}
            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
          />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
            {userName}
          </h5>
          <span className="hidden text-gray-400 lg:block">
            {userRoles.join(" | ")}
          </span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8 overflow-auto">
          {menuItems.map((item) => (
            <SidebarItem key={item.title} {...item} />
          ))}
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <LogoutButton />
      </div>
    </aside>
  );
};
