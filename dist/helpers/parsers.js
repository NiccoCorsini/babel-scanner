"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToNumArray = exports.numToStringArray = void 0;
var numToStringArray = function (series) {
    return series.map(function (num) { return num.toString(); });
};
exports.numToStringArray = numToStringArray;
var stringToNumArray = function (series) {
    return series.map(function (str) { return Number(str); });
};
exports.stringToNumArray = stringToNumArray;
//# sourceMappingURL=parsers.js.map