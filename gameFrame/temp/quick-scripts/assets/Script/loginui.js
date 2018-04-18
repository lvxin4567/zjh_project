(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/loginui.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5bf6d9zerNCRIETLN4CUkba', 'loginui', __filename);
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
        //# sourceMappingURL=loginui.js.map
        