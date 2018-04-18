(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/hallui.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'e312f2I5m9M5pOWgXbBKbAp', 'hallui', __filename);
// Script/hallui.js

'use strict';

/**
 * Created by Administrator on 2018-4-18.
 */

cc.Class({
    extends: cc.Component,

    properties: {
        nickLabel: {
            default: null,
            type: cc.Label
        },
        uidLabel: {
            default: null,
            type: cc.Label
        },
        goldLabel: {
            default: null,
            type: cc.Label
        }
    },

    onLoad: function onLoad() {
        cc.log('init');
        this.initPlayerInfo();
    },

    initPlayerInfo: function initPlayerInfo() {
        this.nickLabel.getComponent(cc.Label).string = globleData.logindata.name;
        this.uidLabel.getComponent(cc.Label).string = globleData.logindata.uid;
        this.goldLabel.getComponent(cc.Label).string = globleData.logindata.gold;
    },

    btn_callBack: function btn_callBack(event, customData) {
        switch (event.target.name) {
            case 'btn_nn':
                globleData.rootNode.getComponent('game_controler').creategoldroom(globleData.gamegoldbzw);
                break;
            default:
                break;
        }
    },

    updateUIMsg: function updateUIMsg(msgtype) {
        cc.log('hashas');
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=hallui.js.map
        