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
export declare const readCode: (str: string) => string;
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
export declare const writeCode: (str: string) => string;
//# sourceMappingURL=index.d.ts.map