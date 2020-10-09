const adress = 'https://github.com/mariobalrod/hola.txt?tab=repositories#bhrgrgrg';

function url(url) {
    let protocol = url.match(/(^\w+):\/\//)
    let ip = url.match(/^\w+:\/\/([\d\.]+)/)
    let subdomain = url.match(/^\w+:\/\/([a-z]+)\.\w+\./)
    let domain = url.match(/^\w+:\/\/(?:[a-z]+\.)?(\w+\.[a-z]+)/)
    let folderTree = url.match(/^\w+:\/\/(?:[a-z]+\.)?\w+\.[a-z]+\/([\w\/]+)\//)
    let targetFile = url.match(/\/([\w\.]+)(?:\?.*)?$/)
    let argumentsFile = url.match(/(\?.+)/)

  return {
      protocol,
      ip,
      subdomain,
      domain,
      folderTree,
      targetFile,
      argumentsFile
   };
}

console.log(url("https://www.google.com/search/test.js?ok=1"))