(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/uiManager.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '7b668A5DhNJjIH+BTnjmgox', 'uiManager', __filename);
// Script/uiManager.js

'use strict';

/**
 * Created by Administrator on 2018-4-16.
 */

cc.Class({
    extends: cc.Component,

    onLoad: function onLoad() {
        this.uimgr = {};
    },

    showui: function showui(ui) {
        this.closeallui();
        if (this.uimgr[ui]) {
            this.uimgr[ui].parent = this.node;
        } else {
            cc.loader.loadRes('prefabs/' + ui, cc.Prefab, function (err, _prefab) {
                if (err) {
                    cc.log(err);
                    return;
                }
                var _prefabNode = cc.instantiate(_prefab);
                _prefabNode.parent = this.node;
                this.uimgr[ui] = _prefabNode;
            }.bind(this));
        }
    },

    closeallui: function closeallui() {
        for (var i in this.uimgr) {
            this.uimgr[i].removeFromParent();
        }
    },

    closeui: function closeui(ui) {
        if (this.uimgr[ui]) {
            this.uimgr[ui].removeFromParent();
        }
    },

    updateUIMsg: function updateUIMsg(msgtype) {
        for (var key in this.uimgr) {
            if (this.uimgr[key] == null) {
                continue;
            }
            if (this.uimgr[key].updateUIMsg(msgtype)) {
                break;
            }
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
        //# sourceMappingURL=uiManager.js.map
        