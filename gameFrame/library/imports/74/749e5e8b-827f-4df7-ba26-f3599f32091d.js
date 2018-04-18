"use strict";
cc._RF.push(module, '749e56Lgn9N97om81mfMgkd', 'gameSocket');
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