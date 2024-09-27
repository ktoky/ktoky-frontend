import logo from "@/public/images/logo.png";
import Image from "next/image";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Link from "next/link";
import img1 from "@/public/images/product-1-1.jpg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
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
            <div className="border-2 border-tertiary rounded p-1 pl-3 w-full flex items-center justify-between">
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
                  href="/"
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
      <div className="border-2 hidden border-tertiary rounded p-1 pl-3 w-[566px] md:flex items-center justify-between">
        <input
          type="text"
          placeholder="Search for products..."
          className="placeholder:italic w-full border-none outline-none"
        />
        <button className="bg-primary px-5 py-2 rounded font-semibold text-white hover:bg-secondary transition-colors duration-300">
          Search
        </button>
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
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className="focus:bg-transparent hover:bg-transparent"
                icon={false}
              >
                <ShoppingCartIcon />
                Cart
                <span className="bg-primary w-7 h-7 text-center rounded-full text-white absolute -top-5 left-2">
                  0
                </span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[300px] lg:w-[400px]">
                  <li className="pr-3">
                    <div className="flex items-center justify-between">
                      <Image
                        src={img1}
                        alt="product"
                        width={100}
                        height={100}
                        className="cursor-pointer"
                      />
                      <div>
                        <p className="font-semibold text-primary cursor-pointer">
                          Yidarton Women Summer Blue
                        </p>
                        <p className="font-semibold">1 x $500</p>
                      </div>
                      <p className="cursor-pointer">
                        <Cross1Icon />
                      </p>
                    </div>
                  </li>
                  <li className="p-3 border-t border-t-Emphasis/50">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-Emphasis text-lg">Total</h4>
                      <p className="text-primary font-bold">$4000</p>
                    </div>
                  </li>
                  <li className="p-3">
                    <div className="flex items-center justify-between">
                      <Button
                        variant="outline"
                        className="border-secondary hover:bg-secondary hover:text-white"
                      >
                        <Link href="/home/pages/cart">View Cart</Link>
                      </Button>
                      <Button variant="default" className="hover:bg-primary">
                        <Link href="/home/pages/checkout">Checkout</Link>
                      </Button>
                    </div>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
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
