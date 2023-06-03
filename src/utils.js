function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomInteger(a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

export {
  getRandomArrayElement,
  getRandomInteger
};
