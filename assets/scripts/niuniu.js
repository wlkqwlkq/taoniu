const cow_skin = cc.Class({
    name:"cow_skin",
    properties:{
        cows:{
            default:[],
            type:[cc.SpriteFrame]
        }
    }
})

cc.Class({
    extends: cc.Component,

    properties: {
        cow_sets:{
            default:[],
            type:[cow_skin]
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
       
    },

    // update (dt) {},
});
