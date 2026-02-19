import type { hotParams, hotRes } from "@/types/hot";
import { http } from "@/utils/http";

export const getHotRecmmendAPI = (url:string,data?:hotParams)=>{
  return http<hotRes>({
    method:'GET',
    url,
    data
  })
}
