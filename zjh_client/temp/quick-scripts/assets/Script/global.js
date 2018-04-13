(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/global.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '6f9f4ZgVchPGbOGu0foOTtq', 'global', __filename);
// Script/global.js

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _playerData = require('./data/player-data');

var _playerData2 = _interopRequireDefault(_playerData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var global = {}; /**
                  * Created by chu on 2017/8/16 0016.
                  */

global.playerData = (0, _playerData2.default)();
module.exports = global;
exports.default = global;
module.exports = exports['default'];

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
        //# sourceMappingURL=global.js.map
        