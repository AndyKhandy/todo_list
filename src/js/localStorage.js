export function changeLocalStorage(itemName, object) {
  localStorage.setItem(itemName, JSON.stringify(object));
}
