
export type {ISendOtp, ILogin, IVerifyOtp} from "@/types/authTypes"


export interface IResponse<T> {
  statusCode: number
  success: boolean
  message: string
  data: T
}