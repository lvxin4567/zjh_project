"use strict";
cc._RF.push(module, 'a15b22Pg8pBn7z1J+tNFp73', 'defines');
// Script/defines.js

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by chu on 2017/8/31 0031.
 */
var Defines = {};
Defines.cardShapeMap = {
  Spade: 3, //黑桃
  Heart: 2, //红桃
  Club: 1, //梅花
  Diamond: 0 //方片
};

Defines.cardValueMap = {
  'a': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': "A",
  '11': "B",
  '12': "C",
  '13': "D"
};
exports.default = Defines;
module.exports = exports['default'];

cc._RF.pop();