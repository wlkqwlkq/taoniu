// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        num:1,
        zhong:{
            default:null,
            type:cc.Sprite
        },
        tao:{
            default:null,
            type:cc.Node
        },
        spr:{
            default:[],
            type:[cc.SpriteFrame]
        },
        shengzi:{
            default:null,
            type:cc.Node
        },
        niu:{
            default:null,
            type:cc.Node
        }
    },
    //碰撞系统
    onCollisionEnter:function(other,self){
        // this.getComponent(cc.Sprite).active = false;
        // this.getComponent(cc.Animation).active = false;
        // this.shengzi.active = false;
        // this.tao.active = true;
        // this.zhong.spriteFrame = this.spr[this.num-1];
        // this.tao.runAction(cc.sequence(cc.moveBy(0.9,0,0),cc.moveTo(0.7,0,-750)),this.fun2)
        //套中,更换绳子图片
        // cc.log("taozhong")
        // this.shengzi.getComponent(cc.Sprite).SpriteFrame = this.spr[2];
        // cc.log(this.shengzi.getComponent(cc.Sprite).SpriteFrame)
    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    start () {
        //牛索引
        let i = 1;
        //重复牛奔跑动作
        let fun = cc.callFunc(function(target){
            i++;
            if(i>3) i=1;
            this.num = i;
            this.getComponent(cc.Animation).play("niu"+i);//更换动画
            this.node.x = 500; //重置牛的位置
            //重复动画组
            let sta = cc.sequence(cc.moveTo(3,-500,0),fun);
            this.node.runAction(sta)
        },this,i)
        //获取当前的动画
        let anmi = this.getComponent(cc.Animation);
        //开启动画 
        anmi.play() //无参数表示,播放默认动画
        //创建一个有序动作组   三秒内移动到x为-500的位置,然后执行回调函数fun
        let sta = cc.sequence(cc.moveTo(3,-500,0),fun);
        //绑定执行sta这个动作组
        this.node.runAction(sta);
    },
    // update (dt) {},
});
