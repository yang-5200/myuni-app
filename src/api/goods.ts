import type { GoodsResult } from '@/types/goods'
import { http } from '@/utils/http'
//  /goods
export const getGoodsAPI = (id: string) => {
  return http<GoodsResult>({
    method: 'GET',
    url: '/goods',
    data: {
      id,
    },
  })
}


//
// POST
// /member/cart
/**
 * 加入购物车
 * @param skuId SKUID
 * @param count 数量
 * @returns
 */
export const postMemberCart=(skuId:string,count:number)=>{
  return http({
    method:'POST',
    url:'/member/cart',
    data:{
      skuId,
      count
    }
  })
}
