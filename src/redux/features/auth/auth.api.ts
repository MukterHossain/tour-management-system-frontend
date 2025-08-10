import { baseApi } from "@/redux/baseApi";
import type { ILogin, IResponse, ISendOtp, IVerifyOtp } from "@/types";


export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        login: builder.mutation<null, ILogin>({
            query: (userInfo) =>({
                url: "/auth/login",
                method: "POST",
                data: userInfo,
            })
        }),
        logout: builder.mutation({
            query: () =>({
                url: "/auth/logout",
                method: "POST",
            }),
            invalidatesTags: ["ADMIN"],
        }),
        register: builder.mutation({
            query: (userInfo) =>({
                url: "/user/register",
                method: "POST",
                data: userInfo,
            })
        }),
        sendOtp: builder.mutation<IResponse<null>, ISendOtp>({
            query: (userInfo) =>({
                url: "/otp/send",
                method: "POST",
                data: userInfo,
            })
        }),
        verifyOtp: builder.mutation<IResponse<null>, IVerifyOtp>({
            query: (userInfo) =>({
                url: "/otp/verify",
                method: "POST",
                data: userInfo,
            })
        }),
        userInfo: builder.query({
            query: () =>({
                url: "/user/me",
                method: "GET"
            }),
            providesTags: ["ADMIN"],
        }),
    })
})



export const {useRegisterMutation, useLoginMutation, useSendOtpMutation, useVerifyOtpMutation, useUserInfoQuery, useLogoutMutation} = authApi