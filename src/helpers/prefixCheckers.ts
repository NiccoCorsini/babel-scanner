import { RES_PREFIX, SCANNER_PREFIX } from "../config/scannerProperties";

export const checkPrefix = (str: string): boolean => {
  if (!str.includes(SCANNER_PREFIX)) {
    return false;
  }
  return true;
};

export const checkResPrefix = (str: string): boolean => {
  if (!str.includes(RES_PREFIX)) {
    return false;
  }
  return true;
};

export const extractPrefix = (str: string, isRes: boolean): string =>
  str.slice(isRes ? RES_PREFIX.length : SCANNER_PREFIX.length);
