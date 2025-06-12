import { api as baseApi } from "..";

export const authRegister = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<
      PRODUCTREGISTER.getProductRequest,
      PRODUCTREGISTER.getProductResponse
    >({
      query: (userData) => ({
        url: "/register",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
  overrideExisting: false,
});

export const { useRegisterMutation } = authRegister;
