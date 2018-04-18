/**
 * Created by Administrator on 2018-4-18.
 */

var socketBase = require('socketBase');

cc.Class({
    extends:socketBase,

    onLoad:function(){

    },

    _connect:function(url){
        //this._isAutoLogin=true;
        this._loginHandler(url);
    },

    onmsg_updcard(_data){
        cc.log('updatecard');
    },


})
