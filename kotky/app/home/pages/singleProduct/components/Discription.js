"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Form } from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star } from "@mui/icons-material";
import Rating from "./Rating";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Card from "@/app/components/Product/Card";
import { useProductsQuery } from "@/redux/api/productApi";

export default function Discription({ slug }) {
  const query = {};
  query["searchTerm"] = slug;
  const { data, isLoading } = useProductsQuery({ slug });
  console.log(data, slug, "search");
  return (
    <div className="lg:ml-20">
      <Tabs defaultValue="discription" className="w-full px-5">
        <TabsList className="grid grid-cols-2 bg-transparent w-[200px]">
          <TabsTrigger
            value="discription"
            className="text-lg bg-transparent data-[state=active]:shadow-none"
          >
            Discription
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="text-lg bg-transparent data-[state=active]:shadow-none"
          >
            Reviews
          </TabsTrigger>
        </TabsList>
        <TabsContent value="discription">
          <p>
            Uninhibited carnally hired played in whimpered dear gorilla koala
            depending and much yikes off far quetzal goodness and from for
            grimaced goodness unaccountably and meadowlark near unblushingly
            crucial scallop tightly neurotic hungrily some and dear furiously
            this apart.
          </p>
          <p className="mt-2">
            Spluttered narrowly yikes left moth in yikes bowed this that grizzly
            much hello on spoon-fed that alas rethought much decently richly and
            wow against the frequent fluidly at formidable acceptably flapped
            besides and much circa far over the bucolically hey precarious
            goldfinch mastodon goodness gnashed a jellyfish and one however
            because.
          </p>
        </TabsContent>
        <TabsContent value="reviews" className="w-full lg:w-[800px]">
          <h4 className="font-bold text-lg">Customer questions & answers</h4>
          <div className="border mt-5 border-Emphasis/20 rounded-lg p-4 flex items-start md:items-center gap-10">
            <div className="flex items-center justify-center flex-col">
              <Avatar className="h-20 w-20">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="Profile"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className="font-semibold text-Emphasis mt-2">Sienna</h1>
            </div>
            <div>
              <div className="md:flex items-center justify-between">
                <p className="text-sm">December 4, 2024 at 3:12 pm</p>
                <div>
                  <Star className="text-sm text-yellow-400" />
                  <Star className="text-sm text-yellow-400" />
                  <Star className="text-sm text-yellow-400" />
                  <Star className="text-sm text-yellow-400" />
                  <Star className="text-sm text-yellow-400" />
                </div>
              </div>
              <p className="mt-3 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus, suscipit exercitationem accusantium obcaecati quos
                voluptate nesciunt facilis itaque modi commodi dignissimos sequi
                repudiandae minus ab deleniti totam officia id incidunt?
              </p>
            </div>
          </div>
          <Form>
            <h1 className="text-2xl mt-10 font-semibold">Add a review</h1>
            <Rating maxStars={5} />
            <div>
              <Textarea className="h-48" placeholder="Write Comment" />
              <Button className="hover:bg-primary mt-5" size="lg">
                Submit Review
              </Button>
            </div>
          </Form>
        </TabsContent>
      </Tabs>
      <div>
        <h1 className="text-3xl ml-4 mt-5 font-semibold text-Emphasis">
          Related products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-5 px-5 mb-5 md:mb-0">
          {data?.product.map((card, id) => (
            <Card key={id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
