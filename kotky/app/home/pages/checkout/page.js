import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import img from "@/public/images/product-1-1.jpg";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default async function page() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();

  const countryNames = countries.map((country) => country.name.common);

  return (
    <div className="px-3">
      <div>
        <h1 className="text-5xl font-bold">Your Cart</h1>
        <p className="font-bold mt-1 text-Emphasis">
          There are 3 products in your cart
        </p>
      </div>
      <div className="flex justify-between gap-10">
        <div className="w-2/3">
          <h1 className="text-3xl font-bold text-Emphasis mt-5">
            Billing Details
          </h1>
          <Form className="mt-10">
            <div className="flex gap-4">
              <Input
                placeholder="First Name*"
                className="p-3 text-lg font-semibold flex-grow"
              />
              <Input
                placeholder="Last Name*"
                className="p-3 text-lg font-semibold flex-grow"
              />
            </div>

            <div className="flex gap-4 mt-4">
              <Input
                placeholder="Address*"
                className="p-3 text-lg font-semibold flex-grow"
              />
              <Input
                placeholder="Address Line2"
                className="p-3 text-lg font-semibold flex-grow"
              />
            </div>

            <div className="flex gap-4 mt-4">
              <Select className="flex-grow">
                <SelectTrigger className="w-full text-lg font-semibold">
                  <SelectValue placeholder="Select Your Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className="text-lg font-semibold">
                    {countryNames.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Input
                placeholder="City/Town*"
                className="p-3 text-lg font-semibold flex-grow"
              />
            </div>

            <div className="flex gap-4 mt-4">
              <Input
                placeholder="Postcode/ZIP*"
                className="p-3 text-lg font-semibold flex-grow"
              />
              <Input
                placeholder="Company Name"
                className="p-3 text-lg font-semibold flex-grow"
              />
            </div>

            <div className="flex gap-4 mt-4">
              <Input
                placeholder="Email Address*"
                className="p-3 text-lg font-semibold flex-grow"
              />
              <Input
                placeholder="Phone*"
                className="p-3 text-lg font-semibold flex-grow"
              />
            </div>

            <div className="mt-4">
              <Textarea
                placeholder="Additional Information"
                className="h-40 p-3 text-lg font-semibold w-full"
              />
            </div>
          </Form>
        </div>
        <div className="w-1/3 border shadow-md p-5">
          <div className="flex items-center justify-between border-b">
            <h3 className="text-3xl font-bold text-Emphasis">Your Order</h3>
            <p className="text-xl font-semibold text-tertiary">Subtotal</p>
          </div>
          <div className="space-y-5">
            <div className="flex items-center justify-between gap-7">
              <Image src={img} alt="Product Image" width={100} height={100} />
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold">
                  Yidarton Women Summer Blue
                </h4>
                <p className="font-semibold">X1</p>
              </div>
              <p className="text-3xl font-bold text-primary">$13.3</p>
            </div>
            <div className="flex items-center justify-between gap-7">
              <Image src={img} alt="Product Image" width={100} height={100} />
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold">
                  Yidarton Women Summer Blue
                </h4>
                <p className="font-semibold">X1</p>
              </div>
              <p className="text-3xl font-bold text-primary">$13.3</p>
            </div>
            <div className="flex items-center justify-between gap-7">
              <Image src={img} alt="Product Image" width={100} height={100} />
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold">
                  Yidarton Women Summer Blue
                </h4>
                <p className="font-semibold">X1</p>
              </div>
              <p className="text-3xl font-bold text-primary">$13.3</p>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-3xl font-bold text-Emphasis">Payment</h3>
            <RadioGroup
              defaultValue="Direct-Bank-Transfer"
              className="mt-5 space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Direct-Bank-Transfer"
                  id="bankTransfer"
                />
                <Label htmlFor="bankTransfer">Direct Bank Transfer</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Cash-on-delivery" id="cashOn" />
                <Label htmlFor="cashOn">Cash on delivery</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Online-Getway" id="OnlineGetway" />
                <Label htmlFor="OnlineGetway">Online Getway</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
