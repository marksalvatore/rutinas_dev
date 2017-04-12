export function storeObject(key, obj) {
  localStorage.setItem(key, JSON.stringify(obj));
}

export function getStoredObject(key) {
  return JSON.parse(localStorage.getItem(key));
}

