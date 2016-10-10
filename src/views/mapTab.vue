<template>
    <div class="mapTab">
        <img class="mapTab__slectBg" src="src/assets/images/p1/mapSlectBg.png" :style="selectBgStyle" />
        <div :class="['mapTab__name',item.index === 0 ? 'rotate1': (item.index === 1 ? 'rotate2':'') ]"
             v-for="(item,_index) in mapData" @click="mapItemClick(item)" :style="item.styleObj">
            <p :class="[item.index == curIndex ? 'onSelect' :'' ]" :style="item.textStyleObj">
                {{item.index == curIndex ? item.text +'地图' :item.text }}
            </p>
        </div>
        <div class="arrow1" ></div>
        <div class="arrow2"></div>
        <div class="arrow3" :style="arrowStyle"></div>
        <div :class="['engName' , isHideEng ? 'engHide':'']">
            <p v-text="curEngName"></p>
        </div>
        <div class="icon">
            <img :class="[ curIndex== 0  ? '' :curIconClass]" src="src/assets/images/p1/CHNIcon.png" alt="">
            <img :class="[ curIndex== -1 ?'' :curIconClass]" src="src/assets/images/p1/WORLDIcon.png" alt="" class="">
            <img :class="[ curIndex== 1  ? '' :curIconClass]"  src="src/assets/images/p1/NXIcon.png" alt="">
        </div>
    </div>
</template>
<script>
    export default {
        name: "mapTab",
        data() {
            return {
                isAllowed:true,
                curIconClass :"none",
                curIndex : -1,
                curEngName :"",

                bgAngle : 0 ,
                arrowStyle:{},
                arrowWidth :0,
                mapItemStyle:{},

                isHideEng: false,
                mapData:[
                   {  angle: 90, index: 0 ,  EngName: 'MAP OF CHINA',text:"中国" ,styleObj:{},textStyleObj:{} },
                   {  angle: 0, index: -1 ,  EngName: 'WORLD MAP'  ,text:"世界"  ,styleObj:{} ,textStyleObj:{}},
                   {  angle: 180, index: 1 , EngName: 'MAP OF NINGXIA' ,text:"宁夏" ,styleObj:{},textStyleObj:{}}
                ]
            }
        },
        mounted(){
             this.mapItemClick(this.mapData[1])
        },
        computed:{
            selectBgStyle(){
               return  {"transform": "rotate("+this.bgAngle +"deg)"}
            },
            arrowStyle(){
                return {"width": this.arrowWidth +"px"}
            }
        },
        methods:{

            mapItemClick(item){
                const me = this;
                const index = item.index;
                console.log(index)
                if(index !== 0 ){

                    // 90° 垂直位置点击
                    if(index  == -1){
                        this.bgAngle = this.bgAngle + 360
                        // 处理各个角的名称位置 让他们按指定角度旋转
                        this.mapData.forEach((it) => {
                            let angle = it.angle
                            switch(it.index) {
                                // right 0°
                                case -1 :
                                    it.styleObj = {
                                        'height': '93px',
                                        'transform': 'rotate('+(angle+90)+'deg)'
                                    }
                                    it.textStyleObj = {
                                        'transform': 'rotate('+(-angle-90)+'deg)'
                                    }
                                    break;
                                // top 90°
                                case 0 :
                                    it.styleObj = {
                                        'height': '107px',
                                        'transform': 'rotate('+(angle+90)+'deg)'
                                    }
                                    it.textStyleObj = {
                                        'transform': 'rotate('+(-angle-90)+'deg)'
                                    }
                                    break;
                                // bottom 180°
                                case 1 :
                                    it.styleObj = {
                                        'height': '78px',
                                        'transform': 'rotate('+(angle+180)+'deg)'
                                    }
                                    it.textStyleObj = {
                                        'transform': 'rotate('+(-angle-180)+'deg)'
                                    }
                                    break;
                                default:
                                    break;
                            }

                        })

                    }
                    // 垂直 180° 位置点击
                    else{
                        this.bgAngle = this.bgAngle - 360
                        // 处理各个角的名称位置 让他们按指定角度旋转
                        this.mapData.forEach((it) => {
                            let angle = it.angle
                            switch(it.index) {
                                    // right 0°
                                case -1 :
                                    it.styleObj = {
                                       'height' : '107px',
                                        'transform': 'rotate('+(angle-180)+'deg)'
                                    }
                                    it.textStyleObj = {
                                        'transform': 'rotate('+(-angle+180)+'deg)'
                                    }
                                    break;
                                    // top 90°
                                case 0 :
                                    it.styleObj = {
                                        'height': '78px',
                                        'transform': 'rotate('+(angle-90)+'deg)'
                                    }
                                    it.textStyleObj = {
                                        'transform': 'rotate('+(-angle+90)+'deg)'
                                    }
                                    break;
                                    // bottom 180°
                                case 1 :
                                    it.styleObj = {
                                        'height': '93px',
                                        'transform': 'rotate('+(angle-90)+'deg)'
                                    }
                                    it.textStyleObj = {
                                        'transform': 'rotate('+(-angle+90)+'deg)'
                                    }
                                    break;
                                default:
                                    break;
                            }

                        })
                    }


                    //this.curIndex = index;
                    this.curEngName = item.EngName;
                    this.isHideEng = true;

                    this.arrowWidth = 0;
                    if(this.arrowTick)
                        this.arrowTick = clearTimeout(this.arrowTick);
                    this.arrowTick = setTimeout(function(){
                        me.arrowWidth = 102
                        me.isHideEng = false
                    },600);

                }



            }
        }
    }

</script>
<style>
    :root{
        --color-primary: #00ecfa;
        --color-engName : #efb414;
    }
    @b mapTab {
        position: absolute;
        left: 42px;
        top: 292px;

        @e slectBg {
            transform-origin:70px 70px;
            transition: transform 0.6s;
        }

        @e name {
            position: absolute;
            left: 72px;
            bottom: 85px;
            width: 0px;
            height: 78px;
            transform-origin:0% 100%;
            transition: transform 0.6s;
            & p{
                  position: absolute;
                  left: -15px;
                  top: -8px;
                  width: 60px;
                  color: var(--color-primary);
                  transform-origin: 15px 50%;
                  cursor: pointer;
                  transition: transform 0.6s;

                  &:hover, &.onSelect {
                      color: #fff;
                      text-shadow: 0px 0px 6px  var(--color-primary);
                  }
            }
        }

        & .rotate1{
            height: 93px;
            transform: rotate(90deg);
              & p{
                  transform: rotate(-90deg);
              }
        }

        & .rotate2{
            height: 107px;
            transform: rotate(180deg);
             & p{
                transform: rotate(-180deg);
            }
        }

        & .icon {
            position: absolute;
            top: 35px;
            left: 32px;
            & img {
                position: absolute;
                top: 0px;
                left: 0;
                transition: opacity 0.6s;
            }
        }
    }

    .engName{
        font-family: 'Georgia,Times New Roman';
        color:  var(--color-engName);
        position: absolute;
        top: 77px;
        left: 151px;
        width: 118px;
        height: 20px;
        line-height: 20px;
        overflow: hidden;
        & p {
          transition: transform 0.4s;
        }
    }
    .engHide p {
        transform: translate(0px, -20px);
    }


   .arrow1{
      position: absolute;
      top: -7px;
      left: 71px;
      width: 0;
      height: 40px;
      border-left: 1px dotted  var(--color-primary);
      &:after{
          content: '';
          position: absolute;
          top: 0;
          left: -5px;
          triangle: 5px  top var(--color-primary);
      }
    }




    .arrow2{
          position: absolute;
          bottom: -7px;
          left: 71px;
          width: 0;
          height: 40px;
          border-left: 1px dotted var(--color-primary);

        &:after{
             content: '';
             position: absolute;
             bottom: 0;
             left: -5px;
             triangle: 5px bottom var(--color-primary);
         }
    }

    .arrow3{
          position: absolute;
          top: 72px;
          left: 143px;
          width: 102px;
          height: 0px;
          border-bottom: 1px solid var(--color-primary);
          transition: width 0.5s;
         &:before{
             content: '';
             position: absolute;
             left: -6px;
             top: -1px;
             rect : 4px 2px rgba(3,160,172,0.6);
             border: 1px solid var(--color-primary);
         }
         &:after{
             content: '';
             position: absolute;
             right: -10px;
             top: -5px;
             triangle: 5px right var(--color-primary);
         }
    }

    .none {
        opacity: 0;
        z-index: 1!important;
    }
</style>