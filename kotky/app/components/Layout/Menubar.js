import WidgetsIcon from "@mui/icons-material/Widgets";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Link from "next/link";

export default function Menubar() {
  return (
    <div className="my-3 hidden lg:flex items-center justify-between border-b border-b-tertiary pb-5 mb-8 px-3">
      <div className="flex items-center gap-7">
        <button className="flex items-center justify-center gap-2 bg-primary px-5 py-2 rounded text-white font-semibold">
          <WidgetsIcon />
          <span>Browse All Categories</span>
          <KeyboardArrowDownIcon />
        </button>
        <p className="text-Emphasis text-base font-bold">
          <LocalFireDepartmentIcon className="text-primary" />
          Hot Deals
        </p>
      </div>
      <ul className="flex items-center gap-14">
        <Link href="/" className="text-Emphasis text-base font-bold">
          Home
        </Link>
        <Link href="/" className="text-Emphasis text-base font-bold">
          About
        </Link>
        <Link href="/" className="text-Emphasis text-base font-bold">
          Shop
        </Link>
        <Link href="/" className="text-Emphasis text-base font-bold">
          Vendors
        </Link>
        <Link href="/" className="text-Emphasis text-base font-bold">
          Mega Menu
        </Link>
        <Link href="/" className="text-Emphasis text-base font-bold">
          Blog
        </Link>
        <Link href="/" className="text-Emphasis text-base font-bold">
          Contact
        </Link>
      </ul>
      <div className="flex items-center gap-2">
        <SupportAgentIcon className="scale-[2]" />
        <div>
          <h1 className="text-2xl font-semibold text-[#42916D]">1900 - 888</h1>
          <span className="text-xs">24/7 Support Service</span>
        </div>
      </div>
    </div>
  );
}
