"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAndExtractPrefix = exports.splitNameAndShirtFromName = exports.splitNameAndShirtFromCode = exports.splitStringAtInterval = void 0;
var scannerProperties_1 = require("../config/scannerProperties");
var splitStringAtInterval = function (str, interval) {
    var result = [];
    for (var i = 0; i < str.length; i += interval) {
        result.push(str.slice(i, i + interval));
    }
    return result;
};
exports.splitStringAtInterval = splitStringAtInterval;
var splitNameAndShirtFromCode = function (str) {
    var _a = str.split(scannerProperties_1.CODE_SEPARATOR), name = _a[0], shirt = _a[1];
    return { name: name, shirt: shirt };
};
exports.splitNameAndShirtFromCode = splitNameAndShirtFromCode;
var splitNameAndShirtFromName = function (str) {
    var name = str.replace(/[0-9]/g, "");
    var shirt = str.replace(/[A-Za-z]/g, "");
    return { name: name, shirt: shirt };
};
exports.splitNameAndShirtFromName = splitNameAndShirtFromName;
var checkAndExtractPrefix = function (arr) {
    if (arr.length < scannerProperties_1.RESERVATION_PREFIX.length) {
        return false;
    }
    for (var i = 0; i < scannerProperties_1.RESERVATION_PREFIX.length; i++) {
        if (arr[i] !== scannerProperties_1.RESERVATION_PREFIX[i]) {
            return false;
        }
    }
    return arr.slice(scannerProperties_1.RESERVATION_PREFIX.length);
};
exports.checkAndExtractPrefix = checkAndExtractPrefix;
//# sourceMappingURL=splitters.js.map