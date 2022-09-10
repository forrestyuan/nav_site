import { defineStore } from "pinia";

export const useCommonStore = defineStore("commonStore", {
  //头部数据
  state: () => {
    return {
      // 顶部热点新闻 模块
      hotnews: [
        {
          title: "蔡崇信家族办公室几乎清仓美股",
          href: "http://www.forrestyuan.cn",
        },
        {
          title: "蔡崇信家族办公室几乎清仓美股",
          href: "http://www.forrestyuan.cn",
        },
        {
          title: "蔡崇信家族办公室几乎清仓美股",
          href: "http://www.forrestyuan.cn",
        },
        {
          title: "蔡崇信家族办公室几乎清仓美股",
          href: "http://www.forrestyuan.cn",
        },
        {
          title: "蔡崇信家族办公室几乎清仓美股",
          href: "http://www.forrestyuan.cn",
        },
        {
          title: "蔡崇信家族办公室几乎清仓美股",
          href: "http://www.forrestyuan.cn",
        },
      ],
      //------------------------------------------------------------------------------
      //左侧 （百宝箱 模块）
      baiBaoXiangData: [
        [
          {
            title: "天气",
            href: "http://tianqi.hao123.com/",
            bgImage:
              "http://s0.hao123img.com/res/r/image/2017-05-03/1c00719146ee2e4bed3bbea82c03df3f.png",
          },
          {
            title: "星座运势",
            href: "http://www.hao123.com/xingzuonew.html",
            bgImage:
              "http://s0.hao123img.com/res/r/image/2017-05-03/fd873f2ae12f0e980df4a24881bb3f26.png",
          },
          {
            title: "快递查询",
            href: "http://life.hao123.com/kuaidi",
            bgImage:
              "http://s0.hao123img.com/res/r/image/2017-05-03/38375e7df685fbb8d9dd3f539299668b.png",
          },
          {
            title: "违章查询",
            href: "http://life.hao123.com/jiaotong",
            bgImage:
              "http://s0.hao123img.com/res/r/image/2017-05-03/36b21bad4c698fa2bac67e8e34b74eba.png",
          },
          {
            title: "生活缴费",
            href: "https://jiaofei.alipay.com/jiaofei.htm",
            bgImage:
              "http://s0.hao123img.com/res/r/image/2017-05-03/5cee78a8149be7bd9dd3627af82a0882.png",
          },
          {
            title: "话费充值",
            href: "http://life.hao123.com/sales?title=%E9%A1%BA%E6%89%8B%E5%85%85",
            bgImage:
              "http://s0.hao123img.com/res/r/image/2017-05-03/156bb76701b39b11c623e8377c2d2590.png",
          },
          {
            title: "彩票开奖",
            href: "http://caipiao.hao123.com/",
            bgImage:
              "http://s0.hao123img.com/res/r/image/2017-05-03/c5a14da47f5b75ff7255186be05fdafd.png",
          },
          {
            title: "在线翻译",
            href: "http://www.hao123.com/zxfy",
            bgImage:
              "http://s0.hao123img.com/res/r/image/2017-05-03/60c4b23571610d858dde36312a127db0.png",
          },
        ],
        [
          {
            title: "订电影票",
            href: "https://www.nuomi.com/movie/?cid=hao123",
          },
          {
            title: "美食外卖",
            href: "http://life.hao123.com/?searchTab=waimai",
          },
          { title: "菜谱大全", href: "http://life.hao123.com/menu" },
          { title: "在线地图", href: "http://map.baidu.com/" },
          { title: "航班查询", href: "http://go.hao123.com/flight" },
          { title: "火车票", href: "https://go.hao123.com/train" },
          { title: "周公解梦", href: "http://www.2280.com/" },
          {
            title: "常用电话",
            href: "http://www.hao123.com/haoserver/tefudh.htm",
          },
          { title: "万年历", href: "http://www.hao123.com/rili" },
        ],
      ],
      //------------------------------------------------------------------------------
      //左侧（电影，电视，小说，游戏）
      //更新（电影，电视，小说，游戏）列表里的数据请在yuleTabData里面更新
      activeKey: "movie",
      yuleTabList: [
        { key: "movie", tab: "电影" },
        { key: "tv", tab: "电视" },
        { key: "novel", tab: "小说" },
        { key: "game", tab: "游戏" },
      ],
      yuleTabData: {
        //电影
        movie: [
          [
            {
              title: "隐入尘烟1",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "农村",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/8bb7047cc2d8597d884a2c4f32bd8da8",
            },
            {
              title: "隐入尘烟2",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "农村",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/8bb7047cc2d8597d884a2c4f32bd8da8",
            },
            {
              title: "隐入尘烟3",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "农村",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/8bb7047cc2d8597d884a2c4f32bd8da8",
            },
            {
              title: "隐入尘烟4",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "农村",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/8bb7047cc2d8597d884a2c4f32bd8da8",
            },
            {
              title: "隐入尘烟5",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "农村",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/8bb7047cc2d8597d884a2c4f32bd8da8",
            },
            {
              title: "隐入尘烟6",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "农村",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/8bb7047cc2d8597d884a2c4f32bd8da8",
            },
            {
              title: "隐入尘烟7",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "农村",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/8bb7047cc2d8597d884a2c4f32bd8da8",
            },
            {
              title: "隐入尘烟8",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "农村",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/8bb7047cc2d8597d884a2c4f32bd8da8",
            },
            {
              title: "隐入尘烟9",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "农村",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/8bb7047cc2d8597d884a2c4f32bd8da8",
            },
            {
              title: "隐入尘烟0",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "农村",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/8bb7047cc2d8597d884a2c4f32bd8da8",
            },
          ],
          [
            {
              title: "独行月球1",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "搞笑",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "独行月球2",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "搞笑",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "独行月球3",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "搞笑",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "独行月球4",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "搞笑",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "独行月球5",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "搞笑",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "独行月球6",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "搞笑",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "独行月球7",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "搞笑",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "独行月球8",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "搞笑",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "独行月球9",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "搞笑",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "独行月球0",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "搞笑",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
          ],
        ],
        //电视
        tv: [
          [
            {
              title: "苍兰诀1",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "小说改",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "苍兰诀2",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "小说改",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "苍兰诀3",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "小说改",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "苍兰诀4",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "小说改",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "苍兰诀5",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "小说改",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "苍兰诀6",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "小说改",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "苍兰诀7",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "小说改",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "苍兰诀8",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "小说改",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "苍兰诀9",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "小说改",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "苍兰诀0",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "小说改",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
          ],
          [
            {
              title: "斗罗大陆1",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "古装",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "斗罗大陆2",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "古装",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "斗罗大陆3",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "古装",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "斗罗大陆4",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "古装",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "斗罗大陆5",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "古装",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "斗罗大陆6",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "古装",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "斗罗大陆7",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "古装",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "斗罗大陆8",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "古装",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "斗罗大陆9",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "古装",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "斗罗大陆0",
              zhishu: "1722506",
              diqu: "中国大陆",
              type: "古装",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
          ],
        ],
        //小说
        novel: [
          [
            {
              title: "爱上霸道总裁1",
              zhishu: "1722506",
              zuozhe: "兰陵王",
              type: "古装",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "爱上霸道总裁2",
              zhishu: "1722506",
              zuozhe: "兰陵王",
              type: "古装",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "爱上霸道总裁3",
              zhishu: "1722506",
              zuozhe: "兰陵王",
              type: "古装",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "爱上霸道总裁4",
              zhishu: "1722506",
              zuozhe: "兰陵王",
              type: "古装",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "爱上霸道总裁5",
              zhishu: "1722506",
              zuozhe: "兰陵王",
              type: "古装",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "爱上霸道总裁6",
              zhishu: "1722506",
              zuozhe: "兰陵王",
              type: "古装",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "爱上霸道总裁7",
              zhishu: "1722506",
              zuozhe: "兰陵王",
              type: "古装",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "爱上霸道总裁8",
              zhishu: "1722506",
              zuozhe: "兰陵王",
              type: "古装",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "爱上霸道总裁9",
              zhishu: "1722506",
              zuozhe: "兰陵王",
              type: "古装",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "爱上霸道总裁0",
              zhishu: "1722506",
              zuozhe: "兰陵王",
              type: "古装",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
          ],
          [
            {
              title: "青蛙变王子1",
              zhishu: "1722506",
              zuozhe: "兰陵王",
              type: "古装",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "青蛙变王子2",
              zhishu: "1722506",
              zuozhe: "兰陵王",
              type: "古装",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "青蛙变王子3",
              zhishu: "1722506",
              zuozhe: "兰陵王",
              type: "古装",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "青蛙变王子4",
              zhishu: "1722506",
              zuozhe: "兰陵王",
              type: "古装",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "青蛙变王子5",
              zhishu: "1722506",
              zuozhe: "兰陵王",
              type: "古装",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "青蛙变王子6",
              zhishu: "1722506",
              zuozhe: "兰陵王",
              type: "古装",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "青蛙变王子7",
              zhishu: "1722506",
              zuozhe: "兰陵王",
              type: "古装",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "青蛙变王子8",
              zhishu: "1722506",
              zuozhe: "兰陵王",
              type: "古装",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "青蛙变王子9",
              zhishu: "1722506",
              zuozhe: "兰陵王",
              type: "古装",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
            {
              title: "青蛙变王子0",
              zhishu: "1722506",
              zuozhe: "兰陵王",
              type: "古装",
              image:
                "https://fyb-1.cdn.bcebos.com/fyb-1/20220909/698f1e94c34c97275792e2e264e56c57",
            },
          ],
        ],
        //游戏
        game: [
          [
            {
              title: "王者荣耀1",
              zhishu: "1722506",
              type: "联机游戏",
              image:
                "	https://fyb-1.cdn.bcebos.com/fyb-1/20220909/be4bfe5b0b216b677effc33d1fd3f1d2",
            },
            {
              title: "王者荣耀2",
              zhishu: "1722506",
              type: "联机游戏",
              image:
                "	https://fyb-1.cdn.bcebos.com/fyb-1/20220909/be4bfe5b0b216b677effc33d1fd3f1d2",
            },
            {
              title: "王者荣耀3",
              zhishu: "1722506",
              type: "联机游戏",
              image:
                "	https://fyb-1.cdn.bcebos.com/fyb-1/20220909/be4bfe5b0b216b677effc33d1fd3f1d2",
            },
            {
              title: "王者荣耀4",
              zhishu: "1722506",
              type: "联机游戏",
              image:
                "	https://fyb-1.cdn.bcebos.com/fyb-1/20220909/be4bfe5b0b216b677effc33d1fd3f1d2",
            },
            {
              title: "王者荣耀5",
              zhishu: "1722506",
              type: "联机游戏",
              image:
                "	https://fyb-1.cdn.bcebos.com/fyb-1/20220909/be4bfe5b0b216b677effc33d1fd3f1d2",
            },
            {
              title: "王者荣耀6",
              zhishu: "1722506",
              type: "联机游戏",
              image:
                "	https://fyb-1.cdn.bcebos.com/fyb-1/20220909/be4bfe5b0b216b677effc33d1fd3f1d2",
            },
            {
              title: "王者荣耀7",
              zhishu: "1722506",
              type: "联机游戏",
              image:
                "	https://fyb-1.cdn.bcebos.com/fyb-1/20220909/be4bfe5b0b216b677effc33d1fd3f1d2",
            },
            {
              title: "王者荣耀8",
              zhishu: "1722506",
              type: "联机游戏",
              image:
                "	https://fyb-1.cdn.bcebos.com/fyb-1/20220909/be4bfe5b0b216b677effc33d1fd3f1d2",
            },
            {
              title: "王者荣耀9",
              zhishu: "1722506",
              type: "联机游戏",
              image:
                "	https://fyb-1.cdn.bcebos.com/fyb-1/20220909/be4bfe5b0b216b677effc33d1fd3f1d2",
            },
            {
              title: "王者荣耀0",
              zhishu: "1722506",
              type: "联机游戏",
              image:
                "	https://fyb-1.cdn.bcebos.com/fyb-1/20220909/be4bfe5b0b216b677effc33d1fd3f1d2",
            },
          ],
          [
            {
              title: "原神1",
              zhishu: "1722506",
              type: "单机游戏",
              image:
                "	https://fyb-1.cdn.bcebos.com/fyb-1/20220909/4d0a80d59a3675130cf61eff31e3ae41",
            },
            {
              title: "原神2",
              zhishu: "1722506",
              type: "单机游戏",
              image:
                "	https://fyb-1.cdn.bcebos.com/fyb-1/20220909/4d0a80d59a3675130cf61eff31e3ae41",
            },
            {
              title: "原神3",
              zhishu: "1722506",
              type: "单机游戏",
              image:
                "	https://fyb-1.cdn.bcebos.com/fyb-1/20220909/4d0a80d59a3675130cf61eff31e3ae41",
            },
            {
              title: "原神4",
              zhishu: "1722506",
              type: "单机游戏",
              image:
                "	https://fyb-1.cdn.bcebos.com/fyb-1/20220909/4d0a80d59a3675130cf61eff31e3ae41",
            },
            {
              title: "原神5",
              zhishu: "1722506",
              type: "单机游戏",
              image:
                "	https://fyb-1.cdn.bcebos.com/fyb-1/20220909/4d0a80d59a3675130cf61eff31e3ae41",
            },
            {
              title: "原神6",
              zhishu: "1722506",
              type: "单机游戏",
              image:
                "	https://fyb-1.cdn.bcebos.com/fyb-1/20220909/4d0a80d59a3675130cf61eff31e3ae41",
            },
            {
              title: "原神7",
              zhishu: "1722506",
              type: "单机游戏",
              image:
                "	https://fyb-1.cdn.bcebos.com/fyb-1/20220909/4d0a80d59a3675130cf61eff31e3ae41",
            },
            {
              title: "原神8",
              zhishu: "1722506",
              type: "单机游戏",
              image:
                "	https://fyb-1.cdn.bcebos.com/fyb-1/20220909/4d0a80d59a3675130cf61eff31e3ae41",
            },
            {
              title: "原神9",
              zhishu: "1722506",
              type: "单机游戏",
              image:
                "	https://fyb-1.cdn.bcebos.com/fyb-1/20220909/4d0a80d59a3675130cf61eff31e3ae41",
            },
            {
              title: "原神0",
              zhishu: "1722506",
              type: "单机游戏",
              image:
                "	https://fyb-1.cdn.bcebos.com/fyb-1/20220909/4d0a80d59a3675130cf61eff31e3ae41",
            },
          ],
        ],
      },
      //------------------------------------------------------------------------------
      //左侧（热搜新闻）
      hotSearchNews: [
        [
          {
            title: "员工贷款给自己发薪？兰州公交回应",
            href: "//www.baidu.com/s?word=员工贷款给自己发薪？兰州公交回应",
          },
          {
            title: "员工贷款给自己发薪？兰州公交回应",
            href: "//www.baidu.com/s?word=员工贷款给自己发薪？兰州公交回应",
          },
          {
            title: "员工贷款给自己发薪？兰州公交回应",
            href: "//www.baidu.com/s?word=员工贷款给自己发薪？兰州公交回应",
          },
          {
            title: "员工贷款给自己发薪？兰州公交回应",
            href: "//www.baidu.com/s?word=员工贷款给自己发薪？兰州公交回应",
          },
          {
            title: "员工贷款给自己发薪？兰州公交回应",
            href: "//www.baidu.com/s?word=员工贷款给自己发薪？兰州公交回应",
          },
          {
            title: "员工贷款给自己发薪？兰州公交回应",
            href: "//www.baidu.com/s?word=员工贷款给自己发薪？兰州公交回应",
          },
          {
            title: "员工贷款给自己发薪？兰州公交回应",
            href: "//www.baidu.com/s?word=员工贷款给自己发薪？兰州公交回应",
          },
          {
            title: "员工贷款给自己发薪？兰州公交回应",
            href: "//www.baidu.com/s?word=员工贷款给自己发薪？兰州公交回应",
          },
          {
            title: "员工贷款给自己发薪？兰州公交回应",
            href: "//www.baidu.com/s?word=员工贷款给自己发薪？兰州公交回应",
          },
          {
            title: "员工贷款给自己发薪？兰州公交回应",
            href: "//www.baidu.com/s?word=员工贷款给自己发薪？兰州公交回应",
          },
        ],
        [
          {
            title: "员工贷款给自己发薪？兰州公交回应",
            href: "//www.baidu.com/s?word=员工贷款给自己发薪？兰州公交回应",
          },
          {
            title: "员工贷款给自己发薪？兰州公交回应",
            href: "//www.baidu.com/s?word=员工贷款给自己发薪？兰州公交回应",
          },
          {
            title: "员工贷款给自己发薪？兰州公交回应",
            href: "//www.baidu.com/s?word=员工贷款给自己发薪？兰州公交回应",
          },
          {
            title: "员工贷款给自己发薪？兰州公交回应",
            href: "//www.baidu.com/s?word=员工贷款给自己发薪？兰州公交回应",
          },
          {
            title: "员工贷款给自己发薪？兰州公交回应",
            href: "//www.baidu.com/s?word=员工贷款给自己发薪？兰州公交回应",
          },
          {
            title: "员工贷款给自己发薪？兰州公交回应",
            href: "//www.baidu.com/s?word=员工贷款给自己发薪？兰州公交回应",
          },
          {
            title: "员工贷款给自己发薪？兰州公交回应",
            href: "//www.baidu.com/s?word=员工贷款给自己发薪？兰州公交回应",
          },
          {
            title: "员工贷款给自己发薪？兰州公交回应",
            href: "//www.baidu.com/s?word=员工贷款给自己发薪？兰州公交回应",
          },
          {
            title: "员工贷款给自己发薪？兰州公交回应",
            href: "//www.baidu.com/s?word=员工贷款给自己发薪？兰州公交回应",
          },
          {
            title: "员工贷款给自己发薪？兰州公交回应",
            href: "//www.baidu.com/s?word=员工贷款给自己发薪？兰州公交回应",
          },
        ],
      ],
    };
  },
});
