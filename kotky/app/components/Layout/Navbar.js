'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from "@/public/images/logo.png";
import { useProductsQuery } from "@/redux/api/productApi";
import { useDebounced } from "@/redux/hooks";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


import AddToCart from "./AddToCart";
export default function Navbar() {
  const dispatch = useDispatch();
  const [productLoadingResult, setProductLoadingResult] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [dataRes, setDataRes] = useState([]);

  const query = {};
  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }
  const { data, isLoading } = useProductsQuery(
    { ...query },
    { skip: !debouncedSearchTerm } // 👈 Prevents API calls when searchTerm is empty
  );
  console.log(data?.product);
  useEffect(() => {

    if (data?.product) {
      console.log("data", data?.product);
      setDataRes(data?.product);
      console.log("dataRes", dataRes);
    }

  }, [data?.product]);



  const handleInputChange = (e) => {

    setSearchTerm(e.target.value);
    if (e.target.value === "") {
      setDataRes([]);
    }
  };

  return (
    <nav className="flex items-center justify-between px-3 mt-8 pb-8 border-b border-b-tertiaryborder-tertiary">
      <div className="md:hidden block">
        <Sheet>
          <SheetTrigger asChild>
            <HamburgerMenuIcon className="scale-150" />
          </SheetTrigger>
          <SheetContent side="left" className="w-full">
            <SheetHeader>
              <div className="w-[170px] h-[52px] mb-5">
                <Image
                  src={logo}
                  width={170}
                  height={52}
                  alt="Logo"
                  className="w-full h-full"
                />
              </div>
            </SheetHeader>
            <div className="group relative">


              <div className="border-2 border-tertiary rounded p-1 pl-3 w-full flex items-center justify-between">
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchTerm}
                  onChange={handleInputChange}
                  className="placeholder:italic w-full border-none outline-none"
                />

                <button className="bg-primary px-5 py-2 rounded font-semibold text-white hover:bg-secondary transition-colors duration-300">
                  {
                    isLoading ? "Loading..." : "Search"
                  }

                </button>
              </div>

              {dataRes?.length > 0 && (
                <div className="absolute top-full left-0 bg-white w-full border border-gray-200 max-h-80 overflow-scroll z-30">

                  {dataRes?.map((product) => (
                    <div className="whole" key={product?.id}>
                      <div
                        className="flex w-full p-2 group hover:bg-gray-100 transition-all duration-300 cursor-pointer"
                        onClick={() => handleProductClick(product?.slug, product?.id)}
                      >
                        <div className="me-4">
                          <Image src={product?.imageDefault} alt={product?.name} width={50} height={50} />
                        </div>
                        <div>
                          <p className="text-gray-900 text-xs font-normal cursor-pointer group-hover:text-gray-600">
                            {product?.name}
                          </p>
                          <p>
                            <span style={{ textDecoration: "line-through", color: "#a9a9a9" }} className="text-xs">
                              ${product?.originalPrice}
                            </span>
                            <span className="text-xs text-gray-900 font-medium" style={{ marginLeft: "8px" }}>
                              ${product?.discountedPrice}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="line w-full h-px bg-gray-300"></div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>
              <ul className="flex items-start flex-col gap-3 mt-7">
                <Link
                  href="/"
                  className="text-Emphasis text-base font-bold border-b border-Emphasis/20 w-full pb-2"
                >
                  Home
                </Link>
                <Link
                  href="/"
                  className="text-Emphasis text-base font-bold border-b border-Emphasis/20 w-full pb-2"
                >
                  About
                </Link>
                <Link
                  href="/"
                  className="text-Emphasis text-base font-bold border-b border-Emphasis/20 w-full pb-2"
                >
                  Shop
                </Link>
                <Link
                  href="/home/pages/product"
                  className="text-Emphasis text-base font-bold border-b border-Emphasis/20 w-full pb-2"
                >
                  Vendors
                </Link>
                <Link
                  href="/"
                  className="text-Emphasis text-base font-bold border-b border-Emphasis/20 w-full pb-2"
                >
                  Mega Menu
                </Link>
                <Link
                  href="/"
                  className="text-Emphasis text-base font-bold border-b border-Emphasis/20 w-full pb-2"
                >
                  Blog
                </Link>
                <Link href="/" className="text-Emphasis text-base font-bold">
                  Contact
                </Link>
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="w-[170px] h-[52px]">
        <Image
          src={logo}
          width={170}
          height={52}
          alt="Logo"
          className="w-full h-full"
        />
      </div>
      <div className="group relative">
        <div className="border-2 hidden border-tertiary rounded p-1 pl-3 w-[566px] md:flex items-center justify-between">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={handleInputChange}
            className="placeholder:italic w-full border-none outline-none"
          />
          <button className="bg-primary px-5 py-2 rounded font-semibold text-white hover:bg-secondary transition-colors duration-300">
            {
              isLoading ? "Loading..." : "Search"
            }
          </button>
        </div>
        {dataRes?.length > 0 && (
          <div className="absolute top-full left-0 bg-white w-full border border-gray-200 max-h-80 overflow-scroll z-30">

            {dataRes?.map((product) => (
              <div className="whole" key={product?.id}>
                <div
                  className="flex w-full p-2 group hover:bg-gray-100 transition-all duration-300 cursor-pointer"
                  onClick={() => handleProductClick(product?.slug, product?.id)}
                >
                  <div className="me-4">
                    <Image src={product?.imageDefault} alt={product?.name} width={50} height={50} />
                  </div>
                  <div>
                    <p className="text-gray-900 text-xs font-normal cursor-pointer group-hover:text-gray-600">
                      {product?.name}
                    </p>
                    <p>
                      <span style={{ textDecoration: "line-through", color: "#a9a9a9" }} className="text-xs">
                        ${product?.originalPrice}
                      </span>
                      <span className="text-xs text-gray-900 font-medium" style={{ marginLeft: "8px" }}>
                        ${product?.discountedPrice}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="line w-full h-px bg-gray-300"></div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="hidden md:block">
        <button className="text-base text-primary px-3 py-2 border border-[#ececec] rounded flex items-center gap-2 shadow-md hover:-translate-y-2 transition duration-300">
          Became Vendor
          <ArrowRightAltIcon />
        </button>
      </div>
      <ul className="flex items-center gap-5">
        <li className="hidden md:flex items-center gap-1 relative font-lato cursor-pointer">
          <RepeatIcon />
          Compare
          <span className="bg-primary w-7 h-7 text-center rounded-full text-white absolute -top-5 left-2">
            0
          </span>
        </li>
        <li className="hidden md:flex items-center gap-1 relative font-lato cursor-pointer">
          <FavoriteBorderIcon />
          Wishlist
          <span className="bg-primary w-7 h-7 text-center rounded-full text-white absolute -top-5 left-2">
            0
          </span>
        </li>
        {/* add to card */}
        <AddToCart></AddToCart>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="cursor-pointer">
              <PersonOutlineIcon />
              <span className="hidden md:block">Account</span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href="/home/pages/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>My Order</DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/authentication/login">Logout</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ul>
    </nav>
  );
}
