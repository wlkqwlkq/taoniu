// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        let self = this;
       let sti = setInterval(function(){
            self.getComponent(cc.Label).string = parseInt(self.getComponent(cc.Label).string)-1;
            if(parseInt(self.getComponent(cc.Label).string)<=0) fun();
        },1000)
        
        let fun = function(){
            //结束定时器
            clearInterval(sti);
            //暂停游戏
            cc.director.pause();
            //弹出对话框
            cc.find("Canvas/gOver").active = true;
            //设置最后得分
            let defen = cc.find("Canvas/bg/defen/New Label").getComponent(cc.Label).string;
            cc.find("Canvas/gOver/defen").getComponent(cc.Label).string += parseInt(defen);
        }
    },

    // update (dt) {},
});
