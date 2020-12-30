var request = require('sync-request');

module.exports = function getVmUrl(domain_name) {
    var res = request('GET', 'https://billing-api.vetmanager.cloud/host/' + domain_name);
    const data = JSON.parse(res.getBody());
    if(data.success) {
        return data.protocol + '://' + data.url;
    } else {
        throw "Something wrong";
    }
};
