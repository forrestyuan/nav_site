<script setup>
// @ is an alias to /src
import { storeToRefs } from "pinia";
import FengHeader from "@/views/Home/FengHeader.vue";
import FengBody from "@/views/Home/FengBody.vue";
import { useCommonStore } from "@/store/commonStore";
import FengFunnyList from "./FengFunnyList.vue";

const store = useCommonStore();
const { yuleTabList, yuleTabData, activeKey, baiBaoXiangData, hotSearchNews } =
  storeToRefs(store);
const onTabChange = (value) => {
  console.log(value);
  activeKey.value = value;
};
</script>
<template>
  <!-- eslint-disable -->
  <a-layout>
    <!-- *************头部内容************* -->
    <a-layout-header>
      <FengHeader />
    </a-layout-header>
    <a-layout>
      <!-- *************左侧内容************* -->
      <a-layout-sider :width="280">
        <!-- 快捷功能 -->
        <a-card class="function-box" style="width: 100%">
          <div class="topsearch" monkey="tools1">
            <div class="topsearch-icons g-fs12 g_clr" monkey="icon">
              <a v-for="(item, idx) in baiBaoXiangData[0]" class="topsearch-icon g-fl g-br12 g-fc25"
                :key="`baibao_${idx}`" :href="item.href" :title="item.title">
                <span class="g-ib icon" :style="`background-image: url(${item.bgImage})`">
                </span>
                {{ item.title }}
              </a>
            </div>
            <ul class="topsearch-texts g-lh28" monkey="text">
              <li v-for="(item, idx) in baiBaoXiangData[1]" :key="`baibao_text_${idx}`" class="g-ib col">
                <a class="g-fc25" :href="item.href" :title="item.title">{{
                item.title
                }}</a>
              </li>
            </ul>
          </div>
        </a-card>
        <!-- 电影，电视，小说，游戏 -->
        <a-card class="funny-box" style="width: 100%" :tab-list="yuleTabList" :active-tab-key="activeKey"
          @tabChange="onTabChange">
          <FengFunnyList :data="yuleTabData[activeKey]" :pageNo="0" />
        </a-card>
        <!-- 热搜新闻 -->
        <a-card class="hot-search-news" title="热搜新闻" style="width: 100%">
          <template #extra><a href="#">换一换</a></template>
          <FengFunnyList type="pure" :data="hotSearchNews" :pageNo="0" />
        </a-card>
      </a-layout-sider>
      <!-- *************主体内容************* -->
      <a-layout-content :width="910">
        <FengBody></FengBody>
      </a-layout-content>
    </a-layout>
    <a-layout-footer>
      <div class="footer-box">
        <span>版权所有 ©2022</span>
      </div>
    </a-layout-footer>
  </a-layout>
</template>

<style lang="less" scoped>
/* eslint-disable */
:deep(.ant-layout-sider) {
  background: transparent;
  margin-right: 10px;
}

:deep(.ant-layout.ant-layout-has-sider) {
  width: 1190px;
  margin: 0 auto;
}

:deep(.ant-layout-header) {
  height: auto;
  padding: 0;
  line-height: normal;
  background: transparent;
  margin-bottom: 10px;
}

:deep(.ant-card-body) {
  padding: 10px 15px;
}

:deep(.ant-card) {
  margin-bottom: 10px;
}

//百宝箱样式
.function-box {
  .g_clr {
    *zoom: 1;
  }

  .g-fs12 {
    font-size: 12px;
  }

  .g-lh28 {
    line-height: 28px;
  }

  .g-ib {
    display: inline-block;
    *display: inline;
    *zoom: 1;
  }

  .topsearch {
    .topsearch-icons {
      text-align: center;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
    }

    .topsearch-icon {
      display: flex;
      overflow: hidden;
      flex-direction: column;
      align-items: center;
      flex-wrap: wrap;
      margin: 6px 10px 0 0;
      width: 52px;
      height: 44px;
    }

    .icon {
      margin: 3px 13px 0 14px;
      width: 26px;
      height: 22px;
      background-repeat: no-repeat;
      background-position: center center;
    }

    .topsearch-texts {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;
      margin: 8px 0 8px 13px;
      padding-left: 0;
    }

    .col {
      width: 72px;
      display: flex;
      justify-content: space-between;
    }
  }
}

.funny-box {
  /deep/.ant-tabs-tab+.ant-tabs-tab {
    margin: 0 0 0 30px;
  }
}

.footer-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
