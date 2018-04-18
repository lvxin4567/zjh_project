/**
 * Created by Administrator on 2018-4-18.
 */

cc.Class({
    extends: cc.Component,

    properties:{
        nickLabel:{
            default:null,
            type:cc.Label
        },
        uidLabel:{
            default:null,
            type:cc.Label
        },
        goldLabel:{
            default:null,
            type:cc.Label
        }
    },

    onLoad:function(){
        cc.log('init');
        this.initPlayerInfo();
    },

    initPlayerInfo:function(){
        this.nickLabel.getComponent(cc.Label).string = globleData.logindata.name;
        this.uidLabel.getComponent(cc.Label).string = globleData.logindata.uid;
        this.goldLabel.getComponent(cc.Label).string = globleData.logindata.gold;
    },

    btn_callBack:function(event , customData ){
        switch (event.target.name){
            case 'btn_nn':
                globleData.rootNode.getComponent('game_controler').creategoldroom(globleData.gamegoldbzw);
                break;
            default:
                break;
        }

    },

    updateUIMsg:function(msgtype){
        cc.log('hashas')
    },
})
