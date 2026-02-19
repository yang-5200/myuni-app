import type { AddressItem, AddressParams } from "@/types/address";
import { http } from "@/utils/http";

// /member/address

/**
 * 添加收货地址
 * @returns
 */
export const postMemberAdressAPI =(data:AddressParams)=>{
  return http<AddressParams>({
    method:'POST',
    url:'/member/address',
    data
  })
}


/**
 * 获取收货地址列表
 * @returns
 */
// /member/address
export const getMemberAddressAPI =()=>{
  return http<AddressItem[]>({
    method:'GET',
    url:'/member/address'
  })
}


/**
 * 修改收货地址
 *
 */
//  /member/address/{id}

export const putMemberAddressAPI = (id:string,data:AddressParams)=>{
  return http({
    method:'PUT',
    url:`/member/address/${id}`,
    data,
  })
}

/**
 * 获取收货地址详情
    GET
  /member/address/{id}
 */

export const getMemberAddressByIdAPI=(id:string)=>{
  return http<AddressItem>({
    method:'GET',
    url:`/member/address/${id}`
  })
}


/**
 * 删除收货地址
  DELETE

 */
type DEleteAddressRes={
  id:string
}
// 删除地址
export const deleteMemberAddressByIdAPI=(id:string)=>{
  return http<DEleteAddressRes>({
    method:'DELETE',
    url:`/member/address/${id}`,

  })
}
