<script setup lang="ts">

import CustomNavbar from '@/pages/index/components/CustomNavbar.vue';
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { getHomeBanerAPI, getHomeCategoryAPI, getHomePanelAPI } from '@/api/home';
import CategoryPanel from './components/CategoryPanel.vue';
import HotPanel from './components/HotPanel.vue';
import type { XtxGuessInstance } from '@/types/component';
import PageSkeleton from './components/PageSkeleton.vue';

const bannerList = ref()
const getHomeBannerData = async () => {
  const res = await getHomeBanerAPI()
  console.log(res)
  bannerList.value = res.result
}

const CategoryList = ref()

// 获取前台分类
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  console.log(res)
  CategoryList.value = res.result
}

// 热门推荐
const PanelList = ref()
const getHomePanelData = async () => {
  const res = await getHomePanelAPI()
  PanelList.value = res.result
}

//  猜你喜欢
// 获取组件猜你喜欢的ref
const guessRef = ref<XtxGuessInstance>()

// 加载骨架屏是否展现 isloading
const isloading = ref(false)
onLoad(async () => {
  isloading.value = true
  await Promise.all([getHomeBannerData(),
  getHomeCategoryData(),
  getHomePanelData(),])
  isloading.value =false
})

// 滚动触底
const onScrolltolower = () => {
  console.log("滚动触底了")
  guessRef.value?.getMore()
}

// 下拉刷新状态
const isTriggered = ref(false)
const onRefresherrefresh = async () => {
  // 开启动画
  isTriggered.value = true

  // 调用子组件重置数据 猜你喜欢的数据
  guessRef.value?.resetData()

  // 加载数据
  await Promise.all([getHomeBannerData(),
  getHomeCategoryData(),
  getHomePanelData()]),
    guessRef.value?.getMore()

  // 关闭动画
  isTriggered.value = false
}


</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />

  <!-- 骨架屏 -->

  <PageSkeleton v-if="isloading"></PageSkeleton>

  <template>
    <!-- 滚动容器 -->
    <scroll-view refresher-enabled @refresherrefresh="onRefresherrefresh" :refresher-triggered="isTriggered" scroll-y
      @scrolltolower="onScrolltolower">
      <!--  自定义轮播图 -->
      <XtxSwiper :list="bannerList" />
      <!--  分类面板 -->
      <CategoryPanel :list="CategoryList"></CategoryPanel>
      <!--  热门推荐 -->
      <HotPanel :list="PanelList" />

      <!-- 猜你喜欢 -->
      <XtxGuess ref="guessRef" />
    </scroll-view>
  </template>
  <view class="index">index</view>

</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
