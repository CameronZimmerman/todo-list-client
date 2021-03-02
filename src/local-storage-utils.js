const TOKEN = 'TOKEN'

export function getUser() {
    return localStorage.getItem(TOKEN) || ''
}
export function setUser(token) {
    localStorage.setItem(TOKEN, token)
}