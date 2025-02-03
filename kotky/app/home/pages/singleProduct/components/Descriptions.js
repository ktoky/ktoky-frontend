"use client";

import Card from "@/app/components/Product/Card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useProductsQuery } from "@/redux/api/productApi";
import { useGetRatingByIdQuery } from "@/redux/api/ratingByIdApi";
import { useCreateRatingMutation } from "@/redux/api/ratingCreateApi";
import { Star } from "@mui/icons-material";
import { useState } from "react";
import Rating from "./Rating";
export default function Descriptions({ slug, product }) {
  const [createRating] = useCreateRatingMutation();
  const { refetch } = useGetRatingByIdQuery(product.data.id);
  const query = {};
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    review: '',
    rating: 0,
  });
  query["searchTerm"] = slug;
  const { data, isLoading } = useProductsQuery({ slug });
  // console.log(product.data);

  const { data: ratingData, isLoading: isLoadingRating } = useGetRatingByIdQuery(product.data.id);
  console.log(ratingData, "ratingData");

  const handleRatingSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || formData.rating === 0) {
      alert('Please fill out all fields and provide a rating.');
      return;
    }

    try {
      const ratingDatas = {
        productId: product.data.id,
        userName: formData.name,
        userEmail: formData.email,
        ratingStar: Number(formData.rating),
        reviewText: formData.review
      };

      console.log("Sending rating data:", ratingDatas);
      const response = await createRating(ratingDatas).unwrap();
      console.log("Response:", response);

      // ✅ Refetch the rating data after submission
      await refetch();

      console.log("Rating submitted successfully!");
    } catch (error) {
      console.error("Failed to submit rating:", error);
    }
    // Dispatch the action to add the review



    setFormData({
      name: '',
      email: '',
      review: '',
      rating: 0,
    });





  }

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
          {
            isLoadingRating ? (
              <div>Loading...</div>
            ) : (
              ratingData?.map((rating, index) => (

                <div className="border mt-5 border-Emphasis/20 rounded-lg p-4 flex items-start md:items-center gap-10">

                  <div className="flex items-center justify-center flex-col">
                    <Avatar className="h-20 w-20">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="Profile"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <h1 className="font-semibold text-Emphasis mt-2">{rating?.userName}</h1>
                  </div>
                  <div>
                    <div className="md:flex items-center justify-between w-full">
                      <div className="text-sm ">December 4, 2024 at 3:12 pm</div>
                      <div className="flex">
                        {Array.from({ length: 5 }, (_, starIndex) => (
                          <Star
                            key={starIndex}
                            className={`text-sm ${starIndex < rating?.ratingStar ? "text-yellow-400" : "text-gray-300"
                              }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="mt-3 text-sm">
                      {rating?.reviewText}
                    </p>
                  </div>

                </div>
              ))


            )
          }

          <form onSubmit={handleRatingSubmit}>
            <h1 className="text-2xl mt-10 font-semibold">Add a review</h1>
            <Rating
              maxStars={5}
              value={formData.rating}
              setOnRate={(newRating) => setFormData({ ...formData, rating: newRating })}
            />
            <div>

              <textarea className="h-48 w-full border border-gray-300 rounded rounded-md focus:outline-none focus:ring-1 focus:ring-black" placeholder="Write Comment"
                value={formData.review}
                onChange={(e) => setFormData({ ...formData, review: e.target.value })}
              />
              <div className="input_fields w-full flex jusfity-between space-x-4 my-2">
                {/* Name Input */}
                <div className="mb-4 w-1/2">
                  <label className="block text-sm font-normal mb-2" htmlFor="name">
                    Name <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}

                  />
                </div>

                {/* Email Input */}
                <div className="mb-4 w-1/2">
                  <label className="block text-sm font-normal mb-2" htmlFor="email">
                    Email <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}

                  />
                </div>
              </div>

              <Button className="hover:bg-primary mt-5" size="lg" type="submit">
                Submit Review
              </Button>
            </div>

          </form>
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
