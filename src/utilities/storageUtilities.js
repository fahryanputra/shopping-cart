function addToStorage(key, object) {
  return localStorage.setItem(key, JSON.stringify(object));
}

function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function removeFromStorage(key) {
  return localStorage.getItem(key) && localStorage.removeItem(key);
}

function totalPriceFromStorage() {
  let total = 0;

  Object.keys(localStorage).map(
    (element) => (total += getFromStorage(element).total)
  );

  return total;
}

export {
  addToStorage,
  getFromStorage,
  removeFromStorage,
  totalPriceFromStorage,
};
