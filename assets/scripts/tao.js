// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        niu:{
            default:null,
            type:cc.Node
        },
        zhong:{
            default:null,
            type:cc.Sprite
        },
        spr:{
            default:[],
            type:[cc.SpriteFrame]
        },
        btn:{
            default:null,
            type:cc.Node
        },
        defen:{
            default:null,
            type:cc.Node
        },
    },
   //碰撞系统  套中牛啦!
    onCollisionEnter:function(other,self){
        //套中更新得分
        this.defen.getComponent(cc.Label).string = parseInt(this.defen.getComponent(cc.Label).string)+1;
        //套中,更换绳子图片
        this.node.getComponent(cc.Sprite).spriteFrame = this.spr[this.niu.getComponent("niu1").num];
        //奔跑的牛消失
        this.niu.active = false;
    },
    // onLoad () {},
    start () {
        
        this.node.getComponent(cc.Sprite).spriteFrame = this.spr[0];
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        this.getComponent(cc.Sprite).SpriteFrame = this.spr[this.niu.num];
    },
    //点击之后绳子的动画
    click(){
        //替换图片
        this.node.getComponent(cc.Sprite).spriteFrame = this.spr[0];
        //禁用按钮
        this.btn.getComponent(cc.Button).interactable = false;
        let fun = cc.callFunc(function(){
            this.node.getComponent(cc.Sprite).SpriteFrame = this.spr[2];
        },this)
        let fun2 = cc.callFunc(function(){
            this.node.getComponent(cc.Sprite).spriteFrame = this.spr[0];
            // cc.log(this.btn.getComponent(cc.Button).enabled )
            this.node.active = false; 
            //解除禁用
            this.btn.getComponent(cc.Button).interactable = true;
            //奔跑的牛出现
            this.niu.x = -500;
            this.niu.active = true;
        },this)
        this.node.active = true; 
        this.node.y = -650; 
        let act = cc.sequence(cc.moveTo(0.7,0,-150),fun,cc.moveTo(0.7,0,-650),fun2)
        this.node.runAction(act)
    }
});
