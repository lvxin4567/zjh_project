(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/event_listener.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a9cb7lkpOVPnoHEpqBE9rUr', 'event_listener', __filename);
// Script/event_listener.js

"use strict";

/**
 * Created by Administrator on 2018-4-16.
 */

var EventListener = function EventListener(obj) {
    var Register = {};
    obj.on = function (name, method) {
        if (!Register.hasOwnProperty(name)) {
            Register[name] = [];
        }
        Register[name].push(method);
    };
    obj.fire = function (name) {
        console.log("fire " + name);
        if (Register.hasOwnProperty(name)) {
            console.log("has own " + name);
            var handlerList = Register[name];
            for (var i = 0; i < handlerList.length; i++) {
                var handler = handlerList[i];
                var args = [];
                for (var j = 1; j < arguments.length; j++) {
                    args.push(arguments[j]);
                }
                handler.apply(this, args);
                // console.log("args = " + JSON.stringify(args));
            }
        }
    };
    obj.off = function (name, method) {
        console.log("off handler name = " + name);
        if (Register.hasOwnProperty(name)) {
            var handlerList = Register[name];
            for (var i = 0; i < handlerList.length; i++) {
                if (handlerList[i] === method) {
                    handlerList.splice(i, 1);
                }
            }
        }
    };
    obj.destroy = function () {
        Register = {};
    };
    return obj;
};
// export default EventListener;
module.exports = EventListener;

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
        //# sourceMappingURL=event_listener.js.map
        