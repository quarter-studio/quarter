global.class_module = source => {
  const target = source.exports.default

  if (is_class(target)) {
    target.class = source.id
    target.default = proxy(target)
    source.exports = target.default
  }
}

global.is_class = source => {
  return !!source && (!!source.class || source.toString().startsWith('class '))
}

global.proxy = source => {
  const proxies = {}

  if (source.$get) {
    proxies.get = function (target, key) {
      return key in target ? target[key] : target.$get(key)
    }
  }

  if (source.$set) {
    proxies.set = function (target, key, value) {
      return target.$set(key, value)
    }
  }

  return Object.keys(proxies).length ? new Proxy(source, proxies) : source
}
