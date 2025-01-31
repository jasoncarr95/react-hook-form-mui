function _extends() {
  return (
    (_extends = Object.assign
      ? Object.assign.bind()
      : function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i]
            for (var key in source)
              Object.prototype.hasOwnProperty.call(source, key) &&
                (target[key] = source[key])
          }
          return target
        }),
    _extends.apply(this, arguments)
  )
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {}
  var target = {},
    sourceKeys = Object.keys(source),
    key,
    i
  for (i = 0; i < sourceKeys.length; i++)
    (key = sourceKeys[i]),
      !(excluded.indexOf(key) >= 0) && (target[key] = source[key])
  return target
}
export {_extends, _objectWithoutPropertiesLoose}
