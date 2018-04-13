(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/main-world.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '1b541Od7iNMN58tF2cE9o97', 'main-world', __filename);
// Script/main-world.js

"use strict";

var global = require("./global");
cc.Class({
    extends: cc.Component,

    properties: {
        edit_box: {
            default: null,
            type: cc.EditBox
        }
    },

    // use this for initialization
    onLoad: function onLoad() {},

    buttonClick: function buttonClick(event, customData) {
        console.log("button click = " + customData);
        console.log("edit box string = " + this.edit_box.string);
        if (this.edit_box.string.length !== 0) {
            global.eventlistener.fire("login", this.edit_box.string);
        }
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
        //# sourceMappingURL=main-world.js.map
        