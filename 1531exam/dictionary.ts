export function construct_dict(keys: string[], values: any[]) {
  let dict: any = {};
  for (let i = 0; i < keys.length; i++) {
    dict[keys[i]] = values[i];
  }
  return dict;
}
