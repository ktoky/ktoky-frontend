import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Total() {
  return (
    <div className="space-y-2 border rounded-md p-5 shadow-md">
      <div className="flex justify-between items-center">
        <h3 className="text-Emphasis font-semibold text-xl">Subtotal</h3>
        <p className="text-secondary font-bold text-2xl">$12.31</p>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="text-Emphasis font-semibold text-xl">Shipping</h3>
        <p className="text-primary font-bold text-2xl">Free</p>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="text-Emphasis font-semibold text-xl">Estimate for</h3>
        <p className="text-primary font-bold text-2xl">United Kingdom</p>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="text-Emphasis font-semibold text-xl">Total</h3>
        <p className="text-secondary font-bold text-2xl">$12.31</p>
      </div>
      <Button className="bg-primary hover:bg-secondary w-full">
        <Link href="/home/pages/checkout">Proceed To CheckOut</Link>
      </Button>
    </div>
  );
}
