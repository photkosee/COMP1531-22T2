import { getData, setData } from './dataStore';

function clear() {
  const data: any = getData();
  data.post = [];
  data.comments = [];
  setData(data);
  return {};
}

export { clear };
