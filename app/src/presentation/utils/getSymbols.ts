const truncateString = (codeValue: string, codeLength: number): Array<string> =>
  codeValue.substring(0, codeLength).split("");

const emptySymbols = (codeLength: number) =>
  new Array<string>(codeLength).fill("");

export const getSymbols = (codeValue: string, codeLength: number) =>
  new Array<string>()
    .concat(truncateString(codeValue, codeLength))
    .concat(emptySymbols(codeLength))
    .slice(0, codeLength);
