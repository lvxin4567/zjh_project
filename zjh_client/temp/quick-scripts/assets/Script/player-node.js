(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/player-node.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '005feP2aMRN/6qC2LQ22Awi', 'player-node', __filename);
// Script/player-node.js

"use strict";

var _global = require("./global");

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cc.Class({
    extends: cc.Component,

    properties: {
        sprite_frames: {
            default: [],
            type: cc.SpriteFrame
        },
        uid_label: {
            default: null,
            type: cc.Label
        },
        house_manager_label: {
            default: null,
            type: cc.Label
        },
        card_node_prefab: {
            default: null,
            type: cc.Prefab
        },
        card_pos: {
            default: [],
            type: cc.Node
        },
        choose_rate_label: {
            default: null,
            type: cc.Label
        },
        choose_player_button: {
            default: null,
            type: cc.Button
        },
        pk_result_label: {
            default: null,
            type: cc.Label
        }
    },

    onLoad: function onLoad() {
        this.choose_player_button.node.active = false;
        this.node.addComponent(cc.Sprite).spriteFrame = this.sprite_frames[Math.round(Math.random() * this.sprite_frames.length)];

        // const  changeHouseManager =  (uid) =>{
        //     console.log("player node change house manager = " + uid);
        //     // this.house_manager_label.string = "";
        //     this.house_manager_label.string = "";
        //     if (uid === this.uid){
        //         // this.house_manager_label.string = "房主";
        //         this.house_manager_label.string = "房主";
        //
        //     }
        // };

        // global.gameEventListener.on("change_house_manager", this.changeHouseManager);

        _global2.default.gameEventListener.on("change_house_manager", this.changeHouseManager.bind(this));
        _global2.default.gameEventListener.on("push_card", this.pushCard.bind(this));
        _global2.default.gameEventListener.on("player_choose_rate", this.playerChooseRate.bind(this));
        _global2.default.gameEventListener.on("player_pk", this.playerPK.bind(this));
        _global2.default.gameEventListener.on("pk_choose_player", this.pkchoosedPlayer.bind(this));
        _global2.default.gameEventListener.on("pk_result", this.pkResult.bind(this));
    },
    pkchoosedPlayer: function pkchoosedPlayer() {
        this.choose_player_button.node.active = false;
    },
    playerPK: function playerPK() {
        console.log("player node player pk");
        if (this.uid !== _global2.default.playerData.uid) {
            this.choose_player_button.node.active = true;
        }
    },
    pkResult: function pkResult(data) {
        console.log("player node pk result" + JSON.stringify(data));
        if (data.win_uid === this.uid) {
            this.pk_result_label.string = "pk win";
        } else if (data.lose_uid === this.uid) {
            this.pk_result_label.string = "pk lose";
        }
    },
    playerChooseRate: function playerChooseRate(data) {
        if (data.uid === this.uid) {
            this.choose_rate_label.string = data.rate;
        }
    },
    pushCard: function pushCard() {
        if (this.getUid() === _global2.default.playerData.uid) {
            return;
        }
        for (var i = 0; i < 3; i++) {
            var cardNode = cc.instantiate(this.card_node_prefab);
            cardNode.parent = this.node;
            cardNode.scale = {
                x: 0.6,
                y: 0.6
            };
            cardNode.position = cc.pAdd(this.card_pos[this.index].position, cc.p((3 - 1) * -0.5 * 40 + 40 * i, 0));
        }
    },

    changeHouseManager: function changeHouseManager(uid) {
        console.log("player node change house manager = " + uid);
        // this.house_manager_label.string = "";
        this.house_manager_label.string = "";
        if (uid === this.uid) {
            // this.house_manager_label.string = "房主";
            this.house_manager_label.string = "房主";
        }
    },

    init: function init(uid, index) {
        this.uid = uid;
        this.index = index;
        this.uid_label.string = uid + "";
        if (_global2.default.playerData.house_manager_id === this.uid) {
            this.house_manager_label.string = "房主";
        }
    },

    getUid: function getUid() {
        return this.uid;
    },
    onDestroy: function onDestroy() {
        console.log("destroy");
        // global.gameEventListener.off("changeHouseManager", this.changeHouseManager);
        _global2.default.gameEventListener.off("change_house_manager", this.changeHouseManager);
        _global2.default.gameEventListener.off("push_card", this.pushCard);
        _global2.default.gameEventListener.off("player_choose_rate", this.playerChooseRate);
        _global2.default.gameEventListener.off("player_pk", this.playerPK);
        _global2.default.gameEventListener.off("pk_choose_player", this.pkchoosedPlayer);
        _global2.default.gameEventListener.off("pk_result", this.pkResult);
    },

    onButtonClick: function onButtonClick(event, customData) {
        if (customData === "choose_player_button") {
            cc.log("choose me =" + this.uid);
            _global2.default.eventlistener.fire("pk_choose_player", this.uid);
            _global2.default.gameEventListener.fire("pk_choose_player");
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
        //# sourceMappingURL=player-node.js.map
        