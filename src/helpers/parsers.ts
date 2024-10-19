export const numToStringArray = (series: number[]): string[] =>
  series.map((num) => num.toString());

export const stringToNumArray = (series: string[]): number[] =>
  series.map((str) => Number(str));
