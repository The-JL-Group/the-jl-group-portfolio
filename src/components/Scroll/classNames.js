// util
// https://michaeluloth.com/filter-boolean
// passing each item in array into boolean() object. boolean() object then coerces each item to true or false depending on whether it's truthy or false. if truthy, we keep it.

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};
