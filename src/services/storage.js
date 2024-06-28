export const saveUser = user => localStorage.setItem('user', JSON.stringify(user))

export const removeUser = () => localStorage.removeItem('user')

export const getUser = () => JSON.parse(localStorage.getItem('user'))