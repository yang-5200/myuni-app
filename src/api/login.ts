import type { LoginResult } from "@/types/member";
import { http } from "@/utils/http";

export type DataParams={
  code:string,
  encryptedData:string,
  iv:string
}
// 登录
export const postLoginWeiXiAPI =(data:DataParams)=>{
  return http({
    method:'POST',
    url:'/login/wxMin',
    data,
  })
}

// 小程序登录-内测版
// POST
// /login/wxMin/simple

export const postLoginWxMinSimpleAPI=(phoneNumber:string)=>{
  return http<LoginResult>({
    method:'POST',
    url:'/login/wxMin/simple',
    data:{
    phoneNumber
    }
  })
}
