import {
  CODE_SEPARATOR,
  RESERVATION_PREFIX,
} from "../config/scannerProperties";
import { Player } from "../definitions/splitters";

export const splitStringAtInterval = (
  str: string,
  interval: number
): string[] => {
  const result: string[] = [];

  for (let i = 0; i < str.length; i += interval) {
    result.push(str.slice(i, i + interval));
  }

  return result;
};

export const splitNameAndShirtFromCode = (str: string): Player => {
  const [name, shirt] = str.split(CODE_SEPARATOR);
  return { name, shirt };
};

export const splitNameAndShirtFromName = (str: string): Player => {
  const name = str.replace(/[0-9]/g, "");
  const shirt = str.replace(/[A-Za-z]/g, "");

  return { name, shirt };
};

export const checkAndExtractPrefix = (arr: number[]): false | number[] => {
  if (arr.length < RESERVATION_PREFIX.length) {
    return false;
  }

  for (let i = 0; i < RESERVATION_PREFIX.length; i++) {
    if (arr[i] !== RESERVATION_PREFIX[i]) {
      return false;
    }
  }

  return arr.slice(RESERVATION_PREFIX.length);
};
