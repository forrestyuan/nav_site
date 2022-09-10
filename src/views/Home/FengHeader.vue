<template>
  <!-- /* eslint-disable */ -->
  <div class="nav-sec">
    <div class="nav-upside">
      <div class="page-width">
        <div class="logo">
          <img
            src="https://gss0.bdstatic.com/5bVWsj_p_tVS5dKfpU_Y_D3/res/r/image/2017-09-27/297f5edb1e984613083a2d3cc0c5bb36.png"
            alt="" />
        </div>
        <div class="weather">
          <!-- <iframe width="520" scrolling="no" height="60" frameborder="0" allowtransparency="true"
            src="https://i.tianqi.com?c=code&id=32&icon=1&py=SZ&site=12"></iframe> -->
          <iframe allowtransparency="true" frameborder="0" width="500" height="60" scrolling="no"
            src="//tianqi.2345.com/plugin/widget/index.htm?s=2&z=1&t=1&v=2&d=3&bd=0&k=&f=&ltf=009944&htf=cc0000&q=1&e=0&a=1&c=54511&w=500&h=60&align=left"></iframe>
        </div>

        <div class="cn-date">
          <div class="cn-date-detail-layer">
            <div class="date-week-info" title="点击查看万年历">
              <span>{{ dateObj.dateCn.cMonth }}月{{ dateObj.dateCn.cDay }}日</span>
              <span>{{ dateObj.dateCn.ncWeek }}</span>
              <div class="wrap_yibuyi">
                <div class="item_list">
                  <div class="item">
                    <span>{{ dateObj.dateCn.gzYear }} {{ dateObj.dateCn.gzMonth }}
                      {{ dateObj.dateCn.gzDay }}</span>
                  </div>
                </div>
              </div>
              <a href="https://www.baidu.com/s?word=%E6%97%A5%E5%8E%86&tn=50000167_hao_pg&ie=utf-8&H123Tmp=nunew9"
                class="date-week-info-link-layer">&nbsp;</a>
            </div>
            <div class="link-query">
              <a title="农历查询">{{
              `${dateObj.dateCn.monthCn}${dateObj.dateCn.dayCn}`
              }}</a>
              <a href="https://www.baidu.com/s?word=%E6%98%9F%E5%BA%A7%E8%BF%90%E5%8A%BF&tn=50000167_hao_pg&ie=utf-8"
                title="星座运势">星座运势</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-downside">
      <div class="page-width">
        <div class="search-layer">
          <div class="company-logo">
            <img
              src="https://gss0.bdstatic.com/5bVWsj_p_tVS5dKfpU_Y_D3/res/r/image/2017-09-26/352f1d243122cf52462a2e6cdcb5ed6d.png"
              alt="" />
          </div>
          <div class="search-box">
            <input type="text" v-model="searchKeyword" placeholder="输入要搜索的内容" />
            <input type="button" @click="hdSearch" value="百度一下" />
            <div class="hot-news-tag">
              <ul>
                <li v-for="(item, idx) in hotnews" :key="`hot_news_${idx}`" :title="item.title">
                  <a :href="item.href" target="_blank">{{ item.title }}</a>
                </li>
              </ul>
              <span class="tag-more" @click="showMore"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref, onMounted } from "vue";
import { solar2lunar } from "solarlunar";
import dayjs from "dayjs";
import { storeToRefs } from "pinia";
import { useCommonStore } from "@/store/commonStore.js";
const store = useCommonStore();
const { hotnews } = storeToRefs(store);
const dateObj = reactive({
  dateCn: {},
  dateNow: {},
});
const searchKeyword = ref("");
const isHotNewsTagMore = ref(false);
const hdSearch = () => {
  console.log(searchKeyword.value);
  window.open(`https://www.baidu.com/s?wd=${searchKeyword.value}`, "__blank");
};
const showHotNewsTagMore = function (isShowMore) {
  var hotNewsBox = document.querySelector(".hot-news-tag");
  if (!isShowMore) {
    hotNewsBox.style.cssText =
      "box-shadow:2px 2px 4px 2px #ccc;height:auto;z-index:100000";
    document.querySelector(".hot-news-tag .tag-more").style.cssText =
      "transform:rotate(225deg);top:30px";
  } else {
    hotNewsBox.style.cssText = "";
    document.querySelector(".hot-news-tag .tag-more").style.cssText = "";
  }
};
const showMore = () => {
  showHotNewsTagMore(isHotNewsTagMore.value);
  isHotNewsTagMore.value = !isHotNewsTagMore.value;
};
onMounted(() => {
  const now = dayjs();
  dateObj.dateNow = now;
  const lunarDate = solar2lunar(now.year(), now.month() + 1, now.date());
  dateObj.dateCn = lunarDate;
  console.log(lunarDate);
});
</script>
<style scoped lang="less">
@import url("./feng_header.less");
</style>
