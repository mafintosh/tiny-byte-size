module.exports = function tinyByteSize (bytes, space = false) {
  if (bytes < 1e3) return fmt(bytes, 'B', space)
  if (bytes < 1e6) return fmt(bytes / 1e3, 'kB', space)
  if (bytes < 1e9) return fmt(bytes / 1e6, 'MB', space)
  if (bytes < 1e12) return fmt(bytes / 1e9, 'GB', space)
  if (bytes < 1e15) return fmt(bytes / 1e12, 'TB', space)
  if (bytes < 1e18) return fmt(bytes / 1e15, 'PB', space)
  if (bytes < 1e21) return fmt(bytes / 1e18, 'EB', space)
  if (bytes < 1e24) return fmt(bytes / 1e21, 'ZB', space)
  return fmt(bytes / 1e24, 'YB', space)
}

function fmt (n, u, space) {
  n = Math.round(10 * n) / 10
  return n + (space ? ' ' : '') + u
}
