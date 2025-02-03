import { baseApi } from "./baseApi";

const rating_url = "/product/rating";

const ratingCreateApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createRating: build.mutation({
      query: (ratingData) => ({
        url: rating_url,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: ratingData, // ✅ No need for JSON.stringify()
      }),
      invalidatesTags: ["ratings"],
    }),
  }),
});

export const { useCreateRatingMutation } = ratingCreateApi;
