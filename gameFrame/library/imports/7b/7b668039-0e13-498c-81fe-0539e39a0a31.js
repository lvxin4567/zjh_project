"use strict";
cc._RF.push(module, '7b668A5DhNJjIH+BTnjmgox', 'uiManager');
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