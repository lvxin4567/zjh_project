cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad () {

    },

    buttonClick: function (event, customData) {
        cc.log("button click = " + customData);

        var _code = (function(name) {
            var r = null;
            if(window && window.location){
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
                var r = window.location.search.substr(1).match(reg);
            }
            if (r != null) return unescape(r[2]); return null;
        })("code");

        cc.log(" code = " + _code);
        globleData.code = _code;
        globleData.rootNode.getComponent('game_controler').guestlogin(_code);
    },



    // update (dt) {},
});
