export const appendQueryParams = (endpoint: string, includes: string[]): string => {

  if (includes && includes.length > 0) {
    includes.forEach((include, index) => {

      endpoint = endpoint + (index === 0 ? '?' : '&') + include;
    });
  }

  return endpoint;
};

export function generateUUID(parts = 3, str = 'answer') {
  const stringArr = [];
  for (let i = 0; i < parts; i++) {
    // tslint:disable-next-line:no-bitwise
    const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    stringArr.push(S4);
  }
  return str + '-' + stringArr.join('');
}


export function trackByFn(index) {
  return index;
}

export function isNumber(value: any): value is number {
  return typeof value === 'number';
}

export function isNumberFinite(value: any): value is number {
  return isNumber(value) && isFinite(value);
}

export function isPositive(value: number): boolean {
  return value >= 0;
}

export function isInteger(value: number): boolean {
  // No rest, is an integer
  return value % 1 === 0;
}

export function toDecimal(value: number, decimal: number, fixed = false): any {
  return fixed ? ((value * Math.pow(10, decimal)) / Math.pow(10, decimal)).toFixed(2)
    : Math.round(value * Math.pow(10, decimal)) / Math.pow(10, decimal);
}

export const areEquals = (array1: string[], array2: string[]): boolean => {
  return JSON.stringify(array1.sort()) === JSON.stringify(array2.sort());
};
