var page = require('webpage').create();
page.open('https://app.marketingmesh.co/', function() {
  page.render('mm.png');
  phantom.exit();
});