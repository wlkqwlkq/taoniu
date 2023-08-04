// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
       defen:{
        default:null,
        type:cc.Node
       }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        // cc.log("ffffffff")
        // let defen = cc.find("Canvas/bg/defen/New Label").getComponent(cc.Label).string;
        // cc.log(defen)
        // this.node.getChlidByName("defen").getComponent(cc.Label).string += parseInt(defen);
        // // cc.log("ffffffffffff",this.node.getChlidByName("defen").getComponent(cc.Label).string)
    },
    click(){
        cc.director.resume();
        cc.director.loadScene("Main");
        this.node.active = false;
    }
    // update (dt) {},
});
