"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              href="/products"
              className={
                pathname == "/products"
                  ? "text-blue-500 underline"
                  : "text-white cursor-pointer no-underline"
              }
            >
              Product
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="no-underline hover:underline">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/about" className="no-underline hover:underline">
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
