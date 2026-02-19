import type { ProfileDetail, ProfileParams } from "@/types/profile";
import { http } from "@/utils/http";


//  /member/profile
export const getMemberProfileAPI =()=>{
  return http<ProfileDetail>({
    method:'GET',
    url:'/member/profile'
  })
}


// /member/profile

export const putMemberProfileAPI = (data:ProfileParams)=>{
  return http({
    method:'PUT',
    url:'/member/profile',
    data,
  })
}
