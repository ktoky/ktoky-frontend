'use client'
import { decrementItem, incrementItem, removeItemFromCart } from '@/redux/cart/cartSlice';
import { useDispatch, useSelector } from "react-redux";
import { TableD } from "../components/Table";
import Total from "../components/Total";
export default function page() {




  const cartItems = useSelector((state) => state.cart.items);
  console.log("here cart items are : ", cartItems)
  const cartTotal = useSelector((state) => state.cart.total);
  console.log("cartTotal is : ", cartTotal);
  const dispatch = useDispatch();

  const handleRemovefromCart = (id) => {
    dispatch(removeItemFromCart({ id }));
    console.log("this id is coming :", id);
  };

  const handleIncrementItem = (id) => {
    dispatch(incrementItem({ id }));
  }
  const handleDecrementItem = (id) => {
    dispatch(decrementItem({ id }));
  }
  

  return (
    <>
    {
      cartItems && (
        
    <div className="px-3">
      
      <div className="block lg:flex items-start justify-between gap-10">
        <div className="w-full lg:w-2/3">
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
            <TableD cartItems={cartItems}  handleDecrementItem={handleDecrementItem} handleIncrementItem={handleIncrementItem} handleRemovefromCart={handleRemovefromCart}/>
          </div>
        </div>
        <div className="w-full lg:w-1/3 md:mt-24 my-5 md:my-0">
          <Total cartTotal={cartTotal}/>
        </div>
      </div>
    </div>
      
    
      )
    }
    </>
  )
}
