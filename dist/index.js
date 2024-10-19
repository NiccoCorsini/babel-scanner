"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeCode = exports.readCode = void 0;
var alphabetMap_1 = require("./config/alphabetMap");
var scannerProperties_1 = require("./config/scannerProperties");
var parsers_1 = require("./helpers/parsers");
var sanitizer_1 = require("./helpers/sanitizer");
var splitters_1 = require("./helpers/splitters");
/**
 * Decodes an encoded string into a readable name and a numeric part.
 *
 * @param {string} str - The encoded string to be decoded. The string is expected to contain a name and a numeric code at the end.
 * @returns {string} - The decoded name combined with the numeric part of the string.
 * @throws {Error} - Throws an error if the string does not start with the expected prefix or if the code is not readable.
 *
 * @example
 * const decoded = readCode("501511404819504427406427-66");
 * // returns "PINZI66"
 */
var readCode = function (str) {
    var _a = (0, splitters_1.splitNameAndShirtFromCode)((0, sanitizer_1.inputSanitizer)(str)), name = _a.name, shirt = _a.shirt;
    var encodedNameAndPrefix = (0, parsers_1.stringToNumArray)((0, splitters_1.splitStringAtInterval)(name, scannerProperties_1.CODE_RANGE));
    var encodedName = (0, splitters_1.checkAndExtractPrefix)(encodedNameAndPrefix);
    if (!encodedName) {
        throw new Error("Not readable code!");
    }
    var decodedName = encodedName
        .map(function (cod) { return alphabetMap_1.alphabetRead.get(cod); })
        .filter(function (el) { return el !== undefined; })
        .join("");
    return decodedName + shirt;
};
exports.readCode = readCode;
/**
 * Encodes a name and numeric part into an encoded string using a specific prefix and an encoding map.
 *
 * @param {string} str - The string containing a name and numeric part that need to be encoded.
 * @returns {string} - The encoded string, consisting of an encoded prefix and the numeric part, separated by a specific delimiter.
 *
 * @example
 * const encoded = writeCode("PINZI66");
 * // returns "501511404819504427406427-66"
 */
var writeCode = function (str) {
    var _a = (0, splitters_1.splitNameAndShirtFromName)((0, sanitizer_1.inputSanitizer)(str)), name = _a.name, shirt = _a.shirt;
    var preparedName = (0, splitters_1.splitStringAtInterval)(name, scannerProperties_1.STRING_RANGE);
    var encodedName = preparedName
        .map(function (s) { return alphabetMap_1.alphabetWrite.get(s); })
        .filter(function (el) { return el !== undefined; });
    var encodedNameAndPrefix = (0, parsers_1.numToStringArray)(scannerProperties_1.RESERVATION_PREFIX.concat(encodedName)).join("");
    return encodedNameAndPrefix + scannerProperties_1.CODE_SEPARATOR + shirt;
};
exports.writeCode = writeCode;
var encoded = (0, exports.writeCode)("PINZI66");
var decoded = (0, exports.readCode)(encoded);
console.log(encoded, decoded);
//# sourceMappingURL=index.js.map