import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function page() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-black">Your Orders</h1>
      <div className="overflow-x-auto mt-5">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold text-lg text-black whitespace-nowrap">
                Order
              </TableHead>
              <TableHead className="font-semibold text-lg text-black whitespace-nowrap">
                Date
              </TableHead>
              <TableHead className="font-semibold text-lg text-black whitespace-nowrap">
                Status
              </TableHead>
              <TableHead className="font-semibold text-lg text-black whitespace-nowrap">
                Total
              </TableHead>
              <TableHead className="font-semibold text-lg text-black whitespace-nowrap">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-black text-base whitespace-nowrap">
                #1357
              </TableCell>
              <TableCell className="text-black text-base whitespace-nowrap">
                March 25, 2020
              </TableCell>
              <TableCell className="text-black text-base whitespace-nowrap">
                Processing
              </TableCell>
              <TableCell className="text-black text-base whitespace-nowrap">
                $125.00 for 2 items
              </TableCell>
              <TableCell className="text-black text-base whitespace-nowrap">
                <button className="text-blue-500 hover:underline">View</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-black text-base whitespace-nowrap">
                #1358
              </TableCell>
              <TableCell className="text-black text-base whitespace-nowrap">
                May 10, 2020
              </TableCell>
              <TableCell className="text-black text-base whitespace-nowrap">
                Shipped
              </TableCell>
              <TableCell className="text-black text-base whitespace-nowrap">
                $200.00 for 3 items
              </TableCell>
              <TableCell className="text-black text-base whitespace-nowrap">
                <button className="text-blue-500 hover:underline">View</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-black text-base whitespace-nowrap">
                #1359
              </TableCell>
              <TableCell className="text-black text-base whitespace-nowrap">
                May 10, 2020
              </TableCell>
              <TableCell className="text-black text-base whitespace-nowrap">
                Delivered
              </TableCell>
              <TableCell className="text-black text-base whitespace-nowrap">
                $350.00 for 5 items
              </TableCell>
              <TableCell className="text-black text-base whitespace-nowrap">
                <button className="text-blue-500 hover:underline">View</button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
