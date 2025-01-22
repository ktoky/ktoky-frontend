"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Cross1Icon } from "@radix-ui/react-icons";
import { ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
const AddToCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotal = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  console.log(cartItems, "cartItems");

  const handleRemoverCart = (id) => {
    dispatch(removeItemFromCart({ id })); // Convert to number
    console.log("This ID is coming: ", id);
  };

  return (
    <div>
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
                {cartItems?.length}
              </span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[300px] lg:w-[400px]">
                {cartItems.map((cart, id) => (
                  <li key={id} className="pr-3">
                    <div className="flex items-center justify-between">
                      <Image
                        src={cart.image}
                        alt="product"
                        width={100}
                        height={100}
                        className="cursor-pointer"
                      />
                      <div>
                        <p className="font-semibold text-primary cursor-pointer">
                          {cart.name}
                        </p>
                        <p className="font-semibold">{cart?.quantity} x $500</p>
                      </div>
                      <p className="cursor-pointer">
                        <Cross1Icon
                          onClick={() => {
                            handleRemoverCart(cart?.id);
                          }}
                        />
                      </p>
                    </div>
                  </li>
                ))}

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
    </div>
  );
};

export default AddToCart;
