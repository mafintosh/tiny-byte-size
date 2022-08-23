const byteSize = module.exports = exports = function tinyByteSize (bytes, space = false) {
  const b = bytes < 0 ? -bytes : bytes
  if (b < 1e3) return fmt(bytes, 'B', space)
  if (b < 1e6) return fmt(bytes / 1e3, 'kB', space)
  if (b < 1e9) return fmt(bytes / 1e6, 'MB', space)
  if (b < 1e12) return fmt(bytes / 1e9, 'GB', space)
  if (b < 1e15) return fmt(bytes / 1e12, 'TB', space)
  if (b < 1e18) return fmt(bytes / 1e15, 'PB', space)
  if (b < 1e21) return fmt(bytes / 1e18, 'EB', space)
  if (b < 1e24) return fmt(bytes / 1e21, 'ZB', space)
  return fmt(bytes / 1e24, 'YB', space)
}

exports.perSecond = function perSecond (bytes, ms = 1000, space = false) {
  return byteSize(bytes / ms * 1e3, space) + '/s'
}

function fmt (n, u, space) {
  n = Math.round(10 * n) / 10
  return n + (space ? ' ' : '') + u
}
