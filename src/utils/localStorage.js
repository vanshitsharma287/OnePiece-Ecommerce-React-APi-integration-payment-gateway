export function setLocalStorage(key, value) {
    if (key != undefined && value != undefined) {
        localStorage.setItem(key, JSON.stringify(value))
    }
}

export function getLocalStorage(key) {
    const item = localStorage.getItem(key);
    if (item != undefined) {
        return JSON.parse(item);
    }
    return false;
}