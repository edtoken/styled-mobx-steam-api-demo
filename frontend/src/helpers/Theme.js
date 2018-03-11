let _theme = undefined;

const makeProperties = (obj, theme) => {
  for (let k in obj) {
    let valueType = typeof obj[k];

    if (valueType === "function") {
      obj[k] = obj[k](theme);
    }
    if (valueType === "object") {
      obj[k] = makeProperties(obj[k], theme);
    }
  }
  return obj;
};

export const createTheme = theme => {
  if (_theme) {
    return _theme;
  }
  _theme = makeProperties(theme, theme);
  return _theme;
};
