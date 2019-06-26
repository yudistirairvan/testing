var page = require('webpage').create();
var url = 'https://app.marketingmesh.co/';
page.open(url, function (status) {
console.log(status);
phantom.exit();
});