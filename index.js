const https = require('https')

module.exports = function getVmUrl(domain_name) {
    const options = {
        hostname: 'billing-api.vetmanager.cloud',
        port: 443,
        path: '/host/' + domain_name,
        method: 'GET'
    };

    const req = https.request(options, res => {
        res.on('data', d => {
            const data = JSON.parse(d);
            process.stdout.write(data.protocol + '://' + data.url);
        })
    });

    req.on('error', error => {
        throw error;
    });

    req.end();
};

