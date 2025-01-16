import { baseApi } from "./baseApi";

const product_url = "/product";

const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    products: build.query({
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
      tagTypes: ["products"],
    }),
    product: build.query({
      query: (slug) => ({
        url: `/product/${slug}`,
        method: "GET",
      }),
      tagTypes: ["product"],
    }),
  }),
});

export const { useProductsQuery, useProductQuery } = productApi; //
