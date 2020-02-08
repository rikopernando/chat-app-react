export const storeSession = (key, data, expired = null) => {
  let now = new Date()
  if (expired) {
    now.setHours(now.getHours() + expired.value)
  } else {
    now.setHours(now.getHours() + 1)
  }

  const authStore = {
    ...data,
    expired: now.getTime(),
    login_at: new Date()
  }
  const encode = window.btoa(JSON.stringify(authStore))
  localStorage.setItem(key, encode)
  return true
}

/**
 * Load data from session storage.
 * @function getSession
 * @param {string} - key.
 * @returns {object} - Information from stored data.
 */
export const getSession = key => {
  const data = localStorage.getItem(key)
  if (data === null) {
    return null
  } else {
    const decode = JSON.parse(window.atob(data))
    return decode
  }
}

/**
 * Remove data from session storage.
 * @function removeSession
 * @param {string} - key.
 * @returns {boolean}
 */
export const removeSession = key => {
  localStorage.removeItem(key)
  return true
}

export const setCookie = (cname, cvalue, exdays) => {
  let day = new Date()
  day.setTime(day.getTime() + exdays * 24 * 60 * 60 * 1000)
  // 1000 is milisecond
  // 60 is second
  // 60 is minute
  // 24 is hour
  let expires = "expires=" + day.toUTCString()
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}

export const getCookie = cname => {
  let name = cname + "="
  let decodedCookie = decodeURIComponent(document.cookie)
  let ca = decodedCookie.split(";")
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == " ") {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ""
}

export const deleteCookie = cname => {
  document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
}
