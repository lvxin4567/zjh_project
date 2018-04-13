"use strict";
cc._RF.push(module, 'f55b3AJbbhN/48FXSegrEj3', 'game-world');
// Script/game-world.js

'use strict';

var _global = require('./global');

var _global2 = _interopRequireDefault(_global);

var _eventListener = require('./event-listener');

var _eventListener2 = _interopRequireDefault(_eventListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cc.Class({
    extends: cc.Component,

    properties: {
        player_node_prefab: {
            default: null,
            type: cc.Prefab
        },
        player_pos_list: {
            default: [],
            type: cc.Node
        },
        game_ready_ui: {
            default: null,
            type: cc.Node
        }
    },

    onLoad: function onLoad() {
        var _this = this;

        this._index = 0;
        this.playerNodeList = [];
        this.game_ready_ui.active = false;
        _global2.default.gameEventListener = (0, _eventListener2.default)({});
        _global2.default.gameEventListener.on("sync_data", function (data) {
            console.log("game world sync data = " + JSON.stringify(data));
            _global2.default.playerData.uid = data.uid;
            _global2.default.playerData.house_manager_id = data.house_manager_id;
            console.log("house manager = " + data.house_manager_id);
            if (data.uid === data.house_manager_id) {
                _this.game_ready_ui.active = true;
            }
            var _playersData = data.players_data;
            _this._index = data.index;

            for (var i = 0; i < _playersData.length; i++) {
                var playerData = _playersData[i];
                _this.createPlayer(playerData.uid, playerData.index);
            }
        });
        _global2.default.gameEventListener.on("player_join", function (data) {
            _this.createPlayer(data.uid, data.index);
        });
        _global2.default.gameEventListener.on("player_offline", function (uid) {
            for (var i = 0; i < _this.playerNodeList.length; i++) {
                var playerNode = _this.playerNodeList[i];
                if (playerNode.getComponent("player-node").getUid() === uid) {
                    playerNode.removeFromParent(true);
                    playerNode.destroy();
                    _this.playerNodeList.splice(i, 1);
                }
            }
        });
        _global2.default.gameEventListener.on("change_house_manager", function (uid) {
            _global2.default.playerData.house_manager_id = uid;
            if (_global2.default.playerData.uid === uid) {
                _this.game_ready_ui.active = true;
            }
        });
        _global2.default.gameEventListener.on("push_card", function () {
            _this.game_ready_ui.active = false;
        });
    },
    createPlayer: function createPlayer(uid, index) {
        console.log("uid = " + uid);
        console.log("index = " + index);
        var currentIndex = index - this._index;
        if (currentIndex < 0) {
            currentIndex = currentIndex + 6;
        }
        var player = cc.instantiate(this.player_node_prefab);
        player.parent = this.node;
        player.getComponent("player-node").init(uid, currentIndex);
        player.position = this.player_pos_list[currentIndex].position;
        this.playerNodeList.push(player);
    },
    onButtonClick: function onButtonClick(event, customData) {
        console.log("customData = " + customData);

        switch (customData) {
            case "start_game":
                _global2.default.eventlistener.fire("start_game");
                break;
            case "lookcard":
                _global2.default.eventlistener.fire("look_card");
                break;
            case "rate_1":
                _global2.default.eventlistener.fire("player_choose_rate", 1);
                break;
            case "rate_2":
                _global2.default.eventlistener.fire("player_choose_rate", 2);

                break;
            case "rate_5":
                _global2.default.eventlistener.fire("player_choose_rate", 5);

                break;
            case "pk_button":
                _global2.default.gameEventListener.fire("player_pk");
                break;
            default:
                break;
        }
    }

});

cc._RF.pop();