(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/gameSocket.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '749e56Lgn9N97om81mfMgkd', 'gameSocket', __filename);
// Script/gameSocket.js

'use strict';

/**
 * Created by Administrator on 2018-4-18.
 */

var socketBase = require('socketBase');

cc.Class({
    extends: socketBase,

    onLoad: function onLoad() {},

    _connect: function _connect(url) {
        //this._isAutoLogin=true;
        this._loginHandler(url);
    }

    //onmsg_updcard(_data){
    //    cc.log('updatecard');
    //},


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
        //# sourceMappingURL=gameSocket.js.map
        