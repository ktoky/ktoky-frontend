import { TableD } from "../components/Table";
import Total from "../components/Total";

export default function page() {
  return (
    <div className="px-3">
      <div className="flex items-start justify-between gap-10">
        <div className="w-2/3">
          <div className="flex items-end justify-between">
            <div>
              <h1 className="text-5xl font-bold">Your Cart</h1>
              <p className="font-bold mt-1 text-Emphasis">
                There are 3 products in your cart
              </p>
            </div>
            <button className="text-Emphasis font-bold">Clear Cart</button>
          </div>
          <div className="mt-5">
            <TableD />
          </div>
        </div>
        <div className="w-1/3 mt-24">
          <Total />
        </div>
      </div>
    </div>
  );
}
