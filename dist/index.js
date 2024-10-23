"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeCode = exports.readCode = void 0;
var scannerProperties_1 = require("./config/scannerProperties");
var sanitizer_1 = require("./helpers/sanitizer");
var prefixCheckers_1 = require("./helpers/prefixCheckers");
var textCoders_1 = require("./helpers/textCoders");
/**
 * Decodes a string encoded with a specific scanner format and verifies its prefix.
 *
 * This function sanitizes the input string, splits it using a defined separator,
 * and decodes it from a Uint8Array format. It checks whether the decoded string
 * contains the expected scanner prefix. If the prefix is invalid, an error is thrown.
 *
 * @param {string} str - The encoded input string to decode.
 * @returns {ReadCodeOutput} The decoded string and a boolean flag indicating if it has a 'res' prefix.
 * @throws {Error} If the input string does not contain the required scanner prefix.
 */
var readCode = function (str) {
    var preworkedStr = (0, sanitizer_1.inputSanitizer)(str)
        .split(scannerProperties_1.CODE_SEPARATOR)
        .map(function (s) { return Number(s); });
    var tmpStr = textCoders_1.decoder.decode(new Uint8Array(preworkedStr));
    if (!(0, prefixCheckers_1.checkPrefix)(tmpStr)) {
        throw new Error("This input wasn't encoded with babel-scanner");
    }
    var isRes = (0, prefixCheckers_1.checkResPrefix)(tmpStr);
    var decodedStr = (0, prefixCheckers_1.extractPrefix)(tmpStr, isRes);
    return {
        decodedStr: decodedStr,
        isRes: isRes,
    };
};
exports.readCode = readCode;
/**
 * Encodes a string with a specific scanner prefix and optional reserved prefix if you need custom logic during decoding process.
 *
 * This function prepares a string by sanitizing the input and adding a prefix.
 * It encodes the string into a Uint8Array and formats the encoded data with a
 * separator. Optionally, a custom prefix can be provided, altering the encoding.
 *
 * @param {string} str - The input string to encode.
 * @param {Partial<Prefixes>} [prefix] - Optional prefix object, which defines if the string should be encoded with a reserved prefix.
 * @param {boolean} [prefix.isRes] - If true, adds a reserved prefix before encoding the string.
 * @returns {string} The encoded string with numbers separated by the defined separator.
 */
var writeCode = function (str, prefix) {
    var strToEncode = scannerProperties_1.SCANNER_PREFIX + (0, sanitizer_1.inputSanitizer)(str);
    if (prefix && prefix.isRes) {
        strToEncode = scannerProperties_1.RES_PREFIX + (0, sanitizer_1.inputSanitizer)(str);
    }
    //Default encoding to Uint8Array
    var encodedString = textCoders_1.encoder.encode(strToEncode);
    var finalStr = "";
    encodedString.forEach(function (n, i) {
        return (finalStr += i === encodedString.length - 1 ? n : n + scannerProperties_1.CODE_SEPARATOR);
    });
    return finalStr;
};
exports.writeCode = writeCode;
//# sourceMappingURL=index.js.map