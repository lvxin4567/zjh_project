"use strict";
cc._RF.push(module, '5bf6d9zerNCRIETLN4CUkba', 'loginui');
// Script/loginui.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function onLoad() {},


    buttonClick: function buttonClick(event, customData) {
        cc.log("button click = " + customData);

        var _code = function (name) {
            var r = null;
            if (window && window.location) {
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
                var r = window.location.search.substr(1).match(reg);
            }
            if (r != null) return unescape(r[2]);return null;
        }("code");

        cc.log(" code = " + _code);
        globleData.code = _code;
        globleData.rootNode.getComponent('game_controler').guestlogin(_code);
    }

    // update (dt) {},
});

cc._RF.pop();