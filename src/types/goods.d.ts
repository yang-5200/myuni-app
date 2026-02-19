
// 商品详情  对象
export type GoodsResult={
  id:string,
  name:string,
  spuCode:string,
  desc:string,
  price:string,
  oldPrice:string,
  discounter:integer,
  inventor:integer,
  brand:BrandResult,
  salesCount:integer,
  commentCount:integer,
  collectCount:integer,
  mainVideos:string[],
  videoScale:integer ,
  mainPictures:string[],
  specs:SpecsItem[],
  skus:SkuItem[],
  categories:CategoriesItem[],
  details:DetailsResult,
  isPreSale:boolean,
  isCollect:null,
  recommends:null,
  userAddress:null,
  evaluationInfo:null,
  similarProducts:SimilarProductsItem[],
  hotByDay:HotByDayItem[]
}

//1. 品牌信息  对象
export type BrandResult = {
  id:string,
  name:string,
  nameEn:string,
  picture:string,
  logo:string,
  type:null,
  desc:null,
  place:null
}


//2.1 可选值集合 数组
export type SpecsItemValues={
  name:string,
  picture:string | null,
  available?:boolean,
  desc:string
}

//2.2 可选规格集合  数组   规格集合一定要和skus集合下的 specs   顺序保持一致
export  type SpecsItem ={
  id:string,
  name:string,
  values:SpecsItemValues[]
}


//3.1 sku规格 集合 数组
export type SkuItemSpecs={
  name:string,
  valueName:string
}

//3.2 sku 集合   数组
export type SkuItem={
  id:string,
  skuCode:string,
  price:string,
  oldPrice:string,
  inventory:integer ,
  picture:string,
  specs:SkuItemSpecs[]

}

// 4.1 所属分类的parent 对象|null
export type CategoriesItemParent={
  id:string,
  name:string,
  layer:integer ,
  parent:null
}

//4.2 所属分类  数组
export type CategoriesItem={
  id:string,
  name:string,
  layer:integer,
  parent:CategoriesItemParent | null
}



// 5.1 商品属性集合 数组
export type DetailsResultProperties={
  name:string,
  value:string
}

// 5. 商品详情  对象
export type DetailsResult={
  properties:DetailsResultProperties[],
  pictures:string[]
}


//6. 同类商品  数组
export type SimilarProductsItem={
  id:string,
  picture:string,
  name:string,
  price:string,
  desc:string,
  olderNum:integer ,
  discount:null
}

// 24小时热销  数组
export type HotByDayItem={
  id:string,
  picture:string,
  name:string,
  price:string,
  desc:string,
  olderNum:integer ,
  discount:null
}



