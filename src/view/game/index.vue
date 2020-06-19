<template>
    <div class="game-wrapper" @keydown="handleKeydown">
            <div class="aircraft" ref="aircraft" :style="{transform: `translate(${horizontally}px, ${vertical}px)`}">
                <div class="aircraft-background"></div>
                <ul class="aircraft-bullet"> 
                    <li></li>
                </ul>
            </div>
    </div>
</template>
<script>
export default {
    data: () => {
        return {
              // 38 上 40 下 37 左 39右 32 空格 13 回车
            pressType: {
                38: 'pressTop',
                40: 'pressDown',
                37: 'pressLeft',
                39: 'pressRight',
                32: 'openFire',
                13: 'openFire',
            },
            // 飞机步数
            step:30,
            // 子弹步数
            bulletStep: 10,
            vertical: 0,
            horizontally: 0,
            winWidth: window.innerWidth,
            winHeight: window.innerHeight,

        }
    },
    mounted() {
        this.handleKeydown()
    },
    methods:{
        handleKeydown() {
            let that = this
            // 38 上 40 下 37 左 39右
            document.addEventListener('keydown', e => {
                if (that.pressType[e.keyCode]) {
                    that[that.pressType[e.keyCode]]()
                }
                
            })
        },

        /**
         * 向上
         */
        pressTop() {
            console.log(Math.abs(this.vertical))
            let aircraft = this.$refs.aircraft
            console.log(Math.abs(this.vertical))
            console.log(this.winHeight + aircraft.offsetHeight)
            // console.log(Math.abs(this.vertical))
            if (Math.abs(this.vertical) > this.winHeight + aircraft.clientHeight) {
                this.vertical = -this.winWidth
            }
            this.vertical -= this.step
            console.log('top')
        },

        /**
         * 向下
         */
        pressDown() {
             this.vertical += this.step
        },

        /**
         * 向左
         */
        pressLeft() {
              this.horizontally -= this.step

        },

        /**
         * 向右
         */
        pressRight() {
             this.horizontally += this.step
            
        },

        /**
         * 开炮
         */
        openFire() {
        }

    }
}
</script>
<style lang="scss" scoped>
.game-wrapper{
    height: 100%;
    position: relative;
     .aircraft{
         width: 70px;
         height: 70px;
         position: absolute;
         bottom: 0;
         left: 0;
      
        transform: translate(0, 0);
        transition: all .3s;
        z-index: 9;
        background-color: #fff;
        .aircraft-background{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: url(https://tse4-mm.cn.bing.net/th/id/OIP.Ie3joDRLlj-9AtQi30xQNAHaFj?w=221&h=180&c=7&o=5&dpr=1.25&pid=1.7) no-repeat center;
            background-size: cover;
            z-index: 9;
        }
        .aircraft-bullet{
            li{
                width: 20px;
                height: 20px;
                border-radius: 40px;
                background-color: aqua;
                margin: 0 auto;
                position: absolute;
                top: 0px;
                left: 50%;
                transform: translateX(-50%);
            }
        }
    }
     
}
   
</style>
