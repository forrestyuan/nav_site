<script setup>
import { ref } from 'vue';
import Link from '../../components/Link.vue';
// import { storeToRefs } from "pinia";
// import { useCommonStore } from "@/store/commonStore";
const li_sub_style = ref('js_site-item site-item site-item-hassub')
const li_style = ref('js_site-item site-item')
const li_a_style = ref('sitelink mainlink js_text sitemainlink')
const li_a_single_style = ref('sitelink mainlink singglelink js_text sitemainlink')

const single_link = ref('sitelink mainlink singglelink');

const coolsite_tit = ref('coolsite-itemname s-fc20');
const coolsite_more = ref('g_more g_gray-red coolsite-more');
// const store = useCommonStore();
// const { bodyLinkData } = storeToRefs(store);
</script>
<template>
  <!-- eslint-disable -->
  <div class="layout-content" id="layout-content">
    <div class="g_clr s-br21 g-bg11 layout-famoussite hao123-famoussite" id="layout-famoussite">
      <div id="box-site" style="position: relative; z-index: 300">
        <div class="widget-site" monkey="site" id="site">
          <div class="js_site site site-normal">
            <ul class="js_bd site-bd site-hd0">
              <li :class="li_sub_style">
                <a :class="li_a_style"
                  style="background: url(http://s0.hao123img.com/res/img/defaultIcon1229.png) 2px -198px no-repeat;"
                  href="http://www.baidu.com/?tn=sitehao123_15">百度</a>•<a class="sitelink sublink"
                  href="https://tieba.baidu.com/">贴吧</a>
              </li>
              <li :class="li_sub_style">
                <a :class="li_a_style"
                  style="background: url(http://s0.hao123img.com/res/img/defaultIcon1229.png) 2px -278px no-repeat;"
                  href="http://www.sina.com.cn/">新浪</a>•<a class="sitelink sublink" href="http://weibo.com/">微博</a>
              </li>
              <li :class="li_sub_style">
                <a :class="li_a_style"
                  style="background: url(http://s0.hao123img.com/res/img/defaultIcon1229.png) 2px -318px no-repeat;"
                  href="http://www.sohu.com/">搜狐</a>•<a class="sitelink sublink"
                  href="http://tuijian.hao123.com/">热点</a>
              </li>
              <li :class="li_style">
                <a :class="li_a_single_style"
                  style="background: url(http://s0.hao123img.com/res/img/defaultIcon1229.png) 2px -38px no-repeat;"
                  href="http://www.qq.com/">腾讯</a>
              </li>
              <li :class="li_style">
                <a :class="li_a_single_style"
                  style="background: url(http://s0.hao123img.com/res/img/defaultIcon1229.png) 2px -157px no-repeat;"
                  href="http://www.163.com/">网易</a>
              </li>
              <li class="js_site-item site-item site-item-last">
                <a :class="li_a_single_style"
                  style="background: url(http://s0.hao123img.com/res/img/defaultIcon1229.png) 2px -358px no-repeat;"
                  href="https://www.taobao.com/">淘宝网</a>
              </li>
              <li :class="li_sub_style">
                <a :class="li_a_style" style="background-image: url(http://sc1.hao123img.com/urlicon/10138.2.png);"
                  href="https://s.click.taobao.com/Z6beuAx">天猫</a>•
                <a class="sitelink sublink" href="https://s.click.taobao.com/GSNeuAx">精选</a>
              </li>
              <li :class="li_style">
                <a :class="li_a_single_style"
                  style="background: url(http://s0.hao123img.com/res/img/defaultIcon1229.png) 2px -238px no-repeat;"
                  href="http://www.ifeng.com">凤凰网</a>
              </li>
              <li :class="li_style">
                <a :class="li_a_single_style"
                  style="background-image: url(http://sc2.hao123img.com/urlicon/18610137363.png);"
                  href="https://s.click.taobao.com/">双11红包</a>
              </li>
              <li :class="li_style">
                <a :class="li_a_single_style"
                  style="background-image: url(http://sc1.hao123img.com/urlicon/game0331.png);"
                  href="http://game.hao123.com/">免费游戏</a>
              </li>
              <li :class="li_style">
                <a :class="li_a_single_style"
                  style="background: url(http://s0.hao123img.com/res/img/defaultIcon1229.png) 2px 2px no-repeat;"
                  href="http://www.4399.com/">4399游戏</a>
              </li>
              <li class="js_site-item site-item site-item-last" data-icon="1419388771.png">
                <a :class="li_a_single_style"
                  style="background-image: url(http://sc2.hao123img.com/urlicon/1419388771.png);"
                  href="http://v.hao123.baidu.com/">hao123影视</a>
              </li>
              <li :class="li_style">
                <a :class="li_a_single_style" style="background-image: url(http://sc2.hao123img.com/urlicon/21.1.png);"
                  href="https://union-click.jd.com/jdc?d=iEZf6v">京东商城</a>
              </li>
              <li :class="li_style">
                <a :class="li_a_single_style"
                  style="background-image: url(http://sc1.hao123img.com/urlicon/8022_1.png);"
                  href="https://www.suning.com/?utm_source=hao123&amp;utm_medium=mingzhan">苏宁易购</a>
              </li>
              <li :class="li_style">
                <a :class="li_a_single_style"
                  style="background-image: url(http://sc2.hao123img.com/urlicon/6282145123.png);"
                  href="https://www.xin.com/">优信二手车</a>
              </li>
              <li :class="li_style">
                <a :class="li_a_single_style"
                  style="background-image: url(http://sc2.hao123img.com/urlicon/23478531245.png);"
                  href="https://www.gome.com.cn/">国美</a>
              </li>
              <li :class="li_style">
                <a :class="li_a_single_style"
                  style="background: url(http://s0.hao123img.com/res/img/defaultIcon1229.png) 2px -518px no-repeat;"
                  href="http://www.autohome.com.cn">汽车之家</a>
              </li>
              <li class="js_site-item site-item site-item-last">
                <a :class="li_a_single_style" style="background-image: url(http://sc1.hao123img.com/urlicon/8.411.png);"
                  href="https://s.click.taobao.com">聚划算</a>
              </li>
              <li :class="li_style">
                <a :class="li_a_single_style"
                  style="background: url(http://s0.hao123img.com/res/img/defaultIcon1229.png) 2px -78px no-repeat;"
                  href="http://qzone.qq.com">QQ空间</a>
              </li>
              <li :class="li_style">
                <a :class="li_a_single_style" style="background-image: url(http://sc2.hao123img.com/urlicon/7617.png);"
                  href="https://www.apple.com/cn/">苹果官网</a>
              </li>
              <li :class="li_style">
                <a :class="li_a_single_style" style="background-image: url(http://sc2.hao123img.com/urlicon/7591.png);"
                  href="https://www.alipay.com">支付宝</a>
              </li>
              <li :class="li_style">
                <a :class="li_a_single_style"
                  style="background-image: url(http://sc1.hao123img.com/urlicon/12.359.png);"
                  href="http://guba.eastmoney.com">股吧</a>
              </li>
              <li :class="li_style">
                <a :class="li_a_single_style" style="background-image: url(http://sc2.hao123img.com/urlicon/115.png);"
                  href="http://www.1688.com">阿里巴巴</a>
              </li>
              <li class="js_site-item site-item site-item-last">
                <a :class="li_a_single_style"
                  style="background-image: url(http://sc1.hao123img.com/urlicon/4.4207.png);"
                  href="http://www.mi.com">小米官网</a>
              </li>
              <li :class="li_style">
                <a :class="li_a_single_style" style="background-image: url(http://sc1.hao123img.com/urlicon/1564.png);"
                  href="http://www.meituan.com">美 团 网</a>
              </li>
              <li :class="li_style">
                <a :class="li_a_single_style" style="background-image: url(http://sc2.hao123img.com/urlicon/8883.png);"
                  href="http://www.ithome.com">IT之家</a>
              </li>
              <li :class="li_style">
                <a :class="li_a_single_style" style="background-image: url(http://sc1.hao123img.com/urlicon/2.png);"
                  href="http://www.10086.cn">中国移动</a>
              </li>
              <li :class="li_style">
                <a :class="li_a_single_style" style="background-image: url(http://sc1.hao123img.com/urlicon/4.720.png);"
                  href="http://yun.baidu.com">百度网盘</a>
              </li>
              <li :class="li_style">
                <a :class="li_a_single_style"
                  style="background-image: url(http://sc2.hao123img.com/urlicon/1419388771.png);"
                  href="http://life.hao123.com/kuaidi">快递查询</a>
              </li>
              <li class="js_site-item site-item site-item-last">
                <a :class="li_a_single_style" style="background-image: url(http://sc1.hao123img.com/urlicon/9372.png);"
                  href="http://www.mydrivers.com">快 科 技</a>
              </li>
              <li :class="li_style" data-status="2">
                <a :class="li_a_single_style"
                  style="background-image: url(http://sc2.hao123img.com/urlicon/3.311fcd103b8aeb5b619f86a171dd29c1.png);"
                  href="http://www.douyutv.com">斗鱼TV</a>
              </li>
              <li :class="li_style" data-status="2">
                <a :class="li_a_single_style"
                  style="background-image: url(http://sc1.hao123img.com/urlicon/2.2d83b0c321aaaff89dfe5c47a79bd01e.png);"
                  href="http://www.lianjia.com">链 家 网</a>
              </li>
              <li :class="li_style">
                <a :class="li_a_single_style" style="background-image: url(http://sc2.hao123img.com/urlicon/7151.png);"
                  href="http://www.10010.com">中国联通</a>
              </li>
              <li :class="li_style">
                <a :class="li_a_single_style" style="background-image: url(http://sc1.hao123img.com/urlicon/10668.png);"
                  href="http://www.zhaopin.com">智联招聘</a>
              </li>
              <li :class="li_style">
                <a :class="li_a_single_style"
                  style="background-image: url(http://sc1.hao123img.com/urlicon/12.362.png);"
                  href="http://fanyi.baidu.com">百度翻译</a>
              </li>
              <li class="js_site-item site-item site-item-last">
                <a :class="li_a_single_style" style="background-image: url(http://sc1.hao123img.com/urlicon/10672.png);"
                  href="http://www.zhcw.com">中 彩 网</a>
              </li>
              <li :class="li_style">
                <a :class="li_a_single_style" style="background-image: url(http://sc2.hao123img.com/urlicon/7663.png);"
                  href="http://www.baixing.com">百 姓 网</a>
              </li>

              <li :class="li_style">
                <a :class="li_a_single_style" style="background-image: url(http://sc2.hao123img.com/urlicon/2557.png);"
                  href="http://map.baidu.com">百度地图</a>
              </li>
              <li :class="li_style">
                <a :class="li_a_single_style"
                  style="background: url(http://s0.hao123img.com/res/img/defaultIcon1229.png) 2px -398px no-repeat;"
                  href="http://www.youku.com">优 酷 网</a>
              </li>

              <li :class="li_style">
                <a :class="li_a_single_style" style="background-image: url(http://sc2.hao123img.com/urlicon/10189.png);"
                  href="http://www.tudou.com">土 豆 网</a>
              </li>
              <li :class="li_style">
                <a :class="li_a_single_style" style="background-image: url(http://sc1.hao123img.com/urlicon/6.316.png);"
                  href="http://tv.sohu.com">搜狐视频</a>
              </li>
              <li class="js_site-item site-item site-item-last">
                <a :class="li_a_single_style" style="background-image: url(http://sc1.hao123img.com/urlicon/9666.png);"
                  href="http://www.qiushibaike.com">糗事百科</a>
              </li>
              <li :class="li_style">
                <a :class="li_a_single_style" style="background-image: url(http://sc2.hao123img.com/urlicon/3.355.png);"
                  href="http://donghua.dmzj.com">动漫之家</a>
              </li>
              <li :class="li_style">
                <a :class="li_a_single_style"
                  style="background-image: url(http://sc1.hao123img.com/urlicon/14.341.png);"
                  href="http://v.qq.com">腾讯视频</a>
              </li>
              <li :class="li_style">
                <a :class="li_a_single_style" style="background-image: url(http://sc1.hao123img.com/urlicon/80454.png);"
                  href="http://baozoumanhua.com">暴走漫画</a>
              </li>
              <li :class="li_style" data-status="2">
                <a :class="li_a_single_style"
                  style="background-image: url(http://sc2.hao123img.com/urlicon/1.1f32806366c6520864b669e487ec2ab8.png);"
                  href="http://www.hao123.com/manhua">漫画大全</a>
              </li>

              <li :class="li_style">
                <a :class="li_a_single_style" style="background-image: url(http://sc2.hao123img.com/urlicon/9359.png);"
                  href="http://www.mtime.com">Mtime时光网</a>
              </li>

              <li class="js_site-item site-item site-item-last">
                <a :class="li_a_single_style" style="background-image: url(http://sc2.hao123img.com/urlicon/1821.png);"
                  href="http://www.iqiyi.com">爱奇艺</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
    <div class="layout-adbar" id="layout-hlbar">
      <div id="box-inner-adbar">
        <div class="widget-hlbar" id="hlbar" monkey="adbar" alog-alias="widget-adbar">
          <span data-hook="hlbarSpan"><a class="hlbar-link g-fc24" href="https://s.click.taobao.com">聚划算</a></span><span
            data-hook="hlbarSpan"><a class="hlbar-link g-fc24" data-cpc="link"
              href="https://www.baidu.com/s?wd=斗地主达人">斗地主达人</a></span><span data-hook="hlbarSpan"><a
              class="hlbar-link g-fc24" data-cpc="link" href="https://www.baidu.com/s?wd=15w买好车">15w买好车</a></span><span
            data-hook="hlbarSpan"><a class="hlbar-link g-fc24" data-cpc="link"
              href="https://www.baidu.com/s?wd=快速借款">快速借款</a></span><span data-hook="hlbarSpan"><a
              class="hlbar-link g-fc24" data-cpc="link" href="https://www.baidu.com/s?wd=装修攻略">装修攻略</a></span><span
            data-hook="hlbarSpan"><a class="hlbar-link g-fc24" data-cpc="link"
              href="https://www.baidu.com/s?wd=新房装修">新房装修</a></span><span data-hook="hlbarSpan"><a
              class="hlbar-link g-fc24" data-cpc="link" href="https://www.baidu.com/s?wd=优质月嫂">优质月嫂</a></span><span
            data-hook="hlbarSpan"><a class="hlbar-link g-fc24" data-cpc="link"
              href="https://www.baidu.com/s?wd=家装设计">家装设计</a></span><span data-hook="hlbarSpan"><a
              class="hlbar-link g-fc24" data-cpc="link" href="https://www.baidu.com/s?wd=母婴用品">母婴用品</a></span><span
            data-hook="hlbarSpan"><a class="hlbar-link g-fc24" data-cpc="link"
              href="https://www.baidu.com/s?wd=成人自考">成人自考</a></span>
        </div>
      </div>
    </div>
    <div id="guesslikesite-block" class="layout-guess-bottom g-br3 g-bg11">
      <div monkey="guesslikelink" id="guesslikesite">
        <div class="bottom-main">
          <div class="guesslike-industry js_guesslike-industry guesslike-LightOn" data-type="2" monkey="youxi">
            <i class="red-icon red-icon-on"></i><a href="https://game.hao123.com/"
              class="guesslike-industry-title g-ib s-fc20 s-fc20h 1">游戏</a>
            <div class="guesslike-row g-ib show">
              <span class="guesslike-col g-ib"><a class="guesslike-link js-changeLink g-ib"
                  href="https://www.baidu.com/s?word=魔域永恒">魔域永恒</a></span>
              <span class="guesslike-col g-ib"><a class="guesslike-link js-changeLink g-ib" data-cpc="link"
                  href="https://www.baidu.com/s?word=屠龙荣耀">屠龙荣耀</a></span>
              <span class="guesslike-col g-ib"><a class="guesslike-link js-changeLink g-ib"
                  href="https://www.baidu.com/s?word=西游零纪元">西游零纪元</a></span>
              <span class="guesslike-col g-ib"><a class="guesslike-link js-changeLink g-ib"
                  href="https://www.baidu.com/s?word=蓝月传奇">蓝月传奇</a></span>
              <span class="guesslike-col g-ib"><a class="guesslike-link js-changeLink g-ib"
                  href="https://www.baidu.com/s?word=游戏大全">游戏大全</a></span>
              <span class="guesslike-col g-ib"><a class="guesslike-link js-changeLink g-ib"
                  href="https://www.baidu.com/s?word=乾坤战纪">乾坤战纪</a></span>
              <span class="guesslike-col g-ib guesslike-col-last"><a class="guesslike-link js-changeLink g-ib"
                  href="https://www.baidu.com/s?word=魔兽世界">魔兽世界</a></span>
              <span class="guesslike-col g-ib guesslike-col-last"><a class="guesslike-link js-changeLink g-ib"
                  href="https://www.baidu.com/s?word=屠龙攻沙">屠龙攻沙</a></span>
            </div>
          </div>
          <div class="guesslike-industry js_guesslike-industry guesslike-LightOff">
            <i class="red-icon red-icon-on"></i><a href="https://s.click.taobao.com/qvi0lew"
              class="guesslike-industry-title g-ib s-fc20 s-fc20h">新热</a>
            <div class="guesslike-row g-ib show">
              <span class="guesslike-col g-ib"><a class="guesslike-link js-changeLink g-ib"
                  href="https://www.baidu.com/s?word=早教加盟">早教加盟</a></span><span class="guesslike-col g-ib"><a
                  class="guesslike-link js-changeLink g-ib"
                  href="https://www.baidu.com/s?word=7座家用车">7座家用车</a></span><span class="guesslike-col g-ib"><a
                  class="guesslike-link js-changeLink g-ib g_red"
                  href="https://www.baidu.com/s?word=家用轿车">家用轿车</a></span><span class="guesslike-col g-ib"><a
                  class="guesslike-link js-changeLink g-ib"
                  href="https://www.baidu.com/s?word=国产suv">国产suv</a></span><span class="guesslike-col g-ib"><a
                  class="guesslike-link js-changeLink g-ib"
                  href="https://www.baidu.com/s?word=美女秀场">美女秀场</a></span><span class="guesslike-col g-ib"><a
                  class="guesslike-link js-changeLink g-ib"
                  href="https://s.click.taobao.com/t?e=m%3D2%26s%3D7WCg0%2BpzKwgcQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMa2XsNgKZ%2BOxt4hWD5k2kjP%2FTrTNBNETjAtOHPHN0vssKO4N%2F%2F7xLcVZMTj583r1vqUuZxIcp9pfUIgVEmFmgnaR4ypTBJBwtC8UTyjdhQwHJPwiig1bxLMnyi1UQ%2F17I10hO9fBPG8oXH%2BQH9e66Y4%3D">爆款必抢</a></span><span
                class="guesslike-col g-ib guesslike-col-last"><a class="guesslike-link js-changeLink g-ib"
                  href="https://www.baidu.com/s?word=特价手机">特价手机</a></span><span
                class="guesslike-col g-ib guesslike-col-last"><a class="guesslike-link js-changeLink g-ib"
                  href="https://www.baidu.com/s?word=餐饮加盟">餐饮加盟</a></span>
            </div>
          </div>
          <div class="guesslike-industry js_guesslike-industry guesslike-LightOff">
            <i class="red-icon red-icon-on"></i><a href="http://tuijian.hao123.com/"
              class="guesslike-industry-title g-ib s-fc20 s-fc20h">推荐</a>
            <div class="guesslike-row g-ib show">
              <span class="guesslike-col g-ib"><a class="guesslike-link js-changeLink g-ib"
                  href="https://b.faloo.com/">飞卢小说</a></span><span class="guesslike-col g-ib"><a
                  class="guesslike-link js-changeLink g-ib"
                  href="https://www.baidu.com/s?word=精选二手车">精选二手车</a></span><span class="guesslike-col g-ib"><a
                  class="guesslike-link js-changeLink g-ib"
                  href="https://www.baidu.com/s?word=二手房急售">二手房急售</a></span><span class="guesslike-col g-ib"><a
                  class="guesslike-link js-changeLink g-ib"
                  href="https://www.baidu.com/s?word=特价机票">特价机票</a></span><span class="guesslike-col g-ib"><a
                  class="guesslike-link js-changeLink g-ib"
                  href="https://www.baidu.com/s?word=特色民宿">特色民宿</a></span><span class="guesslike-col g-ib"><a
                  class="guesslike-link js-changeLink g-ib" href="https://www.libaozhan.com/t/ExiO">盛世遮天</a></span><span
                class="guesslike-col g-ib guesslike-col-last"><a class="guesslike-link js-changeLink g-ib"
                  href="https://www.baidu.com/s?word=耐克折扣区">耐克折扣区</a></span><span
                class="guesslike-col g-ib guesslike-col-last"><a class="guesslike-link js-changeLink g-ib"
                  href="https://www.baidu.com/s?word=征婚网">征婚网</a></span>
            </div>
          </div>
          <div class="guesslike-industry js_guesslike-industry guesslike-LightOff">
            <i class="red-icon red-icon-on"></i><a href="https://s.click.taobao.com/MgOXj9w"
              class="guesslike-industry-title g-ib s-fc20 s-fc20h">优选</a>
            <div class="guesslike-row g-ib show">
              <span class="guesslike-col g-ib"><a class="guesslike-link js-changeLink g-ib"
                  href="https://www.baidu.com/s?word=名企招聘">名企招聘</a></span><span class="guesslike-col g-ib"><a
                  class="guesslike-link js-changeLink g-ib"
                  href="https://www.baidu.com/s?word=自考本科">自考本科</a></span><span class="guesslike-col g-ib"><a
                  class="guesslike-link js-changeLink g-ib g_red"
                  href="https://jump.sp.anjuke.com/shou/?pi=navi-hao123-cnxh-rmsp">热门商铺</a></span><span
                class="guesslike-col g-ib"><a class="guesslike-link js-changeLink g-ib"
                  href="https://www.baidu.com/s?word=">小语种学习</a></span><span class="guesslike-col g-ib"><a
                  class="guesslike-link js-changeLink g-ib"
                  href="https://www.baidu.com/s?word=雅思口语">雅思口语</a></span><span class="guesslike-col g-ib"><a
                  class="guesslike-link js-changeLink g-ib"
                  href="https://www.baidu.com/s?word=成人高考">成人高考</a></span><span
                class="guesslike-col g-ib guesslike-col-last"><a class="guesslike-link js-changeLink g-ib"
                  href="https://www.baidu.com/s?word=二手房装修">二手房装修</a></span><span
                class="guesslike-col g-ib guesslike-col-last"><a class="guesslike-link js-changeLink g-ib"
                  href="https://www.baidu.com/s?word=">家政保洁</a></span>
            </div>
          </div>
          <div class="guesslike-industry js_guesslike-industry guesslike-LightOff" data-type="6" monkey="health">
            <i class="red-icon red-icon-on"></i><a href="http://life.hao123.com/health"
              class="guesslike-industry-title g-ib s-fc20 s-fc20h">生活</a>
            <div class="guesslike-row g-ib show" data-type="6">
              <span class="guesslike-col g-ib"><a class="guesslike-link js-changeLink g-ib"
                  href="https://www.baidu.com/s?word=">牙齿正畸</a></span><span class="guesslike-col g-ib"><a
                  class="guesslike-link js-changeLink g-ib" href="https://www.baidu.com/s?word=">牙齿美白</a></span><span
                class="guesslike-col g-ib"><a class="guesslike-link js-changeLink g-ib"
                  href="https://www.baidu.com/s?word=">近视眼矫正</a></span><span class="guesslike-col g-ib"><a
                  class="guesslike-link js-changeLink g-ib" href="https://www.baidu.com/s?word=">近视眼治疗</a></span><span
                class="guesslike-col g-ib"><a class="guesslike-link js-changeLink g-ib g_red"
                  href="https://www.baidu.com/s?word=">吸脂塑身</a></span><span class="guesslike-col g-ib"><a
                  class="guesslike-link js-changeLink g-ib" href="https://www.baidu.com/s?word=">祛痘美肤</a></span><span
                class="guesslike-col g-ib guesslike-col-last"><a class="guesslike-link js-changeLink g-ib"
                  href="https://www.baidu.com/s?word=">产后瘦肚子</a></span><span
                class="guesslike-col g-ib guesslike-col-last"><a class="guesslike-link js-changeLink g-ib"
                  href="https://www.baidu.com/s?word=">月经不调</a></span>
            </div>
          </div>
        </div>
        <div class="adicon">广告</div>
      </div>
    </div>
    <div class="g-br3 g-bg11 layout-coolsite" id="__elm_0_9">
      <div class="layout-inner">
        <div id="box-navigate">
          <div id="navigate" class="navigate">
            <ul class="g_clr">
              <Link type="channel" href="http://v.hao123.com/dianshi">电视剧</Link>
              <Link type="channel" href="http://v.hao123.com/dianying">电影</Link>
              <Link type="channel" href="http://tuijian.hao123.com">新闻</Link>
              <Link type="channel" href="http://www.hao123.com/yule">娱乐</Link>
              <Link type="channel" href="http://tuijian.hao123.com/?type=military">军事</Link>
              <Link type="channel" href="http://xyx.hao123.com">小游戏</Link>
              <Link type="channel" href="http://tejia.hao123.com/?tn=xqdh">特价</Link>
              <Link type="channel" href="http://gouwu.hao123.com/?tn=kuzhan">购物</Link>
              <Link type="channel" href="http://www.hao123.com/zt/xzmzyd">综艺</Link>
              <Link type="channel" href="http://soft.hao123.com/?=shouye">软件</Link>
              <Link type="channel" href="http://www.hao123.com/xuexi">学习</Link>
              <Link type="channel" href="http://www.hao123.com/licai">理财</Link>
            </ul>
          </div>
          <div id="box-coolsite">
            <div class="g_clr hao123-coolsite" monkey="kuzhan" alog-alias="kuzhan">
              <div class="coolsite-groups">
                <div id="coolsite-tuijian">
                  <div class="coolsite-group" id="">
                    <div class="g_clr coolsite-category">
                      <h4 class="coolsite-name-wrap">
                        <a :class="coolsite_tit" href="http://tuijian.hao123.com/">推 荐</a>
                      </h4>
                      <span class="coolsite-more-wrap"><a :class="coolsite_more"
                          href="http://tuijian.hao123.com/">更多&gt;&gt;</a>
                      </span>
                      <Link href="http://www.hao123.com/licaishuju">教你理财</Link>
                      <Link href="http://www.hao123.com/love">同城交友</Link>
                      <Link href="http://www.fang.com">热门房源</Link>
                      <Link href="https://wenku.baidu.com/?fr=hao123">百度文库</Link>
                      <Link href="http://waimai.baidu.com/">美食外卖</Link>
                      <Link href="http://www.51job.com/">找工作</Link>
                      <Link href="http://www.hao123.com/haoda">答题送礼</Link>
                    </div>
                  </div>
                </div>
                <div id="coolsite-top">
                  <div class="coolsite-group" id="coolsite-group0">
                    <div class="g_clr coolsite-category">
                      <h4 class="coolsite-name-wrap">
                        <a :class="coolsite_tit" href="http://v.hao123.baidu.com">视 频</a>
                      </h4>
                      <span class="coolsite-more-wrap">
                        <a :class="coolsite_more" href="http://v.hao123.baidu.com">更多&gt;&gt;</a>
                      </span>
                      <Link href="http://www.iqiyi.com/">爱奇艺高清</Link>
                      <Link href="http://www.youku.com/">优酷网</Link>
                      <Link href="http://v.baidu.com/">百度视频</Link>
                      <Link href="http://v.qq.com/">腾讯视频</Link>
                      <Link href="http://www.mgtv.com/">芒果TV</Link>
                      <Link href="http://tv.sohu.com/">搜狐视频</Link>
                      <Link href="http://www.hao123.com/video/wangju">网络自制</Link>
                    </div>
                    <div class="g_clr coolsite-category">
                      <h4 class="coolsite-name-wrap">
                        <a :class="coolsite_tit" href="http://v.hao123.baidu.com/">影 视</a>
                        <a class="pic_icon" href="http://v.hao123.baidu.com/dianying/">
                          <img
                            src="https://gss0.bdstatic.com/5bVWsj_p_tVS5dKfpU_Y_D3/res/r/image/2019-05-06/019e97d544966b5a2183b9689ac7d0a1.png" />
                        </a>
                      </h4>
                      <span class="coolsite-more-wrap"><a :class="coolsite_more"
                          href="http://v.hao123.baidu.com/">更多&gt;&gt;</a></span>
                      <Link href="http://video.hao123.baidu.com/dianshi">电视剧</Link>
                      <span>
                        <a class="sitelink mainlink em" href="http://v.hao123.baidu.com/dianying/">电影</a>•
                        <a class="sitelink sublink"
                          href="http://life.hao123.com/?tn=kuzhan_movie&amp;searchTab=dianying">购票</a>
                      </span>
                      <Link href="http://v.hao123.baidu.com/dongman/">动漫</Link>
                      <Link href="http://v.hao123.baidu.com/zongyi/">综艺</Link>
                      <Link href="http://live.hao123.com/">电视直播</Link>
                      <Link href="http://v.hao123.baidu.com/dianying_index/order-hot_pn-1_channel-movie">2017热映大片</Link>
                      <Link href="http://www.hao123.com/video/zixun">热点资讯</Link>
                    </div>
                    <div class="g_clr coolsite-category">
                      <h4 class="coolsite-name-wrap">
                        <a :class="coolsite_tit" href="http://game.hao123.com/">游 戏</a>
                      </h4>
                      <span class="coolsite-more-wrap">
                        <a :class="coolsite_more" href="http://game.hao123.com/">更多&gt;&gt;</a>
                      </span>
                      <Link href="http://www.4399.com/">4399游戏</Link>
                      <Link href="http://www.7k7k.com">7k7k游戏</Link>
                      <Link href="http://www.17173.com/">17173</Link>
                      <Link href="http://www.37.com/">37游戏</Link>
                      <Link href="http://video.hao123.baidu.com/Game_Live/list?gname=yxlm">LOL直播</Link>
                      <span>
                        <a class="sitelink mainlink" href="https://game.hao123.com/">hao123游戏</a>•
                        <a class="sitelink sublink" href="http://xyx.hao123.com/">小游戏</a>
                      </span>
                    </div>
                    <div class="g_clr coolsite-category">
                      <h4 class="coolsite-name-wrap">
                        <a :class="coolsite_tit" href="http://tuijian.hao123.com">新 闻</a>
                      </h4>
                      <span class="coolsite-more-wrap"><a :class="coolsite_more"
                          href="http://tuijian.hao123.com">更多&gt;&gt;</a></span>
                      <Link href="http://news.sina.com.cn/">新浪新闻</Link>
                      <Link href="http://mini.qq.com/">腾讯新闻</Link>
                      <Link href="http://mini.eastday.com/">东方头条</Link>
                      <Link href="http://news.baidu.com/">百度新闻</Link>
                      <Link href="http://news.sohu.com/">搜狐新闻</Link>
                      <Link href="http://news.163.com/">网易新闻</Link>
                      <Link href="http://www.huanqiu.com/">环球网</Link>
                    </div>
                    <div class="g_clr coolsite-category">
                      <h4 class="coolsite-name-wrap">
                        <a :class="coolsite_tit" href="http://tuijian.hao123.com/?type=military">军
                          事</a>
                      </h4>
                      <span class="coolsite-more-wrap"><a :class="coolsite_more"
                          href="http://tuijian.hao123.com/?type=military">更多&gt;&gt;</a>
                      </span>
                      <Link href="http://military.china.com/zh_cn/">中华军事</Link>
                      <Link href="http://www.miercn.com/">米尔军事</Link>
                      <Link href="http://www.tiexue.net/">铁血军事</Link>
                      <Link href="http://mil.huanqiu.com/">环球军事</Link>
                      <Link href="http://news.ifeng.com/mil/">凤凰军事</Link>
                      <Link href="http://mil.news.sina.com.cn/">新浪军事</Link>
                      <Link href="https://lt.cjdby.net/">超级大本营</Link>
                    </div>
                  </div>
                </div>
                <!--  -->
                <div id="coolsite-bottom" class="" style="" data-rm="default">
                  <!-- 分组一 -->
                  <div class="coolsite-group" id="coolsite-group1">
                    <div class="g-bg1 coolsite-bar" monkey="erji">
                      <Link type="bar" href="http://tejia.hao123.com/?tn=kztj">特价</Link>
                      <Link type="bar"
                        href="http://www.nuomi.com/?utm_source=hao123&amp;utm_medium=channel_midright&amp;cid=001606">团购
                      </Link>
                      <Link type="bar" href="http://www.hao123.com/sports">体育</Link>
                      <Link type="bar" href="http://live.hao123.com/">直播</Link>
                      <Link type="bar" href="http://www.hao123.com/nba">NBA</Link>
                      <Link type="bar" href="http://news.hao123.com/soccer">足球</Link>
                      <Link type="bar" href="http://go.hao123.com/?tn=kuzhandh">旅游</Link>
                      <Link type="bar" href="http://go.hao123.com/flight?tn=kuzhandh">机票</Link>
                      <Link type="bar" href="http://go.hao123.com/ticket?tn=kuzhandh">门票</Link>
                      <Link type="bar" href="http://game.hao123.com/">游戏</Link>
                      <Link type="bar" href="http://book.hao123.com">小说</Link>
                      <Link type="bar" href="http://shouji.hao123.com/?tn=zjl">手机</Link>
                    </div>
                    <!-- 一行链接 -->
                    <div class="g_clr coolsite-category">
                      <h4 class="coolsite-name-wrap">
                        <a :class="coolsite_tit" href="http://www.hao123.com/sports">体 育</a>
                      </h4>
                      <span class="coolsite-more-wrap"><a :class="coolsite_more"
                          href="http://www.hao123.com/sports">更多&gt;&gt;
                        </a>
                      </span>

                      <Link href="http://www.hao123.com/nba">NBA</Link>
                      <Link href="http://sports.sohu.com/">搜狐体育</Link>
                      <Link href="http://sports.cntv.cn/">CCTV5</Link>
                      <Link href="https://www.hupu.com/">虎扑体育</Link>
                      <Link href="http://www.dongqiudi.com/">懂球帝</Link>
                      <Link href="http://www.zhibo8.cc/">直播吧</Link>
                      <Link href="http://sports.163.com/">网易体育</Link>
                      <Link href="http://sports.qq.com/">腾讯体育</Link>
                    </div>
                    <!-- 一行链接 -->
                    <div class="g_clr coolsite-category">
                      <h4 class="coolsite-name-wrap">
                        <a :class="coolsite_tit" href="http://tejia.hao123.com/?tn=kz">购 物</a>
                      </h4>
                      <span class="coolsite-more-wrap"><a :class="coolsite_more"
                          href="http://tejia.hao123.com/?tn=kz">更多&gt;&gt;</a>
                      </span>

                      <Link href="https://www.taobao.com/">淘宝网</Link>
                      <Link href="https://www.suning.com/?utm_source=hao123&amp;utm_medium=kuzhan">苏宁易购</Link>
                      <Link href="http://tejia.hao123.com/?tn=kzrk">今日特价</Link>
                      <Link href="https://s.click.taobao.com/"> 聚划算</Link>
                      <Link href="http://you.163.com/">网易严选</Link>
                      <Link href="https://2.taobao.com/">闲鱼二手交易</Link>
                    </div>
                    <!-- 一行链接 -->
                    <div class="g_clr coolsite-category">
                      <h4 class="coolsite-name-wrap">
                        <a :class="coolsite_tit" href="http://gouwu.hao123.com/?tn=kuzhan2">商 城</a>
                      </h4>
                      <span class="coolsite-more-wrap"><a :class="coolsite_more"
                          href="http://gouwu.hao123.com/?tn=kuzhan2">更多&gt;&gt;</a>
                      </span>
                      <Link href="https://s.click.taobao.com/GSNeuAx">天猫精选</Link>
                      <Link href="https://www.amazon.cn">亚马逊</Link>
                      <Link href="http://www.dangdang.com/">当当网</Link>
                      <Link href="http://www.yhd.com">1号店</Link>
                      <Link href="http://www.jumei.com/">聚美优品</Link>
                      <Link href="http://www.xiaohongshu.com/">小红书</Link>
                      <Link href="http://www.mogujie.com/">蘑菇街</Link>
                    </div>
                    <!-- 一行链接 -->
                    <div class="g_clr coolsite-category">
                      <h4 class="coolsite-name-wrap">
                        <a :class="coolsite_tit" href="http://go.hao123.com/?tn=kuzhan1">旅 游</a>
                      </h4>
                      <span class="coolsite-more-wrap">
                        <a :class="coolsite_more" href="http://go.hao123.com/?tn=kuzhan1">更多&gt;&gt;</a>
                      </span>
                      <Link href="http://www.ctrip.com/">携程网</Link>
                      <Link href="https://www.qunar.com/?ex_track=auto_58c1128c">去哪儿</Link>
                      <Link href="https://www.booking.com/index.zh-cn.html?aid=1310341">Booking酒店预订</Link>
                      <Link href="http://www.qyer.com/">穷游网</Link>
                      <Link href="http://go.hao123.com/flight?tn=kuzhan1">机票</Link>•
                      <Link href="http://go.hao123.com/hotel?tn=kuzhan1">酒店</Link>•
                      <Link href="http://go.hao123.com/train?tn=kuzhan1">火车票</Link>
                      <Link href="http://www.mafengwo.cn/">蚂蜂窝</Link>
                    </div>
                    <!-- 一行链接 -->
                    <div class="g_clr coolsite-category">
                      <h4 class="coolsite-name-wrap">
                        <a :class="coolsite_tit" href="http://book.hao123.com">小 说</a>
                      </h4>
                      <span class="coolsite-more-wrap">
                        <a :class="coolsite_more" href="http://book.hao123.com">更多&gt;&gt;</a>
                      </span>
                      <Link href="http://www.qidian.com/">起点中文网</Link>
                      <Link href="http://www.xxsy.net/">潇湘书院</Link>
                      <Link href="http://book.hao123.com/rank.html">小说排行</Link>
                      <Link href="http://book.hao123.com/store/c0/w0/s0/p1/all.html">热门小说</Link>
                      <Link href="http://www.readnovel.com/">小说阅读网</Link>
                      <Link href="https://www.xs8.cn/">言情小说吧</Link>
                      <Link href="https://www.hongxiu.com/">红袖添香</Link>
                    </div>
                    <!-- 一行链接 -->
                    <div class="g_clr coolsite-category">
                      <h4 class="coolsite-name-wrap">
                        <a :class="coolsite_tit" href="http://shouji.hao123.com/?tn=kuzhan1">手 机</a>
                      </h4>
                      <span class="coolsite-more-wrap"><a :class="coolsite_more"
                          href="http://shouji.hao123.com/?tn=kuzhan1">更多&gt;&gt;</a>
                      </span>
                      <Link href="http://www.10086.cn/">移动</Link>•
                      <Link href="http://www.10010.com/">联通</Link>•
                      <Link href="https://www.189.cn/">电信</Link>
                      <Link href="http://www.zol.com.cn/">中关村在线</Link>
                      <Link href="http://mobile.pconline.com.cn/">太平洋手机</Link>
                      <Link href="http://www.ithome.com/">IT之家</Link>
                      <Link href="http://www.zealer.com/">zealer测评</Link>
                      <Link href="http://www.mi.com/">小米官网</Link>
                      <Link href="http://www.18183.com/">18183</Link>
                    </div>
                  </div>
                  <!-- 分组二 -->
                  <div class="coolsite-group" id="coolsite-group2">
                    <div class="g-bg1 coolsite-bar" monkey="erji">
                      <Link type="bar" href="http://www.hao123.com/auto">汽车</Link>
                      <Link type="bar" href="http://life.hao123.com/jiaotong/?tn=kuzhan_site">交通违章</Link>
                      <Link type="bar" href="http://life.hao123.com/kuaidi">快递</Link>
                      <Link type="bar" href="http://www.hao123.com/fangchan">房产</Link>
                      <Link type="bar" href="http://www.hao123.com/bank">银行</Link>
                      <Link type="bar" href="http://www.hao123.com/zhaopin">招聘</Link>
                      <Link type="bar" href="http://soft.hao123.com/">软件</Link>
                      <Link type="bar" href="http://www.hao123.com/hardware">数码</Link>
                      <Link type="bar" href="http://www.hao123.com/vr">VR科技</Link>
                      <Link type="bar" href="http://www.hao123.com/shequ">社区</Link>
                      <Link type="bar" href="http://www.hao123.com/love">交友</Link>
                      <Link type="bar" href="http://www.hao123.com/qq">QQ</Link>
                    </div>
                    <div class="g_clr coolsite-category">
                      <h4 class="coolsite-name-wrap">
                        <a :class="coolsite_tit" href="http://www.hao123.com/shequ">社 交</a>
                      </h4>
                      <span class="coolsite-more-wrap"><a :class="coolsite_more"
                          href="http://www.hao123.com/shequ">更多&gt;&gt;</a>
                      </span>
                      <Link href="http://tieba.baidu.com/">百度贴吧</Link>
                      <Link href="http://www.jiayuan.com/">世纪佳缘</Link>
                      <Link href="http://www.zhenai.com/">珍爱网</Link>
                      <Link href="http://www.baihe.com/">百合网</Link>
                      <Link href="http://www.mop.com/">猫扑社区</Link>
                      <Link href="http://qzone.qq.com/">QQ空间</Link>
                      <Link href="http://v.hao123.com/zongyi/290.htm">非诚勿扰</Link>
                    </div>
                    <div class="g_clr coolsite-category">
                      <h4 class="coolsite-name-wrap">
                        <a :class="coolsite_tit" href="http://www.hao123.com/video/live">直 播</a>
                      </h4>
                      <span class="coolsite-more-wrap"><a :class="coolsite_more"
                          href="http://www.hao123.com/video/live">更多&gt;&gt;</a>
                      </span>
                      <Link href="https://www.6.cn">六间房秀场</Link>
                      <Link href="https://www.douyu.com/">斗鱼TV</Link>
                      <Link href="http://www.hao123.com/video/live">美女秀场</Link>
                      <Link href="http://www.showself.com/">秀色直播</Link>
                      <Link href="http://www.panda.tv/">熊猫直播</Link>
                      <Link href="http://www.longzhu.com/">龙珠直播</Link>
                      <Link href="http://www.huya.com/">虎牙直播</Link>
                    </div>
                    <div class="g_clr coolsite-category">
                      <h4 class="coolsite-name-wrap">
                        <a class="coolsite-itemname s-fc20 js_hint" href="http://life.hao123.com/?tn=kuzhan">生
                          活</a>
                      </h4>
                      <span class="coolsite-more-wrap"><a :class="coolsite_more"
                          href="http://life.hao123.com/?tn=kuzhan">更多&gt;&gt;</a>
                      </span>

                      <Link href="http://www.ganji.com/">赶集网</Link>
                      <Link href="http://www.baixing.com">百姓网</Link>
                      <Link href="http://www.fang.com">房天下</Link>
                      <Link href="http://www.lianjia.com/">链家网</Link>
                      <Link href="http://www.xiaozhu.com/">小猪短租</Link>
                      <Link href="http://life.hao123.com/jiaotong/?tn=kuzhan_site">交通违章</Link>
                      <Link href="http://life.hao123.com/?tn=kuzhan_site&amp;searchTab=kuaidi">查快递</Link>
                      <Link href="https://www.damai.cn/">大麦网票务</Link>
                    </div>
                    <div class="g_clr coolsite-category">
                      <h4 class="coolsite-name-wrap">
                        <a :class="coolsite_tit" href="http://soft.hao123.com/">软 件</a>
                      </h4>
                      <span class="coolsite-more-wrap"><a :class="coolsite_more"
                          href="http://soft.hao123.com/">更多&gt;&gt;</a>
                      </span>
                      <Link href="http://soft.hao123.com/">软件中心</Link>
                      <Link href="http://www.xiazaiba.com/">下载吧</Link>
                      <Link href="http://www.cr173.com/">西西软件园</Link>
                      <Link href="http://www.onlinedown.net/">华军软件园</Link>
                      <Link href="http://zs.91.com/">91助手</Link>
                      <Link href="http://www.mydrivers.com/">快科技</Link>
                      <Link href="http://rj.baidu.com/index.html?fxq">百度软件中心</Link>
                    </div>
                    <div class="g_clr coolsite-category">
                      <h4 class="coolsite-name-wrap">
                        <a :class="coolsite_tit" href="http://www.hao123.com/zhaopin">招 聘</a>
                      </h4>
                      <span class="coolsite-more-wrap"><a :class="coolsite_more"
                          href="http://www.hao123.com/zhaopin">更多&gt;&gt;</a>
                      </span>
                      <Link href="http://www.zhaopin.com/">智联招聘</Link>
                      <Link href="http://www.51job.com/">前程无忧</Link>
                      <Link href="https://www.liepin.com/">猎聘网</Link>
                      <Link href="http://www.yingjiesheng.com/">应届生求职网</Link>
                      <Link href="http://www.chinahr.com/">中华英才网</Link>
                      <Link href="https://www.lagou.com">拉勾网</Link>
                      <Link href="https://www.dajie.com/">大街网</Link>
                    </div>
                    <div class="g_clr coolsite-category">
                      <h4 class="coolsite-name-wrap">
                        <a :class="coolsite_tit" href="http://www.hao123.com/auto">汽 车</a>
                      </h4>
                      <span class="coolsite-more-wrap"><a :class="coolsite_more"
                          href="http://www.hao123.com/auto">更多&gt;&gt;</a>
                      </span>
                      <Link href="http://www.autohome.com.cn">汽车之家</Link>
                      <Link href="http://www.pcauto.com.cn/">太平洋汽车</Link>
                      <Link href="http://www.bitauto.com/">易车网</Link>
                      <Link href="http://www.hao123.com/auto">汽车大全</Link>
                      <Link href="http://auto.sina.com.cn/">新浪汽车</Link>
                      <Link href="http://che.hao123.com/?tn=kuzhan">精选二手车</Link>
                      <Link href="http://www.jxedt.com/">驾校一点通</Link>
                    </div>
                  </div>
                  <div class="coolsite-group" id="coolsite-group3">
                    <div class="g-bg1 coolsite-bar" monkey="erji">
                      <Link type="bar" href="http://game.hao123.com/">新游</Link>
                      <Link type="bar" href="http://xyx.hao123.com/">小游戏</Link>
                      <Link type="bar" href="http://sy.hao123.com/">手游</Link>
                      <Link type="bar" href="http://music.hao123.com/">音乐</Link>
                      <Link type="bar" href="http://www.hao123.com/gaoxiao">搞笑</Link>
                      <Link type="bar" href="http://www.hao123.com/manhua">漫画</Link>
                      <Link type="bar" href="http://www.hao123.com/stocknew">股票</Link>
                      <Link type="bar" href="http://www.hao123.com/licai">理财</Link>
                      <Link type="bar" href="http://www.hao123.com/exam">考试</Link>
                      <Link type="bar" href="http://www.hao123.com/xuexi">在线学习</Link>
                      <Link type="bar" href="http://www.hao123.com/campuseng">学外语</Link>
                      <Link type="bar" href="http://www.hao123.com/edu">大学</Link>
                    </div>
                    <div class="g_clr coolsite-category">
                      <h4 class="coolsite-name-wrap">
                        <a :class="coolsite_tit" href="http://wyyx.hao123.com/">页 游</a>
                      </h4>
                      <span class="coolsite-more-wrap">
                        <a :class="coolsite_more" href="http://wyyx.hao123.com/">更多&gt;&gt;</a>
                      </span>
                      <span>
                        <a :class="single_link"
                          href="http://www.6sou.com/i37f3q/3j64gn/u8v32y72.html?uslk72k=hkse_">散人传说</a>
                      </span>
                      <Link href="http://game.hao123.com/base/detail?gid=575">神仙劫</Link>
                      <Link href="http://www.hao123.com/zt/rmsy">三生三世</Link>
                      <Link href="http://game.hao123.com/base/detail?gid=687">九天封神</Link>
                      <Link href="http://game.hao123.com/base/detail?gid=569">梁山传奇</Link>
                      <Link href="http://game.hao123.com/base/detail?gid=646">传奇世界</Link>
                      <Link href="https://game.hao123.com/base/detail?gid=743">醉玲珑</Link>
                    </div>
                    <div class="g_clr coolsite-category">
                      <h4 class="coolsite-name-wrap">
                        <a :class="coolsite_tit" href="http://game.hao123.com/wangyou">网 游</a>
                      </h4>
                      <span class="coolsite-more-wrap"><a :class="coolsite_more"
                          href="http://game.hao123.com/wangyou">更多&gt;&gt;</a>
                      </span>
                      <Link href="http://bdtg.9377d.com/sousuotg.php?id=24726">传奇单机版</Link>
                      <Link href="http://www.hao123.com/zt/wow1">魔兽世界</Link>
                      <Link href="http://www.hao123.com/zt/mhxy">梦幻西游</Link>
                      <Link href="http://www.hao123.com/zt/wuxia">天涯明月刀</Link>
                      <Link href="http://www.hao123.com/zt/lol1">英雄联盟</Link>
                      <Link href="http://www.hao123.com/zt/nizhan">逆战</Link>
                      <Link href="http://www.hao123.com/zt/OW">守望先锋</Link>
                    </div>
                    <div class="g_clr coolsite-category">
                      <h4 class="coolsite-name-wrap">
                        <a :class="coolsite_tit" href="http://v.hao123.baidu.com/dongman/">动 漫</a>
                      </h4>
                      <span class="coolsite-more-wrap"><a :class="coolsite_more"
                          href="http://v.hao123.baidu.com/dongman/">更多&gt;&gt;</a>
                      </span>
                      <Link href="http://www.hao123.com/video/shaoer">少儿动画</Link>
                      <Link href="http://moe.hao123.com/">萌主页</Link>
                      <Link href="http://www.hao123.com/manhua">漫画大全</Link>
                      <Link href="http://www.hao123.com/zhuanti/dongman">热点动漫</Link>
                      <Link href="http://www.bilibili.com/">哔哩哔哩</Link>
                      <Link href="http://www.acfun.tv/">AcFun弹幕</Link>
                      <Link href="http://baozoumanhua.com/">暴走漫画</Link>
                      <Link href="http://v.hao123.baidu.com/dongman/4601.htm?frp=browse">海贼王</Link>
                    </div>
                    <div class="g_clr coolsite-category">
                      <h4 class="coolsite-name-wrap">
                        <a :class="coolsite_tit" href="http://music.hao123.com/">音 乐</a>
                      </h4>
                      <span class="coolsite-more-wrap"><a :class="coolsite_more"
                          href="http://music.hao123.com/">更多&gt;&gt;</a>
                      </span>
                      <Link href="http://music.baidu.com/">百度音乐</Link>
                      <Link href="http://www.kugou.com/">酷狗音乐</Link>
                      <Link cls="yy,n" href="http://music.163.com/">网易云音乐</Link>
                      <Link href="http://y.qq.com">QQ音乐</Link>
                      <Link cls="yy,n" href="http://music.hao123.com/tag/经典老歌">经典老歌</Link>
                      <Link cls="yy,n" href="http://fm.baidu.com/">音乐随心听</Link>
                      <Link href="http://www.xiami.com/">虾米音乐</Link>
                    </div>
                    <div class="g_clr coolsite-category">
                      <h4 class="coolsite-name-wrap">
                        <a :class="coolsite_tit" href="http://www.hao123.com/stocknew">财 经</a>
                      </h4>
                      <span class="coolsite-more-wrap"><a :class="coolsite_more"
                          href="http://www.hao123.com/stocknew">更多&gt;&gt;</a>
                      </span>
                      <Link href="http://www.eastmoney.com/">东方财富</Link>
                      <Link href="http://finance.sina.com.cn/">新浪财经</Link>
                      <Link href="http://www.stockstar.com/">证券之星</Link>
                      <Link href="http://www.cnfol.com/">中金在线</Link>
                      <Link href="http://finance.ifeng.com/">凤凰财经</Link>
                      <Link href="http://www.jrj.com.cn/">金融界</Link>
                      <Link href="http://www.hexun.com/">和讯网</Link>
                      <Link href="http://guba.eastmoney.com/">股吧</Link>
                    </div>
                  </div>

                  <div class="coolsite-group" id="coolsite-group4">
                    <div class="g-bg1 coolsite-bar" monkey="erji">
                      <Link type="bar" href="http://caipiao.hao123.com/">彩票</Link>
                      <Link type="bar" href="https://www.baidu.com/s?word=双色球">双色球</Link>
                      <Link type="bar" href="http://tejia.hao123.com/nvzhuang?tn=kzdl">女性</Link>
                      <Link type="bar" href="http://www.hao123.com/video/live">美女秀</Link>
                      <Link type="bar" href="http://pic.hao123.com/">美图</Link>
                      <Link type="bar" href="http://tejia.hao123.com/muying?tn=kzdl">母婴</Link>
                      <Link type="bar" href="http://www.hao123.com/child">儿童</Link>
                      <Link type="bar" href="http://life.hao123.com/menu">美食</Link>
                      <Link type="bar" href="http://www.hao123.com/mail">邮箱</Link>
                      <Link type="bar" href="http://www.hao123.com/navhtm_navbj?map=1">地方</Link>
                      <Link type="bar" href="http://pic.hao123.com/desktop">壁纸</Link>
                      <Link type="bar" href="http://www.hao123.com/xingzuonew.html">星座</Link>
                    </div>

                    <div class="g_clr coolsite-category">
                      <h4 class="coolsite-name-wrap">
                        <a :class="coolsite_tit" href="http://tejia.hao123.com/nvzhuang?tn=kzdl">女 性</a>
                      </h4>
                      <span class="coolsite-more-wrap"><a :class="coolsite_more"
                          href="http://tejia.hao123.com/nvzhuang?tn=kzdl">更多&gt;&gt;</a>
                      </span>
                      <Link href="https://s.click.taobao.com/IGHeuAx">天猫女装</Link>
                      <Link href="http://www.rayli.com.cn/">瑞丽女性</Link>
                      <Link href="http://pic.hao123.com/">漂亮女人</Link>
                      <Link href="http://www.haibao.com/">海报时尚网</Link>
                      <Link href="http://ent.sina.com.cn/">娱乐八卦</Link>
                      <Link href="http://lady.163.com/">网易女人</Link>
                      <Link href="http://www.vogue.com.cn/">VOGUE时尚</Link>
                    </div>
                    <div class="g_clr coolsite-category">
                      <h4 class="coolsite-name-wrap">
                        <a :class="coolsite_tit" href="http://caipiao.hao123.com/">彩 票</a>
                      </h4>
                      <span class="coolsite-more-wrap"><a :class="coolsite_more"
                          href="http://caipiao.hao123.com/">更多&gt;&gt;</a>
                      </span>
                      <Link href="http://www.zhcw.com/">中彩网</Link>
                      <Link href="http://www.lottery.gov.cn/">中国体彩</Link>
                      <Link href="http://caipiao.hao123.com/">全国开奖</Link>
                      <Link href="http://lottery.sina.com.cn/">新浪彩票</Link>
                      <Link href="http://www.500.com/">500彩票网</Link>
                      <Link href="http://www.sporttery.cn/">竞彩网</Link>
                      <Link href="http://www.okooo.com/">澳客网</Link>
                      <Link href="http://caipiao.chinaxmt.com/">时时彩</Link>
                    </div>
                    <div class="g_clr coolsite-category">
                      <h4 class="coolsite-name-wrap">
                        <a :class="coolsite_tit" href="http://www.hao123.com/bank">银 行</a>
                      </h4>
                      <span class="coolsite-more-wrap"><a :class="coolsite_more"
                          href="http://www.hao123.com/bank">更多&gt;&gt;</a>
                      </span>
                      <Link href="http://www.icbc.com.cn/">工商银行</Link>
                      <Link href="http://www.ccb.com/">建设银行</Link>
                      <Link href="http://www.abchina.com/">农业银行</Link>
                      <Link href="http://www.boc.cn/">中国银行</Link>
                      <Link href="http://www.bankcomm.com/">交通银行</Link>
                      <Link href="http://www.cmbchina.com/">招商银行</Link>
                      <Link href="https://www.alipay.com/">支付宝</Link>
                    </div>

                    <div class="g_clr coolsite-category">
                      <h4 class="coolsite-name-wrap">
                        <a :class="coolsite_tit" href="http://www.hao123.com/mail">邮 箱</a>
                      </h4>
                      <span class="coolsite-more-wrap"><a :class="coolsite_more"
                          href="http://www.hao123.com/mail">更多&gt;&gt;</a></span>
                      <Link href="http://mail.163.com/">163邮箱</Link>
                      <Link href="http://mail.126.com/">126邮箱</Link>
                      <Link href="http://mail.aliyun.com/">阿里邮箱</Link>
                      <Link href="http://mail.sina.com.cn/">新浪邮箱</Link>
                      <Link href="http://mail.qq.com/">QQ邮箱</Link>
                      <Link href="http://mail.10086.cn">139手机邮箱</Link>
                      <Link href="https://outlook.live.com">Outlook邮箱</Link>
                    </div>

                    <div class="g_clr coolsite-category">
                      <h4 class="coolsite-name-wrap">
                        <a :class="coolsite_tit" href="http://www.hao123.com/sitemap">酷 站</a>
                      </h4>
                      <span class="coolsite-more-wrap">
                        <a :class="coolsite_more" href="http://www.hao123.com/sitemap">更多&gt;&gt;</a>
                      </span>
                      <Link href="http://www.hao123.com/zxfy">在线翻译</Link>
                      <Link href="http://www.xiachufang.com/">下厨房</Link>
                      <Link href="https://www.douban.com/">豆瓣</Link>
                      <Link href="https://www.tianyancha.com/">天眼查</Link>
                      <Link href="http://huaban.com/">养眼美图</Link>
                      <Link href="http://open.163.com/">网易公开课</Link>
                      <Link href="http://study.163.com">云课堂</Link>
                      <Link href="https://www.zhihu.com/explore">知乎</Link>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url("./feng_body.less");
</style>
