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
      <h1 className="text-4xl font-bold text-Emphasis">Your Orders</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold text-lg text-black w-28">
              Order
            </TableHead>
            <TableHead className="font-semibold text-lg text-black w-48">
              Date
            </TableHead>
            <TableHead className="font-semibold text-lg text-black w-40">
              Status
            </TableHead>
            <TableHead className="font-semibold text-lg text-black w-60">
              Total
            </TableHead>
            <TableHead className="font-semibold text-lg text-black w-24">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-black text-base w-28">#1357</TableCell>
            <TableCell className="text-black text-base w-48">
              March 45, 2020
            </TableCell>
            <TableCell className="text-black text-base w-40">
              Processing
            </TableCell>
            <TableCell className="text-black text-base w-60">
              $125.00 for 2 item
            </TableCell>
            <TableCell className="text-black text-base w-24">View</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-black text-base w-28">#1357</TableCell>
            <TableCell className="text-black text-base w-48">
              March 45, 2020
            </TableCell>
            <TableCell className="text-black text-base w-40">
              Processing
            </TableCell>
            <TableCell className="text-black text-base w-60">
              $125.00 for 2 item
            </TableCell>
            <TableCell className="text-black text-base w-24">View</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-black text-base w-28">#1357</TableCell>
            <TableCell className="text-black text-base w-48">
              March 45, 2020
            </TableCell>
            <TableCell className="text-black text-base w-40">
              Processing
            </TableCell>
            <TableCell className="text-black text-base w-60">
              $125.00 for 2 item
            </TableCell>
            <TableCell className="text-black text-base w-24">View</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
