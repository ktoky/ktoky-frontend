import { baseApi } from "./baseApi";

const rating_url = "/product/product";

const ratingByIdApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getRatingById: build.query({
      query: (id) => ({
        url: `${rating_url}/${id}`,
        method: "GET",
      }),
      providesTags: ["ratings"], // ✅ Must match invalidatesTags in createRating
    }),
  }),
});

export const { useGetRatingByIdQuery } = ratingByIdApi;
