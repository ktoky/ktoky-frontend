import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";



export function TableD({ cartItems ,handleDecrementItem,handleIncrementItem,handleRemovefromCart}) {
  return (
    <div>
      <Table className="border rounded-lg ">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">
              <Checkbox />
            </TableHead>
            <TableHead className="font-bold text-lg">Product</TableHead>
            <TableHead className="font-bold text-lg">Unit Price</TableHead>
            <TableHead className="font-bold text-lg">Quantity</TableHead>
            <TableHead className="font-bold text-lg">Subtotal</TableHead>
            <TableHead className="font-bold text-lg">Remove</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cartItems.map((data) => (
            <TableRow key={data.id}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell className="flex items-center">
                <Image
                  src={data.image}
                  width={100}
                  height={100}
                  alt="Product Image"
                />
                <div>
                  <p className="font-semibold text-Emphasis">
                    {data.name}
                  </p>
                </div>
              </TableCell>
              <TableCell>${data.price}</TableCell>
              <TableCell>
                <div className="quantity_section ">
                  <div className="inner flex">

                    <button className="border border-2 px-2 py-2 hover:bg-gray-800 hover:text-white transition  hover:border-black" onClick={() => { handleDecrementItem(data?.colorId) }}>
                      -
                    </button>


                    <span className="px-3 py-3  border-t-2 border-b-2">{data?.quantity}</span>


                    <button className="border border-2 px-2 py-2 hover:bg-gray-800 hover:text-white transition  hover:border-black" onClick={() => { handleIncrementItem(data?.colorId) }}>
                      +
                    </button>
                  </div>
                </div>
              </TableCell>
              <TableCell>${data.quantity * data.price}</TableCell>
              <TableCell>
                <DeleteIcon onClick={()=>{handleRemovefromCart(data.colorId)}} className="cursor-pointer"/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/*       
                 {
                    cartItems?.map((data,index) => (
                    <div key={index} className="flex items-center flex-col border border-Emphasis/20 p-5 rounded-md">
                    <Image src={data.image} width={200} height={200} alt="Product Image" />
                    <h3 className="font-semibold text-Emphasis">
                      {data.name}
                    </h3>
                    <div className="my-2">
                      <Star className="text-yellow-300" />
                      <Star className="text-yellow-300" />
                      <Star className="text-yellow-300" />
                      <Star className="text-yellow-300" />
                      <Star className="text-yellow-300" />
                      (4.0)
                    </div>
                    <div className="space-y-5 w-full">
                      <div className="flex items-center justify-between w-full">
                        <p className="font-bold text-lg">Price: </p>
                        <p className="font-bold text-3xl text-primary">${data.price}</p>
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <p className="font-bold text-lg">Stock: </p>
                        <Input type="number" defaultValue="1" className="w-16 text-lg" />
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <p className="font-bold text-lg">Remove: </p>
                        <DeleteIcon />
                      </div>
                    </div>
                  </div>
                  )
                 )
      }
       */}
    </div>
  );
}
