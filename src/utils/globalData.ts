const globalData = {}

export function set (key, val) {
  globalData[key] = val
}

export function get (key) {
  if (!key) {
    return globalData
  }
  return globalData[key]
}
