var page = require('webpage').create();
// Function to log JavaScript errors on webpage

page.onError = function (msg, trace) {
    var msgStack = ['ERROR: ' + msg];
    if (trace && trace.length) {
        msgStack.push('TRACE:');
        trace.forEach(function (t) {
            msgStack.push(' -> ' + (t.file || t.sourceURL) + ': ' + t.line + (t.function ? ' (in function ' + t.function + ')' : ''));
        });
    }
    console.error(msgStack.join('\n'));
};

page.open('https://app.marketingmesh.co', function (status) {
    if (status !== 'success') {
        console.log('FAIL to load the address');
    }
    else {
        console.log('Loaded successfully!!!');
    }
    phantom.exit();
});