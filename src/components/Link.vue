<script setup>
import { defineProps } from "vue";
const props = defineProps({
  href: String,
  type: String, //type=text,type=channel，type=bar
});
</script>
<template>
  <li v-if="props.type === 'channel'" class="option">
    <a class="channel s-fc20 s-fc20h" :href="props.href">
      <span class="title">
        <slot></slot>
      </span>
    </a>
    <i class="spt"></i>
  </li>
  <a v-else-if="props.type === 'bar'" :href="props.href" class="s-fc20 bar-item">
    <slot></slot>
  </a>
  <span v-else>
    <a class="sitelink mainlink singglelink" :href="props.href">
      <slot></slot>
    </a>
  </span>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.sitelink {
  padding: 0 4px;
  display: inline-block;
  *zoom: 1;
}

a.sitelink {
  padding: 0 7px;
}

.option {
  position: relative;
  float: left;
  line-height: 33px;
  padding: 0 21px;
}

.s-fc20,
.g-fc20,
.s-fc20:hover,
.s-fc20h:hover,
.g-fc20h:hover {
  color: #118850;
}

.spt {
  border-right: 1px solid #f7f7f7;
  height: 14px;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -8px;
}

.bar-item {
  padding: 0 14px;
}
</style>
