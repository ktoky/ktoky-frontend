import axios from "axios";

export const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, data, params, headers, meta } = {}) => {
    try {
      const config = {
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
        meta, // Include meta only if it's provided
      };

      const result = await axios(config);
      return { data: result.data.data, meta: result.data.meta.meta };
    } catch (axiosError) {
      const err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
