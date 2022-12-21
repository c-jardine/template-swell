const objectSubset = (obj: { [key: string]: any }, keys: string[]) =>
  Object.keys(obj)
    .filter((k) => !keys.includes(k))
    .reduce((res, k) => Object.assign(res, { [k]: obj[k] }), {});

export default objectSubset;
