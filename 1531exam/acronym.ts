export function acronym_make(inputs: string[]): string[] {
  if (inputs.length === 0) {
    throw new Error();
  }
  const result: any = [];
  for (let i = 0; i < inputs.length; i++) {
    const tmp: any = inputs[i].match(/\b(\w)/g);
    let str: string = tmp.join('');
    str = str.replace(/[aeiouAEIOU]/g, '');
    str = str.toUpperCase();
    if (str.length > 10) {
      str = 'N/A';
    }
    result.push(str);
  }
  return result;
}
