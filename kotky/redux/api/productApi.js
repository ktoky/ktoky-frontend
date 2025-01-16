import { baseApi } from "./baseApi";

const product_url = "/product";

const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    product: build.query({
      query: (arg) => ({
        url: `${product_url}`,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response, meta) => {
        return {
          product: response,
          meta,
        };
      },
      tagTypes: ["product"],
    }),
  }),
});

export const { useProductQuery } = productApi; //
