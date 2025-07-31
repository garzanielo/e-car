
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: '1234',
}

export function loginAdmin(username, password) {
  return (
    username === ADMIN_CREDENTIALS.username &&
    password === ADMIN_CREDENTIALS.password
  )
}

export function isAdminLoggedIn() {
  return localStorage.getItem('isAdmin') === 'true'
}

export function logoutAdmin() {
  localStorage.removeItem('isAdmin')
}
