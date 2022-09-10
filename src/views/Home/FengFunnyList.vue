<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  data: Object,
  pageNo: Number,
  type: String, //default, pure
});
const curNo = ref(props.pageNo);
const hlover = (idx) => {
  const parent = document.querySelectorAll(".item_wrap");
  if (idx > 0) {
    parent[0].querySelector(".item_hover_box").style.cssText = "display:none";
    parent[0].querySelector(".item_box").style.cssText = "display:flex";
    parent[0].querySelector(".order_1").style.cssText =
      "background-color: transparent;color: red;position:relative;";
  } else {
    parent[0].querySelector(".item_hover_box").style.cssText = "display:flex";
    parent[0].querySelector(".item_box").style.cssText = "display:none";
    parent[0].querySelector(".order_1").style.cssText =
      "background-color: red;color: #fff;position:absolute;";
  }
};
const hlleave = () => {
  const parent = document.querySelectorAll(".item_wrap")[0];
  parent.querySelector(".item_hover_box").style.cssText = "display:flex";
  parent.querySelector(".item_box").style.cssText = "display:none";
  parent.querySelector(".order_1").style.cssText =
    "background-color: red;color: #fff;position:absolute;";
};
const changePage = () => {
  if (curNo.value + 1 >= props.data.length) {
    curNo.value = 0;
  } else {
    ++curNo.value;
  }
};
const searchMovie = (key) => {
  window.open("https://www.baidu.com/s?word=" + key, "__blank");
};
</script>
<template>
  <!-- /* eslint-disable */ -->
  <div>
    <div v-if="!props.type" class="list_wrap" @mouseleave="hlleave">
      <div v-for="(item, idx) in props.data[curNo]" :key="`item_ff_${idx}`" class="item_wrap"
        @mouseover="() => hlover(idx)" @click="() => searchMovie(item.title)">
        <span :class="['order', `order_${idx + 1}`]">{{ idx + 1 }}</span>
        <div class="item_hover_box">
          <div class="left">
            <img :src="item.image" alt="" />
          </div>
          <div class="right">
            <span class="title">{{ item.title }}</span>
            <span class="zhishu">热搜指数：{{ item.zhishu }}</span>
            <span v-if="item.zhishu" class="diqu">地区：{{ item.diqu }}</span>
            <span v-if="item.zuozhe" class="zuozhe">作者：{{ item.zuozhe }}</span>
            <span class="type">类型：{{ item.type }}</span>
          </div>
        </div>
        <div class="item_box">
          <span class="title">{{ item.title }}</span>
          <span class="zhishu">{{ item.zhishu }}</span>
        </div>
      </div>
      <div class="loadMore">
        <span @click="changePage">换一换</span>
      </div>
    </div>
    <div v-if="props.type">
      <div v-for="(item, idx) in props.data[props.pageNo]" :key="`item_ffp_${idx}`" class="item_wrap_pure"
        @click="() => searchMovie(item.title)">
        <span :class="['order_pure', `order_pure_${idx + 1}`]">{{
        idx + 1
        }}</span>
        <div class="item_box_pure">
          <span class="title">{{ item.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.loadMore {
  display: flex;
  justify-content: center;
  align-items: center;

  & span:hover {
    cursor: pointer;
    color: #1890ff;
  }
}

.item_wrap,
.item_wrap_pure {
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 10px;
  cursor: pointer;
  border-bottom: dashed 1px #eee;

  .order,
  .order_pure {
    width: 20px;
    font-size: 16px;
    color: #9195a3;

    &_1 {
      color: red;
    }

    &_2 {
      color: #ff5900;
    }

    &_3 {
      color: #faa90e;
    }
  }

  .item_box,
  .item_box_pure,
  .item_hover_box .right {
    .title:hover {
      color: #1890ff;
    }
  }

  .item_box_pure {
    font-size: 14px;
  }

  .item_hover_box {
    display: none;
    justify-content: flex-start;
    align-items: center;

    .left {
      margin-right: 10px;

      img {
        width: 80px;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      span {
        font-size: 12px;
        color: #999;

        &.title {
          font-size: 14px;
          color: #333;
        }
      }
    }
  }

  .item_box,
  .item_box_pure {
    display: flex;
    flex-grow: 2;

    .zhishu {
      display: flex;
      justify-content: flex-end;
      flex-grow: 2;
      font-size: 12px;
    }
  }

  &:hover,
  &:first-child {
    .item_hover_box {
      display: flex;
    }

    .item_box {
      display: none;
    }

    .order {
      display: inline-block;
      position: absolute;
      left: 0;
      top: 0;
      background-color: #9195a3;
      height: 20px;
      width: 20px;
      line-height: 20px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      margin: 0;

      &_1 {
        background-color: red;
      }

      &_2 {
        background-color: #ff5900;
      }

      &_3 {
        background-color: #faa90e;
      }
    }
  }
}
</style>
