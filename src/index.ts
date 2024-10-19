import { alphabetRead, alphabetWrite } from "./config/alphabetMap";
import {
  CODE_RANGE,
  CODE_SEPARATOR,
  RESERVATION_PREFIX,
  STRING_RANGE,
} from "./config/scannerProperties";
import { AlphabetCodes, AlphabetLecters } from "./definitions/alphabet";
import { numToStringArray, stringToNumArray } from "./helpers/parsers";
import { inputSanitizer } from "./helpers/sanitizer";
import {
  checkAndExtractPrefix,
  splitNameAndShirtFromCode,
  splitNameAndShirtFromName,
  splitStringAtInterval,
} from "./helpers/splitters";

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
export const readCode = (str: string): string => {
  const { name, shirt } = splitNameAndShirtFromCode(inputSanitizer(str));

  const encodedNameAndPrefix = stringToNumArray(
    splitStringAtInterval(name, CODE_RANGE)
  );

  const encodedName = checkAndExtractPrefix(encodedNameAndPrefix);

  if (!encodedName) {
    throw new Error("Not readable code!");
  }

  const decodedName = encodedName
    .map((cod) => alphabetRead.get(cod as AlphabetCodes))
    .filter((el) => el !== undefined)
    .join("");

  return decodedName + (shirt || "");
};

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
export const writeCode = (str: string): string => {
  const { name, shirt } = splitNameAndShirtFromName(inputSanitizer(str));

  const preparedName = splitStringAtInterval(name, STRING_RANGE);

  const encodedName = preparedName
    .map((s) => alphabetWrite.get(s as AlphabetLecters))
    .filter((el) => el !== undefined);

  const encodedNameAndPrefix = numToStringArray(
    RESERVATION_PREFIX.concat(encodedName)
  ).join("");

  return encodedNameAndPrefix + (shirt ? CODE_SEPARATOR + shirt : "");
};
