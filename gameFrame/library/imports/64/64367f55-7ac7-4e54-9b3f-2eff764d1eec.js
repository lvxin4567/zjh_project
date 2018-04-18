"use strict";
cc._RF.push(module, '643679VesdOVJs/Lv92TR7s', 'game_controler');
// Script/game_controler.js

'use strict';

var _http = require('./http');

var EventListener = require('./event_listener');


cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function onLoad() {
        globleData.rootNode = this.node;
        this.enterLogin();
    },

    enterLogin: function enterLogin() {
        globleData.rootNode.getComponent('uiManager').showui('loginscene');
    },

    enterHall: function enterHall() {
        globleData.rootNode.getComponent('uiManager').showui('hallScene');
    },

    jionroom: function jionroom(ip, roomid) {
        this.getroominfo("ws://" + ip, roomid, function (ws, data) {});
    },
    getroominfo: function getroominfo(ip, roomid, func) {
        this.node.getComponent('gameSocket')._connect(ip, func);
    },

    setLogindata: function setLogindata(card, gold) {
        globleData.logindata.card = card;
        globleData.logindata.gold = gold;
        globleData.rootNode.getComponent('uiManager').updateUIMsg("updcard");
    },

    guestlogin: function guestlogin(_code) {
        var data = { "code": _code, "ver": globleData.clientver };
        (0, _http.sendhttp)("loginYK", data, function (retdata, temp, recvdata) {
            cc.log(retdata);
            if (recvdata.msgdata == "loginfail") {} else {
                globleData.logindata = retdata;
                if (retdata.room == 0) {
                    this.node.getComponent('uiManager').closeallui();
                    this.enterHall();
                } else {
                    this.jionroom(retdata.ip, retdata.room);
                }
                this.node.getComponent('centerSocket')._connect(retdata.center);
            }
        }.bind(this));
    },

    creategoldroom: function creategoldroom(gametype, num) {
        var _num = 1;
        if (num) _num = num;
        var data = { "uid": globleData.logindata.uid, "type": gametype, "num": _num, "unionid": globleData.code };
        var _this = this;
        (0, _http.sendhttp)('fastjoin', data, function (retdata, temp, recvdata) {
            if (recvdata.card) {
                _this.setLogindata(retdata.card - retdata.gold, retdata.gold);
            }
            _this.jionroom(retdata.ip, retdata.room);
        });
    }

    // update (dt) {},
});

cc._RF.pop();