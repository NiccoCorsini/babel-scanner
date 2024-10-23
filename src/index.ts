import {
  CODE_SEPARATOR,
  RES_PREFIX,
  SCANNER_PREFIX,
} from "./config/scannerProperties";
import { Prefixes, ReadCodeOutput } from "./definitions/prefixes";
import { inputSanitizer } from "./helpers/sanitizer";
import {
  checkPrefix,
  checkResPrefix,
  extractPrefix,
} from "./helpers/prefixCheckers";
import { decoder, encoder } from "./helpers/textCoders";

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
export const readCode = (str: string): ReadCodeOutput => {
  const preworkedStr = inputSanitizer(str)
    .split(CODE_SEPARATOR)
    .map((s) => Number(s));

  const tmpStr = decoder.decode(new Uint8Array(preworkedStr));

  if (!checkPrefix(tmpStr)) {
    throw new Error("This input wasn't encoded with babel-scanner");
  }

  const isRes = checkResPrefix(tmpStr);

  const decodedStr = extractPrefix(tmpStr, isRes);

  return {
    decodedStr,
    isRes,
  };
};

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
export const writeCode = (str: string, prefix?: Partial<Prefixes>): string => {
  let strToEncode = SCANNER_PREFIX + inputSanitizer(str);

  if (prefix && prefix.isRes) {
    strToEncode = RES_PREFIX + inputSanitizer(str);
  }

  //Default encoding to Uint8Array
  const encodedString = encoder.encode(strToEncode);

  let finalStr = "";

  encodedString.forEach(
    (n, i) =>
      (finalStr += i === encodedString.length - 1 ? n : n + CODE_SEPARATOR)
  );

  return finalStr;
};
