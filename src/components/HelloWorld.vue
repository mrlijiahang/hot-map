<template>
  <div class="index">
    <div class="map flex-1" ref="map" style="width:100%;height:100%"></div>
  </div>
</template>
<script>
import inMap from "inmap";
import data from "./data";
// import {MP} from './map.js'
export default {
  methods: {

  },
  mounted() {
    console.log(this.http)
    this.http.post('/',{},res=>{
      console.log(res)
    })
    // 基本属性设置
    var inmap = new inMap.Map({
      id: this.$refs.map,
      skin: "Blueness",
      center: [105.403119, 38.028658],
      zoom: {
        value: 5,
        show: true,
        max: 18,
        min: 5
      }
    });
    //随机设置半径
    data.forEach(element => {
      element["style"] = {
        size: Math.random() * 20
      };
    });

    var overlay = new inMap.HeatOverlay({
      gradient: {
        0.25: "rgb(0,0,255)",
        0.55: "rgb(0,255,0)",
        0.85: "rgb(255,255,0)",
        1.0: "rgb(255,0,0)"
      },
      radius: 15,
      minValue:0,
      maxValue:0,
      minOpacity:0,
      maxOpacity:0.8,
      minScope:0,
      maxScope:1,
      // fps:60,
      // color:"rgba(45, 140, 240, .5)",
      // size:100,
      // speed:3,
      // style: {
      //   normal: {
      //     backgroundColor: "rgba(45, 140, 240, .5)",
      //     borderWidth: 1,
      //     borderColor: "rgba(0,131,238, 1)",
      //     size: 10
      //   }
      // },
      data: data
    });
    inmap.add(overlay);
  }
};
</script>
<style scoped>
.index {
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  text-align: center;
}
</style>

