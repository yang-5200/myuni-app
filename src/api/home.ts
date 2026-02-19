import type { BannerItem, CategoryItem, GuessItem, PanelItem } from "@/types/home"
import { http } from "@/utils/http"
import type{PageResult,PageParams} from '@/types/global'

export const getHomeBanerAPI =(distributionSite = 1)=>{
  return http<BannerItem[]>({
    method:'GET',
    url: '/home/banner',
    data:{
      distributionSite
    }
  })
}

// /home/category/mutli
export const getHomeCategoryAPI = ()=>{
  return http<CategoryItem[]>({
    method:'GET',
    url:'/home/category/mutli',

  })
}

//  /home/hot/mutli
export const getHomePanelAPI = ()=>{
  return http<PanelItem[]>({
    method:'GET',
    url:'/home/hot/mutli'
  })
}

//  /home/goods/guessLike
// getHomeGoodsGuessLikeAPI
export const getHomeGoodsGuessLikeAPI = (data?:PageParams)=>{
  return http<PageResult<GuessItem>>({
    method:'GET',
    url:'/home/goods/guessLike',
    data,
  })
}
