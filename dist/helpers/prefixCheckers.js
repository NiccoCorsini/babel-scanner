"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractPrefix = exports.checkResPrefix = exports.checkPrefix = void 0;
var scannerProperties_1 = require("../config/scannerProperties");
var checkPrefix = function (str) {
    if (!str.includes(scannerProperties_1.SCANNER_PREFIX)) {
        return false;
    }
    return true;
};
exports.checkPrefix = checkPrefix;
var checkResPrefix = function (str) {
    if (!str.includes(scannerProperties_1.RES_PREFIX)) {
        return false;
    }
    return true;
};
exports.checkResPrefix = checkResPrefix;
var extractPrefix = function (str, isRes) {
    return str.slice(isRes ? scannerProperties_1.RES_PREFIX.length : scannerProperties_1.SCANNER_PREFIX.length);
};
exports.extractPrefix = extractPrefix;
//# sourceMappingURL=prefixCheckers.js.map