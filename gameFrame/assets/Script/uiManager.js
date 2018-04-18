/**
 * Created by Administrator on 2018-4-16.
 */

cc.Class({
    extends:cc.Component,

    onLoad:function(){
        this.uimgr = {};
    },

    showui:function(ui){
        this.closeallui();
        if(this.uimgr[ui]){
            this.uimgr[ui].parent = this.node;
        }else{
            cc.loader.loadRes('prefabs/' + ui,cc.Prefab,function(err , _prefab){
                if(err){
                    cc.log(err)
                    return
                }
                var _prefabNode = cc.instantiate(_prefab);
                _prefabNode.parent = this.node;
                this.uimgr[ui] = _prefabNode;
            }.bind(this))
        }
    },

    closeallui:function(){
        for(var i in this.uimgr){
            this.uimgr[i].removeFromParent();
        }
    },

    closeui:function(ui){
        if(this.uimgr[ui]){
            this.uimgr[ui].removeFromParent()
        }
    },

    updateUIMsg:function(msgtype){
        for(var key in this.uimgr){
            if(this.uimgr[key] == null){
                continue;
            }
            if(this.uimgr[key].updateUIMsg(msgtype)){
                break;
            }
        }
    },

})
