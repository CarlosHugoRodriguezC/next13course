import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="container mx-auto">
      <div className="flex justify-between text-xs mb-10 gap-3">
        <Link href={"/"}>
          <span>Teslo </span>
          <span>| Shop</span>
          <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
        </Link>

        <div className="flex gap-3">
          <Link href={"/privacy-policy"}>
            <span>Privacy Policy</span>
          </Link>
          <Link href={"/privacy-policy"}>
            <span>Terms & Conditions</span>
          </Link>

          <span>Location: 1234 Main St, Anywhere, CA 12345</span>
        </div>
      </div>
    </footer>
  );
};
