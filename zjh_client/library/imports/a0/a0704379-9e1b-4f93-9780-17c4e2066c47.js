"use strict";
cc._RF.push(module, 'a0704N5nhtPk5eAF8TiBmxH', 'event-listener');
// Script/event-listener.js

"use strict";

/**
 * Created by chu on 2017/8/16 0016.
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