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
    <Table className="border rounded-lg">
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
              <Input type="number" />
            </TableCell>
            <TableCell>$25</TableCell>
            <TableCell>
              <DeleteIcon />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
