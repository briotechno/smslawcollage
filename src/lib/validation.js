export const isEmpty = (value = "") => value.toString().trim().length === 0;
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;