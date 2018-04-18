"use strict";
cc._RF.push(module, 'eb228tw+9JGK7ltBMzWFVyf', 'socketBase');
// Script/socketBase.js

"use strict";

/**
 * Created by Administrator on 2018-4-18.
 */

cc.Class({
    extends: cc.Component,

    properties: {
        websocketTarget: null
    },

    onLoad: function onLoad() {
        this.websocketTarget = null;
    },

    _loginHandler: function _loginHandler(url) {
        cc.log("create socket ip=============" + url);
        if (!this.websocketTarget) {
            this.websocketTarget = new WebSocket("ws://" + url);
        }
        var ws = this.websocketTarget;
        ws.binaryType = 'arraybuffer';
        var _this = this;
        ws.onopen = function () {
            cc.log('websocket:' + url + ' connect');
        };
        ws.onclose = function () {};
        ws.onerror = function (evt) {};
        ws.onmessage = function (evt) {
            var u8a = new Uint8Array(evt.data);
            var str = Bytes2Str(u8a);

            var recvdata = JSON.parse(str);
            var msgsign = JSON.parse(recvdata.msgsign);

            _this.curservrtime = msgsign.time;
            _this.curclienttime = Math.floor(new Date().getTime() / 1000);

            if (msgsign.encode && msgsign.encode == 1) {
                var data = new Uint8Array(BASE64.decoder(recvdata.msgdata));
                recvdata.msgdata = Bytes2Str(pako.inflate(data));
            }
            if (recvdata.msghead != "gameping") {
                cc.log(recvdata.msgdata);
                cc.log(recvdata);
            }
            var _calldata = JSON.parse(recvdata.msgdata);
            if (_this["onmsg_" + recvdata.msghead]) {
                _this["onmsg_" + recvdata.msghead](_calldata);
            } else {
                _this.onmsg_OtherHead(recvdata.msghead, _calldata);
            }
        };
    },

    sendSocket: function sendSocket(data) {
        var response = { "msghead": data.headName, "msgdata": JSON.stringify(data.obj) };
        var jsonData = JSON.stringify(response);
        if (this.websocketTarget) {
            this.websocketTarget.send(jsonData);
        }
    },
    onmsg_OtherHead: function onmsg_OtherHead(msghead, _calldata) {}
});

cc._RF.pop();