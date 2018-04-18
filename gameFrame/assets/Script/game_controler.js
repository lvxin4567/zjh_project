var EventListener = require('./event_listener')
import {sendhttp} from './http'

cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad:function(){
        globleData.rootNode = this.node;
        this.enterLogin();
    },

    enterLogin:function(){
        globleData.rootNode.getComponent('uiManager').showui('loginscene');
    },

    enterHall:function(){
        globleData.rootNode.getComponent('uiManager').showui('hallScene');
    },

    jionroom:function(ip, roomid){
        this.getroominfo("ws://"+ip,roomid,function(ws,data){

        })

    },
    getroominfo:function(ip, roomid,func){
        this.node.getComponent('gameSocket')._connect(ip,func);
    },

    setLogindata:function(card,gold){
        globleData.logindata.card = card;
        globleData.logindata.gold = gold;
        globleData.rootNode.getComponent('uiManager').updateUIMsg("updcard");
    },

    guestlogin:function(_code){
        var data = {"code": _code, "ver": globleData.clientver};
        sendhttp("loginYK",data,function(retdata, temp, recvdata){
            cc.log(retdata);
            if(recvdata.msgdata == "loginfail"){

            }else{
                globleData.logindata = retdata;
                if(retdata.room == 0){
                    this.node.getComponent('uiManager').closeallui();
                    this.enterHall();
                }else{
                    this.jionroom(retdata.ip, retdata.room);
                }
                this.node.getComponent('centerSocket')._connect(retdata.center);
            }
        }.bind(this));
    },

    creategoldroom:function(gametype , num){
        var _num = 1;
        if (num) _num = num;
        var data = {"uid": globleData.logindata.uid, "type": gametype, "num": _num,"unionid":globleData.code};
        var _this = this;
        sendhttp('fastjoin',data,function(retdata, temp, recvdata){
            if(recvdata.card){
                _this.setLogindata(retdata.card - retdata.gold, retdata.gold);
            }
            _this.jionroom(retdata.ip, retdata.room);
        })
    },




    // update (dt) {},
});
