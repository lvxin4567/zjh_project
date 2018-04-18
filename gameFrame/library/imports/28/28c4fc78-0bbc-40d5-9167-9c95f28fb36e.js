"use strict";
cc._RF.push(module, '28c4fx4C7xA1ZFnnJXyj7Nu', 'centerSocket');
// Script/centerSocket.js

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
    },

    onmsg_updcard: function onmsg_updcard(_data) {
        cc.log('updatecard');
    }
});

cc._RF.pop();