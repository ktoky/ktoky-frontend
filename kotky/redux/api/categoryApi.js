import { baseApi } from "./baseApi";

const category_url = "/category";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    category: build.query({
      query: (arg) => ({
        url: `${category_url}`,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response) => {
        return {
          categories: response,
        };
      },
      tagTypes: ["category"],
    }),
  }),
  // Allows overriding the existing 'categories' endpoint
});

export const { useCategoryQuery } = categoryApi;
