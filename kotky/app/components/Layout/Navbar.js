import logo from "@/public/images/logo.png";
import Image from "next/image";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-3 mt-8 pb-8 border-b border-b-tertiaryborder-tertiary">
      <div className="w-[170px] h-[52px]">
        <Image
          src={logo}
          width={170}
          height={52}
          alt="Logo"
          className="w-full h-full"
        />
      </div>
      <div className="border-2 border-tertiary rounded p-1 pl-3 w-[566px] flex items-center justify-between">
        <input
          type="text"
          placeholder="Search for products..."
          className="placeholder:italic w-full border-none outline-none"
        />
        <button className="bg-primary px-5 py-2 rounded font-semibold text-white hover:bg-secondary transition-colors duration-300">
          Search
        </button>
      </div>
      <div>
        <button className="text-base text-primary px-3 py-2 border border-[#ececec] rounded flex items-center gap-2 shadow-md hover:-translate-y-2 transition duration-300">
          Became Vendor
          <ArrowRightAltIcon />
        </button>
      </div>
      <ul className="flex items-center gap-5">
        <li className="flex items-center gap-1 relative font-lato cursor-pointer">
          <RepeatIcon />
          Compare
          <span className="bg-primary w-7 h-7 text-center rounded-full text-white absolute -top-5 left-2">
            0
          </span>
        </li>
        <li className="flex items-center gap-1 relative font-lato cursor-pointer">
          <FavoriteBorderIcon />
          Wishlist
          <span className="bg-primary w-7 h-7 text-center rounded-full text-white absolute -top-5 left-2">
            0
          </span>
        </li>
        <Link
          href="/home/pages/cart"
          className="flex items-center gap-1 relative font-lato cursor-pointer"
        >
          <ShoppingCartIcon />
          Cart
          <span className="bg-primary w-7 h-7 text-center rounded-full text-white absolute -top-5 left-2">
            0
          </span>
        </Link>
        <Link
          href="/authentication/login"
          className="flex items-center gap-1 font-lato cursor-pointer"
        >
          <PersonOutlineIcon />
          Account
        </Link>
      </ul>
    </nav>
  );
}
