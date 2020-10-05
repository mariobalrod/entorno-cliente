const adress = 'https://github.com/mariobalrod/hola.txt?tab=repositories#bhrgrgrg';
const url = new URL(adress);

const subdomain = url.host.split('.');
const targetFile = url.pathname.split('/');

console.log('Protocol: ' + url.protocol);
if(subdomain.indexOf('www') !== -1){
    console.log('SubDomain: ' + subdomain[0]);
}
console.log('IpAdress: ' + url.hostname);
console.log('DomainName: ' + url.host);
console.log('FolderTree: ' + url.pathname);
console.log('TargetFile: ' + targetFile[targetFile.length - 1]);
console.log('ArgumentsFile: ' + url.hash);