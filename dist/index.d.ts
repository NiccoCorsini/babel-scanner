import { Prefixes, ReadCodeOutput } from "./definitions/prefixes";
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
export declare const readCode: (str: string) => ReadCodeOutput;
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
export declare const writeCode: (str: string, prefix?: Partial<Prefixes>) => string;
//# sourceMappingURL=index.d.ts.map