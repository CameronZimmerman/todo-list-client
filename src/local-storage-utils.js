const USER = 'USER';

export function getUser() {
    return JSON.parse(localStorage.getItem(USER) || '{}')
}
export function setUser(user) {
    localStorage.setItem(USER, JSON.stringify(user));
}