import type { CartItem } from "@/types/cart";
import { http } from "@/utils/http";


// 获取购物车列表
// GET
// /member/cart
/**
 * 获取购物车列表
 * @returns
 */
export const getMemberCartAPI = ()=>{
  return http<CartItem[]>({
    method:'GET',
    url:'/member/cart'
  })
}


// 删除/清空购物车单品
// DELETE
// /member/cart
/**
 * 删除/清空购物车单品
 * @param ids 需要删除的id数组
 * @returns
 */
export const deleteMemberCartAPI = (data: { ids: string[] })=>{
  return http({
    method:'DELETE',
    url:'/member/cart',
    data
  })
}

// 修改购物车单品
// PUT
// /member/cart/{skuId}
/**
 *
 * @param skuId
 * @param data
 * @returns
 */
export const putMemberCartAPI=(
  skuId: string,
  data: { selected?: boolean; count?: number })=>{
  return http({
    method:'PUT',
    url:`/member/cart/${skuId}`,
    data,
  })
}


// 购物车全选/取消全选
// PUT
// /member/cart/selected

export const putMemberCartSelectedAPI=(data:{selected:boolean})=>{
  return http({
    method:'PUT',
    url:'/member/cart/selected',
    data
  })
}
