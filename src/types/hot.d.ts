import type { PageResult } from "./global"
import type { GuessItem } from "./home"

export type hotParams={
  subType?:string,
  pageSize?:number,
  page?:number
}

export type hotRes={
  title:string,
  id:string,
  bannerPicture:string,
  subTypes:subItems[]
}

export type goodsItem=GuessItem

export type subItems={
  id:string,
  title:string,
  goodsItems:PageResult<goodsItem>
}
