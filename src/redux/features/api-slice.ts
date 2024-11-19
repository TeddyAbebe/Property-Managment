import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react"
//   import { logout } from "./auth-slice"

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:12000",
})

//   const baseQueryWithReauth: BaseQueryFn<
//     string | FetchArgs,
//     unknown,
//     FetchBaseQueryError
//   > = async (args, api, extraOptions) => {
//     let result = (await baseQuery(args, api, extraOptions)) as any

//     const res =
//       typeof result?.data?.ResultSet === "string"
//         ? JSON.parse(result.data.ResultSet)
//         : result.data.ResultSet

//     // console.log(res)
//     if (
//       res.ExceptionError.MessageDetail === "LOGIN REQUIRED" ||
//       res.ExceptionError.MessageDetail === "NO AvMET FOR YOU!" ||
//       res.ExceptionError.MessageDetail === "RE-AUTH"
//     ) {
//       api.dispatch(logout())
//       window.location.replace("/login")
//     }

//     return result
//   }

export const apiSlice = createApi({
  baseQuery,
  tagTypes: [],
  endpoints: builder => ({}),
})
