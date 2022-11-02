module.exports = function dataCyLoader(source) {
  var dataAttr = 'data-testid="([^"]*)"';
  if (source.match(dataAttr)) {
    source = source.replace(new RegExp(dataAttr, 'g'), '');
  }
  return source;
};
