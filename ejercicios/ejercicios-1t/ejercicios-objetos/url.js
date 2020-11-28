
const urlDecomposed = (url) => ({
  protocol: url.match(/(.+):/)[1],
  ipAdress: ((ip = url.match(/.{0,3}\..{0,3}\..\../)), ip ? ip[0] : ip),
  subDomain: ((sub = url.match(/\/\/(\D+)\..+\..+\//)), sub && !ip ? sub[1] : null),
  domainName: ip
    ? null
    : ((domain = url.split`/`[2]), sub ? domain.split`.`.slice(-2).join`.` : domain),
  folderTree: ((domain = url.split`/`.slice(3, -1)), domain[0] ? domain : null),
  targetFile: ((domain = url.split`/`.pop()), domain[0] ? domain.split`?`[0] : null),
  argumentsFile: ((domain = url.split`?`), domain[1] ? "?" + domain[1] : null),
});



/* console.log(urlDecomposed("https://www.google.com/search/test.js?ok=1")) */