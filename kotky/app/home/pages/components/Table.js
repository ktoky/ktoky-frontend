import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import img from "@/public/images/product-1-1.jpg";
import { Input } from "@/components/ui/input";
import DeleteIcon from "@mui/icons-material/Delete";
import { Star } from "@mui/icons-material";

const datas = [
  {
    image: img,
    productName: "Field Roast Chao Cheese Creamy Original",
    productRating: 4,
    price: "23.5",
  },
  {
    image: img,
    productName: "Field Roast Chao Cheese Creamy Original",
    productRating: 4,
    price: "23.5",
  },
  {
    image: img,
    productName: "Field Roast Chao Cheese Creamy Original",
    productRating: 4,
    price: "23.5",
  },
  {
    image: img,
    productName: "Field Roast Chao Cheese Creamy Original",
    productRating: 4,
    price: "23.5",
  },
];

export function TableD() {
  return (
    <div>
      <Table className="border rounded-lg hidden">
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
          {datas.map((data) => (
            <TableRow key={data.productName}>
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
                    {data.productName}
                  </p>
                </div>
              </TableCell>
              <TableCell>${data.price}</TableCell>
              <TableCell>
                <Input type="number" defaultValue="1" />
              </TableCell>
              <TableCell>$25</TableCell>
              <TableCell>
                <DeleteIcon />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center flex-col border border-Emphasis/20 p-5 rounded-md">
        <Image src={img} width={200} height={200} alt="Product Image" />
        <h3 className="font-semibold text-Emphasis">
          Field Roast Chao Cheese Creamy Original
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
            <p className="font-bold text-3xl text-primary">$2.35</p>
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
    </div>
  );
}
