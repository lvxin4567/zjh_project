(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/game-ui.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '385ce9xpwBJf52rNSz6GP/o', 'game-ui', __filename);
// Script/game-ui.js

"use strict";

var _global = require("./global");

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cc.Class({
    extends: cc.Component,

    properties: {
        cardnode_prefab: {
            default: null,
            type: cc.Prefab
        },
        total_rate_label: {
            default: null,
            type: cc.Label
        },
        look_card_button: {
            default: null,
            type: cc.Button
        },
        rate_1_button: {
            default: null,
            type: cc.Button
        },
        rate_2_button: {
            default: null,
            type: cc.Button
        },
        rate_5_button: {
            default: null,
            type: cc.Button
        },
        pk_button: {
            default: null,
            type: cc.Button
        }

    },

    // use this for initialization
    onLoad: function onLoad() {
        this.node.active = false;
        _global2.default.gameEventListener.on("push_card", this.pushCard.bind(this));
        _global2.default.gameEventListener.on("show_card", this.showCard.bind(this));
        _global2.default.gameEventListener.on("player_choose_rate", this.playerChooseRate.bind(this));
        _global2.default.gameEventListener.on("turn_player_message", this.turnPlayerMessage.bind(this));
        // this.disabelButton();
    },
    turnPlayerMessage: function turnPlayerMessage(data) {
        console.log("turn player message" + JSON.stringify(data));
        var uid = data.uid;
        // let maxRate = data.maxRate;
        this.currentMaxRate = data.maxRate;
        if (uid === _global2.default.playerData.uid) {
            this.enableButton();
        } else {
            this.disabelButton();
        }
    },

    enableButton: function enableButton() {
        this.setButtonActive(true);
    },
    disabelButton: function disabelButton() {
        this.setButtonActive(false);
    },
    setButtonActive: function setButtonActive(value) {
        console.log("set button " + value);
        if (value === false) {
            this.rate_1_button.interactable = value;
            this.rate_2_button.interactable = value;
            this.rate_5_button.interactable = value;
        } else {
            var rateList = [1, 2, 5];

            for (var i = 0; i < rateList.length; i++) {
                if (this.currentMaxRate <= rateList[i]) {
                    this["rate_" + rateList[i] + "_button"].interactable = value;
                } else {
                    this["rate_" + rateList[i] + "_button"].interactable = false;
                }
            }
        }
        this.pk_button.interactable = value;
    },
    playerChooseRate: function playerChooseRate(data) {
        var totalRate = data.totalRate;
        this.total_rate_label.string = totalRate + "";
    },
    pushCard: function pushCard() {
        //
        this.node.active = true;
        this.cardNodeList = [];
        console.log("recive event push card");
        for (var i = 0; i < 3; i++) {
            var cardNode = cc.instantiate(this.cardnode_prefab);
            cardNode.parent = this.node;
            cardNode.position = {
                x: 100 * (3 - 1) * -0.5 + 100 * i,
                y: 0
            };
            this.cardNodeList.push(cardNode);
        }
    },
    showCard: function showCard(data) {
        console.log("data = " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            var cardData = data[i];
            var cardNode = this.cardNodeList[i];
            cardNode.getComponent("card-node").showCard(cardData);
        }
        this.look_card_button.interactable = false;
    },
    onDestroy: function onDestroy() {
        _global2.default.gameEventListener.off("push_card", this.pushCard);
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
        //# sourceMappingURL=game-ui.js.map
        