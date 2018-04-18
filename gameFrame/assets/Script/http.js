/**
 * Created by Administrator on 2018-4-16.
 */
var PostURL = function (url,data,func,otherdata,errorhandle) {
    var xhr = cc.loader.getXMLHttpRequest();
    xhr.open("POST", url);

    cc.log("postUrl,url=="+url)

    //set Content-type "text/plain;charset=UTF-8" to post plain text
    //xhr.setRequestHeader("Content-Type","text/plain");
    xhr.setRequestHeader("Content-Type","text/plain;charset=UTF-8");
    //xhr.responseType = "arraybuffer";
    xhr.otherdata = otherdata;
    xhr.onreadystatechange = function () {
        if(xhr.status == 200) {
            if(xhr.readyState == 4) {
                var httpStatus = xhr.statusText;
                var buffer = xhr.response;

                func(buffer, xhr.otherdata);
            }
        } else {
            cc.log("PostURL error");
            if(errorhandle != null)
                errorhandle(xhr.otherdata);
        }
    };

    xhr.send(data);

};

export function sendhttp(head, data, func){
    var response = {"msghead": head, "msgdata": JSON.stringify(data)};
    var jsonData = JSON.stringify(response);
    cc.log("sendHttp::::::" + jsonData);
    var _this = this;
    // LA 20161213 网络延时
    var timesend = ((new Date()).valueOf()).toString();
    PostURL("http://" + globleData.baseurl + "/loginmsg?" + encodeURI("msgdata=" + jsonData), "", function (str) {
        cc.log(str);
        if (func != null) {
            var recvdata = JSON.parse(str);
            var msgsign = JSON.parse(recvdata.msgsign);
            if (msgsign.encode && msgsign.encode == 1) {
                var data = new Uint8Array(BASE64.decoder(recvdata.msgdata));
                recvdata.msgdata = Bytes2Str(pako.inflate(data));
            }
            if (recvdata.msghead == "err") {
                //_this.game.uimgr.showload(false);
                //_this.game.uimgr.showui("gameclass.msgboxui");
                var data = JSON.parse(recvdata.msgdata);
                //if (data.info.toString() == "当前版本号过低，请下载最新版本进行游戏") {
                //    _this.game.uimgr.uis["gameclass.msgboxui"].setString(data.info, function () {
                //        gameclass.mod_platform.openurl(gameclass.download);
                //    });
                //} else {
                //    _this.game.uimgr.uis["gameclass.msgboxui"].setString(data.info);
                //}
            } else if(recvdata.msghead == "updcard") {
                //cc.log("http:::updcard");
                //var data = JSON.parse(recvdata.msgdata);
                //_this.game.modmgr.mod_login.setLoginData(data.card - data.gold, data.gold)
            } else {
                func(JSON.parse(recvdata.msgdata), "", recvdata);
            }
        }
        // {"msghead":"login","msgsign":"","msgdata":"{\"openid\":\"0f7c62d9876a875f0a60503319b3b8e0\",\"name\":\"游客\",\"imgurl\":\"\",\"card\":8,\"ip\":\"\",\"room\":0}"}
        //{"msghead":"login","msgsign":"","msgdata":"{\"openid\":\"0f7c62d9876a875f0a60503319b3b8e0\",\"name\":\"游客\",\"imgurl\":\"\",\"card\":7,\"ip\":\"http://120.24.215.214:8091/servermsg\",\"room\":150005}"}
    }, null, function (str) {
        //_this.game.uimgr.showui("gameclass.msgboxui");
        //_this.game.uimgr.uis["gameclass.msgboxui"].setString("网络连接失败,请检查网络是否通畅");
    });
}

